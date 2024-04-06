 import  '../css/chat.css'
 import  '../App.css'
 import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
 import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
 const ChatUser = () => {
   return (
    <div className="mini-chat">
        <div className="chat-container">
            <div className="chat-header">
                <img  alt="User Avatar"/>
                    Huỳnh Các Duy Thuần
            </div>
            <div className="message-container">
                <div className="message sender">Hello</div>
                <div className="message receiver">Chào cậu</div>
            </div>
            <div className="chat-footer">
                <input type="text" placeholder="Aa"/>
                    <button>
                        <FontAwesomeIcon icon={faThumbsUp} style={{fontSize :'20px'}} />
                    </button>
            </div>
        </div>
    </div>

   )
 }
 export  default ChatUser;