package websocket;

import org.springframework.ai.chat.messages.UserMessage;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.ollama.OllamaChatModel;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;
import reactor.core.Disposable;
import reactor.core.publisher.Flux;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.atomic.AtomicReference;

@Component
public class AIResponseHandler extends TextWebSocketHandler {

    private final OllamaChatModel chatModel;
    private final List<WebSocketSession> sessions = new CopyOnWriteArrayList<>();
    private final ConcurrentHashMap<String, AtomicReference<Disposable>> sessionSubscriptions = new ConcurrentHashMap<>();

    public AIResponseHandler(OllamaChatModel chatModel) {
        this.chatModel = chatModel;
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) {
        sessions.add(session);
        sessionSubscriptions.put(session.getId(), new AtomicReference<>());
        System.out.println("WebSocket connection established with session ID: " + session.getId());

        // Gửi session ID đến frontend
        try {
            session.sendMessage(new TextMessage("{\"sessionId\":\"" + session.getId() + "\"}"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) {
        stopStreaming(session.getId());
        sessions.remove(session);
        sessionSubscriptions.remove(session.getId());
        System.out.println("WebSocket connection closed with session ID: " + session.getId());
    }

    private void sendMessage(WebSocketSession session, String text) {
        try {
            if (session.isOpen()) {
                session.sendMessage(new TextMessage(text));
                System.out.println("Message sent: " + text);
            } else {
                System.err.println("Attempted to send message, but WebSocket session is not open. Session ID: " + session.getId());
            }
        } catch (IOException e) {
            System.err.println("An IOException occurred while sending WebSocket message: " + e.getMessage());
            e.printStackTrace();
        }
    }

    public void stopStreaming(String sessionId) {
        AtomicReference<Disposable> subscriptionRef = sessionSubscriptions.get(sessionId);
        if (subscriptionRef != null && subscriptionRef.get() != null) {
            subscriptionRef.get().dispose();
            System.out.println("Streaming stopped for session ID: " + sessionId);
        }
    }

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) {
        String payload = message.getPayload();
        if (payload.equals("{\"action\":\"stop\"}")) {
            stopStreaming(session.getId());
            return;
        }

        Prompt prompt = new Prompt(new UserMessage(payload));

        stopStreaming(session.getId()); // Stop any existing stream before starting a new one

        Disposable subscription = chatModel.stream(prompt)
                .flatMap(response -> {
                    String content = response.getResult().getOutput().getContent();
                    String[] words = content.split(" ");
                    return Flux.fromArray(words);
                })
                .subscribe(
                        word -> sendMessage(session, word),
                        error -> sendMessage(session, "Error: " + error.getMessage()),
                        () -> sendMessage(session, "Stream finished")
                );

        sessionSubscriptions.get(session.getId()).set(subscription);
    }
}
