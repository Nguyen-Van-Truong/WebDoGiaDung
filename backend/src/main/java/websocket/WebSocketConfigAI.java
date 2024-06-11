package websocket;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@Configuration
@EnableWebSocket
public class WebSocketConfigAI implements WebSocketConfigurer {

    private final AIResponseHandler aiResponseHandler;

    public WebSocketConfigAI(AIResponseHandler aiResponseHandler) {
        this.aiResponseHandler = aiResponseHandler;
    }

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(aiResponseHandler, "/ws/ai").setAllowedOrigins("*");
    }
}
