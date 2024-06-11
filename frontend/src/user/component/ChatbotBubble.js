import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

const ChatbotBubble = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [error, setError] = useState(null);
    const messagesEndRef = useRef(null);

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (input.trim() === '') return;
        setMessages([...messages, { sender: 'user', text: input }]);
        fetchGeneratedResponse(input);
        setInput('');
    };

    const fetchGeneratedResponse = async (message) => {
        setIsTyping(true);
        setError(null);
        try {
            const response = await fetch(`http://localhost:3000/ai/generate?message=${encodeURIComponent(message)}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: 'bot', text: data.generation }
            ]);
        } catch (error) {
            console.error('Error occurred:', error);
            setError('Failed to fetch response. Please try again.');
        } finally {
            setIsTyping(false);
        }
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
                                    <em>Bot is typing...</em>
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
                            <button type="submit" style={styles.button} disabled={isTyping}>
                                {isTyping ? 'Sending...' : 'Send'}
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
