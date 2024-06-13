import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef, useCallback } from "react";
import { setGetMessenger, resetMessages } from "../../redux/MessageActions";

const ChatBody1 = () => {
    const messages = useSelector(state => state.message.messages);

    useEffect(() => {
        // Add any necessary effect
    }, []);

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
            flexDirection: 'row',
        },
        chatCard: {
            maxWidth: '50%', // Tăng kích thước lên 50%
            width: '50%', // Đảm bảo chiếm ít nhất 50% chiều ngang
            backgroundColor: '#fff',
            padding: '1rem',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            wordWrap: 'break-word',
        },
        chatMessage: {
            marginBottom: '0.5rem',
        },
        chatTimestamp: {
            fontSize: '0.75rem',
            color: '#888',
            textAlign: 'right',
        }
    };

    return (
        <ul className="chat-history" style={styles.chatHistory}>
            <div>
                <li style={styles.chatItem}>
                    <div style={styles.chatCard}>
                        <div className="message" style={styles.chatMessage}>
                            hello
                        </div>
                        <div className="text-muted small" style={styles.chatTimestamp}>
                            10h30 phút
                        </div>
                    </div>
                </li>
            </div>
        </ul>
    );
};

export default ChatBody1;
