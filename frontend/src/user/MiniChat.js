import '../css/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import ChatUser from "./ChatUser";
import '../App.css';
import { useDispatch, useSelector } from "react-redux";
import { setStatus } from "../redux/MessageActions";

const Mini = () => {
    const dispatch = useDispatch();
    const status = useSelector(state => state.message.status); // Lấy danh sách tin nhắn từ Redux store

    const handleClick = () => {
        dispatch(setStatus(!status));
    };

    return (
        <div className="mini-chat" >
            <div className="chat-img"  onClick={handleClick}>
                <FontAwesomeIcon icon={faComment} /><h4>Chat</h4>
            </div>

                <div style={{display: status === true ? 'block' : 'none'}}>
                    <ChatUser />
                </div>

        </div>
    );
};

export default Mini;
