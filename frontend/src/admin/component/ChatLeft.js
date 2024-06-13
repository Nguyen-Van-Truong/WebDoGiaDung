import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getUserNameMess } from "../Api/MessengeApi";

const ChatLeft = ({ onSelectTab }) => {
    const dispatch = useDispatch();
    const userList = useSelector(state => state.messageAdmin.userList) || [];

    useEffect(() => {
        dispatch(getUserNameMess());
    }, [dispatch]);

    const handleUserName = (username) => {
        dispatch(getUser(username));
    };

    return (
        <div className="card card-chat border-right border-top-0 border-bottom-0 w380">
            <div className="px-4 py-3 py-md-4">
                <div className="input-group mb-3">
                    <input type="text" className="form-control mb-1" placeholder="Search..." />
                </div>
                <div className="nav nav-pills justify-content-between text-center" role="tablist">
                    <a className="flex-fill rounded border-0 nav-link active" data-bs-toggle="tab" href="#chat-recent" role="tab" aria-selected="true" onClick={() => onSelectTab('chat')}>Chat</a>
                    <a className="flex-fill rounded border-0 nav-link" data-bs-toggle="tab" href="#chatbot" role="tab" aria-selected="false" onClick={() => onSelectTab('chatbot')}>Chatbot</a>
                </div>
            </div>
            <div className="tab-content2 border-top">
                <div className="tab-pane fade show active" id="chat-recent" role="tabpanel">
                    <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                        {userList.length === 0 ? (
                            <li className="list-group-item px-md-4 py-3 py-md-4">No users found</li>
                        ) : (
                            userList.map((msg, index) => (
                                msg.user_send !== "admin" && (
                                    <li key={index} className="list-group-item px-md-4 py-3 py-md-4">
                                        <a href="javascript:void(0);" className="d-flex" onClick={() => handleUserName(msg.user_send)}>
                                            <div className="flex-fill ms-3 text-truncate">
                                                <h6 className="d-flex justify-content-between mb-0">
                                                    <span>{msg.user_send}</span>
                                                </h6>
                                            </div>
                                        </a>
                                    </li>
                                )
                            ))
                        )}
                    </ul>
                </div>
                <div className="tab-pane fade" id="chatbot" role="tabpanel">
                    <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                        {/*<li className="list-group-item px-md-4 py-3 py-md-4">Chatbot 1</li>*/}
                        {/*<li className="list-group-item px-md-4 py-3 py-md-4">Chatbot 2</li>*/}
                        {/*<li className="list-group-item px-md-4 py-3 py-md-4">Chatbot 3</li>*/}
                        {/*<li className="list-group-item px-md-4 py-3 py-md-4">Chatbot 4</li>*/}
                        {/*<li className="list-group-item px-md-4 py-3 py-md-4">Chatbot 5</li>*/}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ChatLeft;
