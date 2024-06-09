import React, { useEffect, useState, useRef } from 'react';
import Sidebar from "./component/Sidebar";
import './assets/plugin/datatables/responsive.dataTables.min.css';
import './assets/plugin/datatables/dataTables.bootstrap5.min.css';
import './assets/css/ebazar.style.min.css';
import { useDispatch, useSelector } from "react-redux";
import ChatLeft from "./component/ChatLeft";
import ChatBody from "./component/ChatBody";
import { addMessage, setMessages } from "./redux/actions/MessageActions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";

const Chat = () => {
    const userId = useSelector(state => state.messageAdmin.user_id);
    const dispatch = useDispatch();
    const [message, setMessage] = useState("");
    const socketRef = useRef(null);

    useEffect(() => {
        if (!userId) {
            console.error('Invalid userId:', userId);
            return;
        }

        const newSocket = new WebSocket(`ws://localhost:8080/ws/messenger/admin?userId=${userId}`);

        newSocket.onopen = () => {
            console.log('WebSocket connection established');
        };

        newSocket.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                if (Array.isArray(data)) {
                    dispatch(setMessages(data));
                } else {
                    dispatch(addMessage(data));
                }
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        };

        newSocket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        newSocket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        socketRef.current = newSocket;


    }, [dispatch, userId]);

    const sendMessage = () => {
        if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
            const messageText = message;
            socketRef.current.send(`${userId}:${messageText}`);
            dispatch(addMessage({ user_send: userId, message, user_rec: "receiver", create: new Date().toISOString() }));
            setMessage("");
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <div id="ebazar-layout" className="theme-blue">
            <Sidebar />
            <div className="main">
                <div className="body d-flex">
                    <div className="container-xxl p-0">
                        <div className="row g-0">
                            <div className="col-12 d-flex">
                                <ChatLeft />
                                <div className="card card-chat-body border-0 w-100 px-4 px-md-5 py-3 py-md-4">
                                    <ChatHeader />
                                    <ChatBody />
                                    <div className="chat-message">
                                        <textarea
                                            className="form-control"
                                            placeholder="Enter text here..."
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            onKeyPress={handleKeyPress}
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade right" id="Settingmodal" tabIndex={-1} aria-hidden="true">
                    <div className="modal-dialog modal-sm">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Custom Settings</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body custom_setting">
                                {/* Settings content here */}
                            </div>
                            <div className="modal-footer justify-content-start">
                                <button type="button" className="btn btn-white border lift" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary lift">Save Changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ChatHeader = () => {
    const usernameMess = useSelector(state => state.messageAdmin.usernameMess);

    return (
        <div className="chat-header d-flex justify-content-between align-items-center border-bottom pb-3">
            <div className="d-flex align-items-center">
                <a href="" title="Home" className="d-block d-xxl-none"><i className="icofont-arrow-left fs-4" /></a>
                <a href="javascript:void(0);" title></a>
                <div className="ms-3">
                    <h6 className="mb-0">{usernameMess}</h6>
                </div>
            </div>
            <div className="d-flex">
                <a className="nav-link py-2 px-3 text-muted d-none d-lg-block" href="javascript:void(0);"><i className="fa fa-camera" /></a>
                <a className="nav-link py-2 px-3 text-muted d-none d-lg-block" href="javascript:void(0);"><i className="fa fa-video-camera" /></a>
                <a className="nav-link py-2 px-3 text-muted d-none d-lg-block" href="javascript:void(0);"><i className="fa fa-gear" /></a>
                <a className="nav-link py-2 px-3 text-muted d-none d-lg-block" href="javascript:void(0);"><i className="fa fa-info-circle" /></a>
                <a className="nav-link py-2 px-3 d-block d-lg-none chatlist-toggle" href="#"><i className="fa fa-bars" /></a>
                <div className="nav-item list-inline-item d-block d-xl-none">
                    <div className="dropdown">
                        <a className="nav-link text-muted px-0" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-ellipsis-v" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat;
