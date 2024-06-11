// D:\intellji\ettshop\Truong\eTTShop\frontend\src\admin\component\ChatBody.js
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef, useCallback } from "react";
import { setGetMessenger, resetMessages } from "../../redux/MessageActions"; // Đảm bảo nhập đúng đường dẫn

const ChatBody = () => {
    const userId = useSelector(state => state.messageAdmin.user_id);
    const dispatch = useDispatch();
    const messages = useSelector(state => state.message.messages);
    const socketRef = useRef(null);
    const messageIntervalRef = useRef(null);
    const check_click = useSelector(state => state.message.check_click);
    const isAdmin = useSelector(state => state.messageAdmin.isAdmin);

    const isJSON = (str) => {
        try {
            JSON.parse(str);
            return true;
        } catch (e) {
            return false;
        }
    };

    const initializeWebSocket = useCallback(() => {
        if (socketRef.current) {
            socketRef.current.close();
        }

        const socket = new WebSocket(`ws://localhost:8080/ws/messenger/getMess?userId=${userId}`);

        socket.onopen = () => {
            console.log('WebSocket connection established');

            if (messageIntervalRef.current) {
                clearInterval(messageIntervalRef.current);
            }

            messageIntervalRef.current = setInterval(() => {
                if (socket.readyState === WebSocket.OPEN) {
                    socket.send(`${userId}:ping`);
                }
            }, 2000);

            socket.onclose = () => {
                clearInterval(messageIntervalRef.current);
            };
        };

        socket.onmessage = (event) => {
            if (isJSON(event.data)) {
                const data = JSON.parse(event.data);
                dispatch(setGetMessenger(data));
            } else {
                console.error('Received invalid message from server:', event.data);
            }
        };

        socket.onerror = (error) => {
            console.error('WebSocket Error: ' + error);
        };

        socketRef.current = socket;
    }, [userId, dispatch, isAdmin]);

    useEffect(() => {
        if (userId) {
            console.log('Initializing WebSocket with userId:', userId);

            // Đóng kết nối WebSocket cũ và xóa interval cũ trước khi khởi tạo kết nối mới
            if (socketRef.current) {
                socketRef.current.close();
            }
            if (messageIntervalRef.current) {
                clearInterval(messageIntervalRef.current);
            }

            // Reset tin nhắn khi userId thay đổi
            dispatch(resetMessages());

            // Khởi tạo WebSocket mới
            initializeWebSocket();
        } else {
            console.error('Invalid userId:', userId);
        }
    }, [userId, initializeWebSocket, dispatch, check_click]);

    const sortedMessages = [...messages].sort((a, b) => new Date(a.create) - new Date(b.create));

    return (
        <ul className="chat-history list-unstyled mb-0 py-lg-5 py-md-4 py-3 flex-grow-1">
            {sortedMessages.map((msg, index) => (
                <div key={index}>
                    <li className={`mb-3 d-flex align-items-end ${msg.user_send === "admin" ? "flex-row" : 'flex-row-reverse'}`}>
                        <div className={`max-width-70 ${msg.user_send === "admin" ? '' : 'text-right'} w-100 d-flex`}>
                            <div className={`card border-0 p-3 ${msg.user_send === "admin" ? '' : 'bg-primary text-light'} ml-auto`}
                                 style={{ width: '30%', wordWrap: 'break-word', marginRight: msg.user_send === "admin" ? 'auto' : '0', marginLeft: msg.user_send === "admin" ? '0' : 'auto' }}>
                                {msg.user_send}
                                <div className="message">
                                    <br />
                                    {msg.message} <br />
                                    <span className="text-muted small">  {new Date(msg.create).toLocaleTimeString()}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </li>
                </div>
            ))}
        </ul>
    );
};

export default ChatBody;
