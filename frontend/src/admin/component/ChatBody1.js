import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faSquare } from '@fortawesome/free-solid-svg-icons';

const ChatBody1 = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [error, setError] = useState(null);
    const [sessionId, setSessionId] = useState(null);
    const messagesEndRef = useRef(null);
    const socketRef = useRef(null);

    useEffect(() => {
        connectWebSocket();
        return () => disconnectWebSocket();
    }, []);

    const connectWebSocket = () => {
        socketRef.current = new WebSocket('ws://localhost:8080/ws/ai');

        socketRef.current.onopen = () => {
            console.log('WebSocket connection established');
        };

        socketRef.current.onmessage = (event) => {
            const data = event.data;
            console.log('Received message:', data);
            try {
                const message = JSON.parse(data);
                if (message.sessionId) {
                    setSessionId(message.sessionId);
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

        socketRef.current.onerror = (error) => {
            console.error('WebSocket error:', error);
            setError('WebSocket error. Please try again.');
            setIsTyping(false);
        };

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
        chatHistory: {
            listStyleType: 'none',
            margin: 0,
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            backgroundColor: '#f0f0f0',
            borderRadius: '10px',
            overflowY: 'auto',
        },
        chatItem: {
            marginBottom: '1rem',
            display: 'flex',
            alignItems: 'flex-end',
        },
        userChatItem: {
            justifyContent: 'flex-end',
        },
        chatCard: {
            maxWidth: '70%',
            minWidth: '70%',
            padding: '1rem',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            wordWrap: 'break-word',
        },
        userChatCard: {
            backgroundColor: '#e1ffc7',
            textAlign: 'right',
        },
        botChatCard: {
            backgroundColor: '#d0e7ff',
            textAlign: 'left',
        },
        chatMessage: {
            marginBottom: '0.5rem',
            width: '100%',
        },
        chatTimestamp: {
            fontSize: '0.75rem',
            color: '#888',
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
            margin: '10px auto',
        },
        error: {
            color: 'red',
            textAlign: 'center',
            padding: '10px',
        }
    };

    return (
        <>
            <ul className="chat-history" style={styles.chatHistory}>
                {messages.map((message, index) => (
                    <li key={index} style={{ ...styles.chatItem, ...(message.sender === 'user' ? styles.userChatItem : {}) }}>
                        <div style={{ ...styles.chatCard, ...(message.sender === 'user' ? styles.userChatCard : styles.botChatCard) }}>
                            <div className="message" style={styles.chatMessage}>
                                {message.text}
                            </div>
                            <div className="text-muted small" style={styles.chatTimestamp}>
                                {message.timestamp || ''}
                            </div>
                        </div>
                    </li>
                ))}
                {isTyping && (
                    <div style={{ ...styles.chatItem, ...styles.botChatCard }}>
                        <em>Bot đang phản hồi...</em>
                    </div>
                )}
                {error && <div style={styles.error}>{error}</div>}
                <div ref={messagesEndRef} />
            </ul>
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
    );
};

export default ChatBody1;
