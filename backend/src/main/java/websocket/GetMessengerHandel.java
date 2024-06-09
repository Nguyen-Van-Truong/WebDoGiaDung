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
import java.util.concurrent.ConcurrentHashMap;

@Component
public class GetMessengerHandel extends TextWebSocketHandler {

    private final MessengerService messengerService;
    private final ConcurrentHashMap<String, CopyOnWriteArrayList<WebSocketSession>> userSessions = new ConcurrentHashMap<>();

    public GetMessengerHandel(MessengerService messengerService) {
        this.messengerService = messengerService;
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session) {
        System.out.println("WebSocket connection established with session ID: " + session.getId());

        // Get userId from query parameters
        URI uri = session.getUri();
        String query = uri.getQuery();
        String[] queryParams = query.split("=");
        String userId = queryParams.length > 1 ? queryParams[1] : null;

        if (userId != null) {
            // Thêm phiên kết nối mới vào danh sách các phiên kết nối của userId
            userSessions.computeIfAbsent(userId, k -> new CopyOnWriteArrayList<>()).add(session);

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
        userSessions.forEach((userId, sessions) -> sessions.remove(session));
        System.out.println("WebSocket connection closed with session ID: " + session.getId());
    }

    private void sendMessage(WebSocketSession session, String text) {
        try {
            if (session.isOpen()) {
                session.sendMessage(new TextMessage(text));
                System.out.println("Tin nhắn gửi: " + text);
            } else {
                System.err.println("websocket  hiện tại không mở" + session.getId());
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


            try {
                int userIdInt = Integer.parseInt(userId);
                List<MessagerDTO> combinedMessages = messengerService.getAllMessagesForUser(userIdInt);
                String combinedMessagesJson = convertToJson(combinedMessages);

                // Gửi tin nhắn đến tất cả các phiên kết nối của userId tương ứng
                List<WebSocketSession> sessions = userSessions.get(userId);
                if (sessions != null) {
                    for (WebSocketSession sess : sessions) {
                        sendMessage(sess, combinedMessagesJson);
                    }
                }
            } catch (NumberFormatException e) {
                sendMessage(session, "id người dùng không đúng");
            }
        } else {
            sendMessage(session, "Định dạng tin nhắn không hợp lệ. Định dạng mong đợi: 'userId:messageText'");
        }
    }

    /**
     * trả về chuỗi json
     * @param messages
     * @return
     */
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
