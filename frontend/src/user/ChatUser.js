import React, { useState, useEffect, useRef } from 'react';
import '../css/chat.css';
import '../App.css';
import { faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, setGetMessenger, setMessages, setStatus } from "../redux/MessageActions";

const ChatUser = () => {
    const dispatch = useDispatch();
    const usernameMess = useSelector(state => state.appUser.usernameMess);
    const userId = useSelector(state => state.appUser.user_id);
    const messages = useSelector(state => state.message.messages);
    const status = useSelector(state => state.message.status);
    const isAdmin = useSelector(state => state.messageAdmin.isAdmin); // Sử dụng giá trị isAdmin từ state
    const [message, setMessage] = useState("");
    const socketRef1 = useRef(null);
    const socketRef2 = useRef(null);

    const handleClick = () => {
        dispatch(setStatus(!status));
    };

    const isJSON = (str) => {
        try {
            JSON.parse(str);
            return true;
        } catch (e) {
            return false;
        }
    };

    const initializeWebSocket2 = () => {
        return new Promise((resolve) => {
            const socket = new WebSocket(`ws://localhost:8080/ws/messenger?userId=${userId}`);

            socket.onopen = () => {
                console.log('WebSocket2 connection established with userId:', userId);
                resolve(socket);
            };

            socket.onmessage = (event) => {
                if (isJSON(event.data)) {
                    const data = JSON.parse(event.data);
                    if (Array.isArray(data)) {
                        dispatch(setMessages(data));
                    } else {
                        dispatch(addMessage(data));
                    }
                } else {
                    console.warn('Received invalid message from server:', event.data);
                }
            };

            socket.onclose = () => {
                console.log('WebSocket2 connection closed, reconnecting...');
                setTimeout(() => initializeWebSocket2().then(resolve), 1000);
            };

            socket.onerror = (error) => {
                console.error('WebSocket2 error:', error);
                socket.close();
            };

            socketRef2.current = socket;
        });
    };

    const initializeWebSocket1 = () => {
        const socket = new WebSocket(`ws://localhost:8080/ws/messenger/getMess?userId=${userId}`);

        socket.onopen = () => {
            console.log('WebSocket1 connection established with userId:', userId);
            const messageInterval = setInterval(() => {
                if (socket.readyState === WebSocket.OPEN) {
                    socket.send(`${userId}:ping`);
                }
            }, 500);

            socket.onclose = () => {
                clearInterval(messageInterval);
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
            console.error('WebSocket1 Error: ' + error);
        };

        socketRef1.current = socket;
    };

    useEffect(() => {
        if (!isAdmin && userId) { // Chỉ khởi tạo WebSocket khi không phải là admin và userId hợp lệ
            console.log('Initializing WebSockets with userId:', userId);
            initializeWebSocket2().then(() => {
                initializeWebSocket1();
            });
        } else if (isAdmin) {
            console.log('Admin logged in, not initializing user WebSockets.');
        } else {
            console.error('Invalid userId:', userId);
        }

        return () => {
            if (socketRef1.current) {
                socketRef1.current.close();
            }
            if (socketRef2.current) {
                socketRef2.current.close();
            }
        };
    }, [userId, isAdmin]);

    const sendMessage = () => {
        if (socketRef2.current && socketRef2.current.readyState === WebSocket.OPEN) {
            const messageText = message;

            socketRef2.current.send(`${userId}:${messageText}`);
            dispatch(addMessage({ user_send: userId, message, user_rec: "receiver", create: new Date().toISOString() }));
            setMessage("");
        }
    };

    const isValidDate = (date) => {
        const d = new Date(date);
        return d instanceof Date && !isNaN(d);
    };

    const sortedMessages = [...messages].sort((a, b) => new Date(a.create) - new Date(b.create));

    return (
        <div className="mini-chat">
            <div className="chat-container">
                <div className="chat-header">
                    {usernameMess}
                    <FontAwesomeIcon icon={faTimes} onClick={handleClick} style={{ cursor: 'pointer', marginLeft: 'auto' }} />
                </div>
                <div className="message-container">
                    {sortedMessages.map((msg, index) => (
                        <div key={index} className={`message ${msg.user_send === "admin" ? 'sender' : 'receiver'}`}>
                            <div className="user-label">{msg.user_send}</div>
                            <div>
                                {msg.message}
                                <br />
                                <span className="message-time">
                                    {isValidDate(msg.create) ? new Date(msg.create).toLocaleTimeString() : 'Invalid date'}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="chat-footer">
                    <input
                        className="message_color"
                        type="text"
                        placeholder="Aa"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={(e) => { if (e.key === 'Enter') sendMessage(); }}
                    />
                    <button onClick={sendMessage}>
                        <FontAwesomeIcon icon={faPaperPlane} style={{ fontSize: '20px' }} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatUser;
