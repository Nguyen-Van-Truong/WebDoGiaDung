import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef, useCallback } from "react";
import { setGetMessenger, resetMessages } from "../../redux/MessageActions";

const ChatBody1 = () => {

    const messages = useSelector(state => state.message.messages);






    useEffect(() => {

    }, []);

    return (
        <ul className="chat-history list-unstyled mb-0 py-lg-5 py-md-4 py-3 flex-grow-1">

                <div >
                    <li className={`mb-3 d-flex align-items-end  "flex-row" }`}>
                        <div className={`max-width-70 w-100 d-flex`}>
                            <div className={`card border-0 p-3  ml-auto`}
                                 style={{ width: '30%', wordWrap: 'break-word', marginRight:'auto'  }}>

                                <div className="message">
                                    <br />
                                  hello <br />
                                    <span className="text-muted small">  10h30 phut
                                    </span>
                                </div>
                            </div>
                        </div>
                    </li>
                </div>

        </ul>
    );
};

export default ChatBody1;
