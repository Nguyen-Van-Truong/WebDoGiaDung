package websocket;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@Configuration
@EnableWebSocket
public class WebSocketConfigMessager implements WebSocketConfigurer {

    private final MessengerHandler messengerHandlerUser;
    private final MessengerHandlerAdmin messengerHandlerAdmin;
    private final GetMessengerHandel getMessengerHandel;
    public WebSocketConfigMessager(MessengerHandlerAdmin messengerHandlerAdmin, MessengerHandler messengerHandlerUser,GetMessengerHandel getMessengerHandel) {
        this.messengerHandlerAdmin = messengerHandlerAdmin;
        this.messengerHandlerUser = messengerHandlerUser;
        this.getMessengerHandel = getMessengerHandel;
    }
    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(messengerHandlerUser, "/ws/messenger").setAllowedOrigins("*");
        registry.addHandler(messengerHandlerAdmin, "/ws/messenger/admin").setAllowedOrigins("*");

        registry.addHandler(getMessengerHandel, "/ws/messenger/getMess").setAllowedOrigins("*");
    }

}
