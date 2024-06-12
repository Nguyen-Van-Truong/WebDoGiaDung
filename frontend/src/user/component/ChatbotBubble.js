import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faSquare } from '@fortawesome/free-solid-svg-icons';

const ChatbotBubble = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [error, setError] = useState(null);
    const [sessionId, setSessionId] = useState(null); // Thêm state để lưu session ID
    const messagesEndRef = useRef(null);
    const socketRef = useRef(null);

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            // Mở bong bóng chat, kết nối WebSocket
            connectWebSocket();
        } else {
            // Đóng bong bóng chat, ngắt kết nối WebSocket
            disconnectWebSocket();
        }
    };

    const connectWebSocket = () => {
        // Tạo WebSocket connection.
        socketRef.current = new WebSocket('ws://localhost:8080/ws/ai');

        // Connection opened
        socketRef.current.onopen = () => {
            console.log('WebSocket connection established');
        };

        // Listen for messages
        socketRef.current.onmessage = (event) => {
            const data = event.data;
            try {
                const message = JSON.parse(data);
                if (message.sessionId) {
                    setSessionId(message.sessionId); // Lưu session ID
                }
            } catch (e) {
                let newMessage = data;
                if (newMessage === 'Stream finished') {
                    console.log('Stream finished');
                    setIsTyping(false);
                    return;
                }
                if (newMessage === '') {
                    newMessage = ' ';
                }
                setMessages((prevMessages) => {
                    // Gộp các phản hồi mới vào một dòng
                    if (prevMessages.length > 0 && prevMessages[prevMessages.length - 1].sender === 'bot') {
                        const lastMessage = prevMessages[prevMessages.length - 1];
                        return [
                            ...prevMessages.slice(0, -1),
                            { sender: 'bot', text: lastMessage.text + newMessage }
                        ];
                    } else {
                        return [
                            ...prevMessages,
                            { sender: 'bot', text: newMessage }
                        ];
                    }
                });
                setIsTyping(true);
            }
        };

        // Handle errors
        socketRef.current.onerror = (error) => {
            console.error('WebSocket error:', error);
            setError('WebSocket error. Please try again.');
            setIsTyping(false);
        };

        // Connection closed
        socketRef.current.onclose = () => {
            console.log('WebSocket connection closed');
            setIsTyping(false);
        };
    };

    const disconnectWebSocket = () => {
        if (socketRef.current) {
            socketRef.current.close();
        }
    };

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (input.trim() === '') return;
        setMessages([...messages, { sender: 'user', text: input }]);
        sendMessage(input);
        setInput('');
    };

    const sendMessage = (message) => {
        setIsTyping(true);
        setError(null);
        if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
            socketRef.current.send(message);
        }
    };

    const handleStop = () => {
        if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
            socketRef.current.send(JSON.stringify({ action: 'stop' }));
        }
        setIsTyping(false);
    };

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const styles = {
        chatbotBubble: {
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            zIndex: 1000,
        },
        chatbotContent: {
            display: isOpen ? 'flex' : 'none',
            flexDirection: 'column',
            width: '300px',
            height: '400px',
            backgroundColor: 'white',
            border: '1px solid #ccc',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            borderRadius: '10px',
            overflow: 'hidden',
        },
        chatbotToggle: {
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            fontSize: '24px',
        },
        messagesContainer: {
            flex: 1,
            overflowY: 'auto',
            padding: '10px',
            backgroundColor: '#f4f4f4',
            borderRadius: '5px',
        },
        message: {
            marginBottom: '10px',
            padding: '10px',
            borderRadius: '5px',
            whiteSpace: 'pre-line', // Preserve line breaks
        },
        userMessage: {
            textAlign: 'right',
            backgroundColor: '#e1ffc7',
            alignSelf: 'flex-end',
        },
        botMessage: {
            textAlign: 'left',
            backgroundColor: '#d0e7ff',
            alignSelf: 'flex-start',
        },
        inputContainer: {
            display: 'flex',
            padding: '10px',
            borderTop: '1px solid #ccc',
            backgroundColor: '#fff',
        },
        input: {
            flex: 1,
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginRight: '10px',
        },
        button: {
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#28a745',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        stopButton: {
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: '#dc3545',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '10px auto', // căn giữa nút
        },
        error: {
            color: 'red',
            textAlign: 'center',
            padding: '10px',
        }
    };

    return (
        <div style={styles.chatbotBubble}>
            <div style={styles.chatbotContent}>
                {isOpen && (
                    <>
                        <div style={styles.messagesContainer}>
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    style={{
                                        ...styles.message,
                                        ...(message.sender === 'user'
                                            ? styles.userMessage
                                            : styles.botMessage),
                                    }}
                                >
                                    <strong>{message.sender === 'user' ? 'You' : 'Bot'}: </strong>
                                    {message.text}
                                </div>
                            ))}
                            {isTyping && (
                                <div style={{ ...styles.message, ...styles.botMessage }}>
                                    <em>Bot đang phản hồi...</em>
                                </div>
                            )}
                            {error && <div style={styles.error}>{error}</div>}
                            <div ref={messagesEndRef} />
                        </div>
                        <form onSubmit={handleSubmit} style={styles.inputContainer}>
                            <input
                                type="text"
                                value={input}
                                onChange={handleChange}
                                style={styles.input}
                                placeholder="Type a message..."
                                aria-label="Type your message here"
                            />
                            <button
                                type="submit"
                                style={{ ...styles.button, backgroundColor: isTyping ? '#dc3545' : '#28a745' }}
                                onClick={isTyping ? handleStop : handleSubmit}
                            >
                                {isTyping ? <FontAwesomeIcon icon={faSquare} /> : 'Send'}
                            </button>
                        </form>
                    </>
                )}
            </div>
            <button style={styles.chatbotToggle} onClick={toggleChatbot} aria-label="Toggle Chatbot">
                <FontAwesomeIcon icon={faRobot} />
            </button>
        </div>
    );
};

export default ChatbotBubble;
