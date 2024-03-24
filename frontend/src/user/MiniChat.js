import '../css/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const  mini = () => {
    return (
        <div className="mini-chat">
            <div className="chat-img"><FontAwesomeIcon icon={faComment} /><h4>Chat</h4></div>
        </div>
    )
}
export default  mini;