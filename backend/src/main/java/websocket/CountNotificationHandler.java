package websocket;

import com.example.demo.service.NotificationService;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Map;
import java.io.IOException;

public class CountNotificationHandler extends TextWebSocketHandler {

    private final NotificationService notificationService;

    public CountNotificationHandler(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) {
        System.out.println("WebSocket connection established with session ID: " + session.getId());
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
        // Assuming the client sends just the user ID in the message payload
        String userId = message.getPayload();

        try {
            if (userId != null && !userId.trim().isEmpty()) {
                System.out.println("Received WebSocket message for user ID: " + userId);
                // Parse the user ID from the message payload
                int count = notificationService.countNotification(Integer.parseInt(userId.trim()));
                System.out.println("Notification count for user ID " + userId + ": " + count);
                // Send just the count as a message
                sendMessage(session, Integer.toString(count));
            } else {

                sendMessage(session, "0");
            }
        } catch (NumberFormatException e) {

            sendMessage(session, "0");
        } catch (Exception e) {
            System.err.println("An error occurred while handling WebSocket message: " + e.getMessage());
            e.printStackTrace();
        }
    }

}
