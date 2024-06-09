package websocket;

import com.example.demo.dto.MessagerDTO;
import com.example.demo.service.MessengerService;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.net.URI;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@Component
public class MessengerHandlerAdmin extends TextWebSocketHandler {

    private final MessengerService messengerService;
    private final List<WebSocketSession> sessions = new CopyOnWriteArrayList<>();

    public MessengerHandlerAdmin(MessengerService messengerService) {
        this.messengerService = messengerService;
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) {
        sessions.add(session);
        System.out.println("WebSocket connection established with session ID: " + session.getId());

        // Get userId from query parameters
        URI uri = session.getUri();
        String query = uri.getQuery();
        String[] queryParams = query.split("=");
        String userId = queryParams.length > 1 ? queryParams[1] : null;

        if (userId != null) {
            try {
                int userIdInt = Integer.parseInt(userId);
                List<MessagerDTO> messages = messengerService.getAllMessagesForUser(userIdInt);
                String messagesJson = convertToJson(messages);
                sendMessage(session, messagesJson);
            } catch (NumberFormatException e) {
                sendMessage(session, "Invalid user ID format");
            }
        } else {
            sendMessage(session, "User ID is missing");
        }
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) {
        sessions.remove(session);
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

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) {
        String payload = message.getPayload();
        String[] parts = payload.split(":", 2);

        if (parts.length == 2) {
            String userId = parts[0].trim();
            String messageText = parts[1].trim();

            try {
                int userIdInt = Integer.parseInt(userId);
                List<MessagerDTO> combinedMessages = messengerService.sendMessageAdmin(userIdInt, messageText);

                if (combinedMessages != null) {
                    String combinedMessagesJson = convertToJson(combinedMessages);
                    // Gửi tin nhắn đến tất cả các phiên kết nối WebSocket đang mở
                    for (WebSocketSession sess : sessions) {
                        sendMessage(sess, combinedMessagesJson);
                    }
                } else {
                    sendMessage(session, "Error: Could not retrieve messages.");
                }
            } catch (NumberFormatException e) {
                sendMessage(session, "Invalid user ID format");
            }
        } else {
            sendMessage(session, "Invalid message format. Expected format: 'userId:messageText'");
        }
    }

    private String convertToJson(List<MessagerDTO> messages) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
        StringBuilder sb = new StringBuilder("[");
        for (int i = 0; i < messages.size(); i++) {
            MessagerDTO message = messages.get(i);
            String formattedDate = dateFormat.format(message.getCreate());
            sb.append("{")
                    .append("\"user_send\":\"").append(message.getUser_send()).append("\",")
                    .append("\"user_rec\":\"").append(message.getUser_rec()).append("\",")
                    .append("\"message\":\"").append(message.getMessage()).append("\",")
                    .append("\"create\":\"").append(formattedDate).append("\"")
                    .append("}");
            if (i < messages.size() - 1) {
                sb.append(",");
            }
        }
        sb.append("]");
        return sb.toString();
    }
}
