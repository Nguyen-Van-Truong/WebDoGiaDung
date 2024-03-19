import React from 'react';
import Sidebar from "./component/Sidebar";
import './assets/plugin/datatables/responsive.dataTables.min.css';
import './assets/plugin/datatables/dataTables.bootstrap5.min.css';
import productImage from './assets/images/product/product-1.jpg';
import './assets/css/ebazar.style.min.css'

const Chat = () => {

    return (
        <div id="ebazar-layout" className="theme-blue">
            {/* sidebar */}
            <Sidebar/>
            {/* main body area */}
            <div className="main">
                {/* Body: Body */}
                <div className="body d-flex">
                    <div className="container-xxl p-0">
                        <div className="row g-0">
                            <div className="col-12 d-flex">
                                {/* Card: */}

                                <ChatLeft/>

                                {/* Card: */}
                                <div className="card card-chat-body border-0  w-100 px-4 px-md-5 py-3 py-md-4">
                                    {/* Chat: Header */}
                                    <ChatHeader/>
                                    {/* Chat: body */}
                                    <ChatBody/>
                                    {/* Chat: Footer */}
                                    <div className="chat-message">
                                        <textarea className="form-control" placeholder="Enter text here..."
                                                  defaultValue={""}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* row end */}
                    </div>
                </div>
                {/* Modal Custom Settings*/}
                <div className="modal fade right" id="Settingmodal" tabIndex={-1} aria-hidden="true">
                    <div className="modal-dialog  modal-sm">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Custom Settings</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                            </div>
                            <div className="modal-body custom_setting">
                                {/* Settings: Color */}
                                <div className="setting-theme pb-3">
                                    <h6 className="card-title mb-2 fs-6 d-flex align-items-center"><i
                                        className="icofont-color-bucket fs-4 me-2 text-primary"/>Template Color Settings
                                    </h6>
                                    <ul className="list-unstyled row row-cols-3 g-2 choose-skin mb-2 mt-2">
                                        <li data-theme="indigo">
                                            <div className="indigo"/>
                                        </li>
                                        <li data-theme="tradewind">
                                            <div className="tradewind"/>
                                        </li>
                                        <li data-theme="monalisa">
                                            <div className="monalisa"/>
                                        </li>
                                        <li data-theme="blue" className="active">
                                            <div className="blue"/>
                                        </li>
                                        <li data-theme="cyan">
                                            <div className="cyan"/>
                                        </li>
                                        <li data-theme="green">
                                            <div className="green"/>
                                        </li>
                                        <li data-theme="orange">
                                            <div className="orange"/>
                                        </li>
                                        <li data-theme="blush">
                                            <div className="blush"/>
                                        </li>
                                        <li data-theme="red">
                                            <div className="red"/>
                                        </li>
                                    </ul>
                                </div>
                                <div className="sidebar-gradient py-3">
                                    <h6 className="card-title mb-2 fs-6 d-flex align-items-center"><i
                                        className="icofont-paint fs-4 me-2 text-primary"/>Sidebar Gradient</h6>
                                    <div className="form-check form-switch gradient-switch pt-2 mb-2">
                                        <input className="form-check-input" type="checkbox" id="CheckGradient"/>
                                        <label className="form-check-label" htmlFor="CheckGradient">Enable Gradient! (
                                            Sidebar )</label>
                                    </div>
                                </div>
                                {/* Settings: Template dynamics */}
                                <div className="dynamic-block py-3">
                                    <ul className="list-unstyled choose-skin mb-2 mt-1">
                                        <li data-theme="dynamic">
                                            <div className="dynamic"><i className="icofont-paint me-2"/> Click to
                                                Dyanmic Setting
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="dt-setting">
                                        <ul className="list-group list-unstyled mt-1">
                                            <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                                <label>Primary Color</label>
                                                <button id="primaryColorPicker"
                                                        className="btn bg-primary avatar xs border-0 rounded-0"/>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                                <label>Secondary Color</label>
                                                <button id="secondaryColorPicker"
                                                        className="btn bg-secondary avatar xs border-0 rounded-0"/>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                                <label className="text-muted">Chart Color 1</label>
                                                <button id="chartColorPicker1"
                                                        className="btn chart-color1 avatar xs border-0 rounded-0"/>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                                <label className="text-muted">Chart Color 2</label>
                                                <button id="chartColorPicker2"
                                                        className="btn chart-color2 avatar xs border-0 rounded-0"/>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                                <label className="text-muted">Chart Color 3</label>
                                                <button id="chartColorPicker3"
                                                        className="btn chart-color3 avatar xs border-0 rounded-0"/>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                                <label className="text-muted">Chart Color 4</label>
                                                <button id="chartColorPicker4"
                                                        className="btn chart-color4 avatar xs border-0 rounded-0"/>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center py-1 px-2">
                                                <label className="text-muted">Chart Color 5</label>
                                                <button id="chartColorPicker5"
                                                        className="btn chart-color5 avatar xs border-0 rounded-0"/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Settings: Font */}
                                <div className="setting-font py-3">
                                    <h6 className="card-title mb-2 fs-6 d-flex align-items-center"><i
                                        className="icofont-font fs-4 me-2 text-primary"/> Font Settings</h6>
                                    <ul className="list-group font_setting mt-1">
                                        <li className="list-group-item py-1 px-2">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" type="radio" name="font"
                                                       id="font-poppins" defaultValue="font-poppins"/>
                                                <label className="form-check-label" htmlFor="font-poppins">
                                                    Poppins Google Font
                                                </label>
                                            </div>
                                        </li>
                                        <li className="list-group-item py-1 px-2">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" type="radio" name="font"
                                                       id="font-opensans" defaultValue="font-opensans" defaultChecked/>
                                                <label className="form-check-label" htmlFor="font-opensans">
                                                    Open Sans Google Font
                                                </label>
                                            </div>
                                        </li>
                                        <li className="list-group-item py-1 px-2">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" type="radio" name="font"
                                                       id="font-montserrat" defaultValue="font-montserrat"/>
                                                <label className="form-check-label" htmlFor="font-montserrat">
                                                    Montserrat Google Font
                                                </label>
                                            </div>
                                        </li>
                                        <li className="list-group-item py-1 px-2">
                                            <div className="form-check mb-0">
                                                <input className="form-check-input" type="radio" name="font"
                                                       id="font-mukta" defaultValue="font-mukta"/>
                                                <label className="form-check-label" htmlFor="font-mukta">
                                                    Mukta Google Font
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {/* Settings: Light/dark */}
                                <div className="setting-mode py-3">
                                    <h6 className="card-title mb-2 fs-6 d-flex align-items-center"><i
                                        className="icofont-layout fs-4 me-2 text-primary"/>Contrast Layout</h6>
                                    <ul className="list-group list-unstyled mb-0 mt-1">
                                        <li className="list-group-item d-flex align-items-center py-1 px-2">
                                            <div className="form-check form-switch theme-switch mb-0">
                                                <input className="form-check-input" type="checkbox" id="theme-switch"/>
                                                <label className="form-check-label" htmlFor="theme-switch">Enable Dark
                                                    Mode!</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item d-flex align-items-center py-1 px-2">
                                            <div className="form-check form-switch theme-high-contrast mb-0">
                                                <input className="form-check-input" type="checkbox"
                                                       id="theme-high-contrast"/>
                                                <label className="form-check-label" htmlFor="theme-high-contrast">Enable
                                                    High Contrast</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item d-flex align-items-center py-1 px-2">
                                            <div className="form-check form-switch theme-rtl mb-0">
                                                <input className="form-check-input" type="checkbox" id="theme-rtl"/>
                                                <label className="form-check-label" htmlFor="theme-rtl">Enable RTL
                                                    Mode!</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="modal-footer justify-content-start">
                                <button type="button" className="btn btn-white border lift" data-dismiss="modal">Close
                                </button>
                                <button type="button" className="btn btn-primary lift">Save Changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
const ChatLeft = () => (
    <div className="card card-chat border-right border-top-0 border-bottom-0  w380">
        <div className="px-4 py-3 py-md-4">
            <div className="input-group mb-3">
                <input type="text" className="form-control mb-1" placeholder="Search..." />
            </div>
            <div className="nav nav-pills justify-content-between text-center" role="tablist">
                <a className="flex-fill rounded border-0 nav-link active" data-bs-toggle="tab" href="#chat-recent" role="tab" aria-selected="true">Chat</a>
                <a className="flex-fill rounded border-0 nav-link" data-bs-toggle="tab" href="#chat-groups" role="tab" aria-selected="false">Ecommerce Groups</a>
                <a className="flex-fill rounded border-0 nav-link" data-bs-toggle="tab" href="#chat-contact" role="tab" aria-selected="false">Contact</a>
            </div>
        </div>
        <div className="tab-content2 border-top">
            <div className="tab-pane fade show active" id="chat-recent" role="tabpanel">

                <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                    <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                            <img className="avatar rounded" src={productImage} alt=""/>
                            <div className="flex-fill ms-3 text-truncate">
                                <h6 className="d-flex justify-content-between mb-0"><span>Vanessa Knox</span> <small
                                    className="msg-time">10:45 AM</small></h6>
                                <span className="text-muted">There are many variations of passages</span>
                            </div>
                        </a>
                    </li>
                    <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                            <img className="avatar rounded" src={productImage} alt=""/>
                            <div className="flex-fill ms-3 text-truncate">
                                <h6 className="d-flex justify-content-between mb-0"><span>Abigail Bell</span> <small
                                    className="msg-time">11:45 AM</small></h6>
                                <span className="text-muted">changed an issue from "In Progress" to</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="tab-pane fade" id="chat-groups" role="tabpanel">
                <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                    <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                            <div className="avatar rounded no-thumbnail">IN</div>
                            <div className="flex-fill ms-3 text-truncate">
                                <h6 className="d-flex justify-content-between mb-0"><span>Inventory
                      </span> <small className="msg-time">15/06/2021</small></h6>
                                <span className="text-muted">The point of using Lorem Ipsum</span>
                            </div>
                        </a>
                    </li>
                    <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                            <div className="avatar rounded no-thumbnail">OD</div>
                            <div className="flex-fill ms-3 text-truncate">
                                <h6 className="d-flex justify-content-between mb-0"><span>Order
                      </span> <small className="msg-time">13/06/2021</small></h6>
                                <span className="text-muted">If you are going to use a passage</span>
                            </div>
                        </a>
                    </li>
                    <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                            <div className="avatar rounded no-thumbnail">PD</div>
                            <div className="flex-fill ms-3 text-truncate">
                                <h6 className="d-flex justify-content-between mb-0"><span>Product
                      </span> <small className="msg-time">12/06/2021</small></h6>
                                <span className="text-muted">The point of using Lorem Ipsum</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="tab-pane fade" id="chat-contact" role="tabpanel">
                <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                    <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                            <img className="avatar rounded" src="assets/images//xs/avatar10.svg" alt="" />
                            <div className="flex-fill ms-3 text-truncate">
                                <div className="d-flex justify-content-between mb-0">
                                    <h6 className="mb-0">Hannah Gill</h6>
                                    <div className="text-muted">
                                        <i className="fa fa-heart-o pl-2 text-danger" />
                                        <i className="fa fa-trash pl-2 text-danger" />
                                    </div>
                                </div>
                                <span className="text-muted">hannahgill@eBazar.com</span>
                            </div>
                        </a>
                    </li>
                    <li className="list-group-item px-md-4 py-3 py-md-4">
                        <a href="javascript:void(0);" className="d-flex">
                            <img className="avatar rounded" src="assets/images//xs/avatar2.svg" alt="" />
                            <div className="flex-fill ms-3 text-truncate">
                                <div className="d-flex justify-content-between mb-0">
                                    <h6 className="mb-0">Abigail Bell</h6>
                                    <div className="text-muted">
                                        <i className="fa fa-heart pl-2 text-danger" />
                                        <i className="fa fa-trash pl-2 text-danger" />
                                    </div>
                                </div>
                                <span className="text-muted">abigailbell@eBazar.com</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);

const ChatHeader = () => (
    <div
        className="chat-header d-flex justify-content-between align-items-center border-bottom pb-3">
        <div className="d-flex align-items-center">
            <a href="index.html" title="Home" className="d-block d-xxl-none"><i
                className="icofont-arrow-left fs-4"/></a>
            <a href="javascript:void(0);" title>
                <img className="avatar rounded" src="assets/images//xs/avatar2.svg"
                     alt="avatar"/>
            </a>
            <div className="ms-3">
                <h6 className="mb-0">Grace Smith</h6>
                <small className="text-muted">Last seen: 3 hours ago</small>
            </div>
        </div>
        <div className="d-flex">
            <a className="nav-link py-2 px-3 text-muted d-none d-lg-block"
               href="javascript:void(0);"><i className="fa fa-camera"/></a>
            <a className="nav-link py-2 px-3 text-muted d-none d-lg-block"
               href="javascript:void(0);"><i className="fa fa-video-camera"/></a>
            <a className="nav-link py-2 px-3 text-muted d-none d-lg-block"
               href="javascript:void(0);"><i className="fa fa-gear"/></a>
            <a className="nav-link py-2 px-3 text-muted d-none d-lg-block"
               href="javascript:void(0);"><i className="fa fa-info-circle"/></a>
            <a className="nav-link py-2 px-3 d-block d-lg-none chatlist-toggle"
               href="#"><i className="fa fa-bars"/></a>
            {/* Mobile menu */}
            <div className="nav-item list-inline-item d-block d-xl-none">
                <div className="dropdown">
                    <a className="nav-link text-muted px-0" href="#"
                       data-bs-toggle="dropdown" aria-haspopup="true"
                       aria-expanded="false">
                        <i className="fa fa-ellipsis-v"/>
                    </a>
                    <ul className="dropdown-menu shadow border-0">
                        <li><a className="dropdown-item" href="index.html"><i
                            className="fa fa-camera"/> Share Images</a></li>
                        <li><a className="dropdown-item" href="index.html"><i
                            className="fa fa-video-camera"/> Video Call</a></li>
                        <li><a className="dropdown-item" href="index.html"><i
                            className="fa fa-gear"/> Settings</a></li>
                        <li><a className="dropdown-item" href="index.html"><i
                            className="fa fa-info-circle"/> Info</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

);


const ChatBody = () => (
    <ul className="chat-history list-unstyled mb-0 py-lg-5 py-md-4 py-3 flex-grow-1">
        {/* Chat: left */}
        <li className="mb-3 d-flex flex-row align-items-end">
            <div className="max-width-70">
                <div className="user-info mb-1">
                    <img className="avatar sm rounded-circle me-1"
                         src="assets/images//xs/avatar2.svg" alt="avatar"/>
                    <span className="text-muted small">10:10 AM, Today</span>
                </div>
                <div className="card border-0 p-3">
                    <div className="message"> Hi Aiden, how are you?</div>
                </div>
            </div>
            {/* More option */}
            <div className="btn-group">
                <a href="#" className="nav-link py-2 px-3 text-muted"
                   data-bs-toggle="dropdown" aria-expanded="false"><i
                    className="fa fa-ellipsis-v"/></a>
                <ul className="dropdown-menu border-0 shadow">
                    <li><a className="dropdown-item" href="#">Edit</a></li>
                    <li><a className="dropdown-item" href="#">Share</a></li>
                    <li><a className="dropdown-item" href="#">Delete</a></li>
                </ul>
            </div>
        </li>
        {/* Chat: right */}
        <li className="mb-3 d-flex flex-row-reverse align-items-end">
            <div className="max-width-70 text-right">
                <div className="user-info mb-1">
                    <span className="text-muted small">10:12 AM, Today</span>
                </div>
                <div className="card border-0 p-3 bg-primary text-light">
                    <div className="message">Fine</div>
                </div>
            </div>
            {/* More option */}
            <div className="btn-group">
                <a href="#" className="nav-link py-2 px-3 text-muted"
                   data-bs-toggle="dropdown" aria-expanded="false"><i
                    className="fa fa-ellipsis-v"/></a>
                <ul className="dropdown-menu border-0 shadow">
                    <li><a className="dropdown-item" href="#">Edit</a></li>
                    <li><a className="dropdown-item" href="#">Share</a></li>
                    <li><a className="dropdown-item" href="#">Delete</a></li>
                </ul>
            </div>
        </li>
        {/* Chat: left */}
        <li className="mb-3 d-flex flex-row align-items-end">
            <div className="max-width-70">
                <div className="user-info mb-1">
                    <img className="avatar sm rounded-circle me-1"
                         src="assets/images//xs/avatar2.svg" alt="avatar"/>
                    <span className="text-muted small">10:10 AM, Today</span>
                </div>
                <div className="card border-0 p-3">
                    <div className="message">Product Stoke available</div>
                </div>
            </div>
            {/* More option */}
            <div className="btn-group">
                <a href="#" className="nav-link py-2 px-3 text-muted"
                   data-bs-toggle="dropdown" aria-expanded="false"><i
                    className="fa fa-ellipsis-v"/></a>
                <ul className="dropdown-menu border-0 shadow">
                    <li><a className="dropdown-item" href="#">Edit</a></li>
                    <li><a className="dropdown-item" href="#">Share</a></li>
                    <li><a className="dropdown-item" href="#">Delete</a></li>
                </ul>
            </div>
        </li>
        {/* Chat: left */}
        <li className="mb-3 d-flex flex-row align-items-end">
            <div className="max-width-70">
                <div className="user-info mb-1">
                    <img className="avatar sm rounded-circle me-1"
                         src="assets/images//xs/avatar2.svg" alt="avatar"/>
                    <span className="text-muted small">10:10 AM, Today</span>
                </div>
                <div className="card border-0 p-3">
                    <div className="message"> Yes, and also new stoke On Way</div>
                </div>
            </div>
            {/* More option */}
            <div className="btn-group">
                <a href="#" className="nav-link py-2 px-3 text-muted"
                   data-bs-toggle="dropdown" aria-expanded="false"><i
                    className="fa fa-ellipsis-v"/></a>
                <ul className="dropdown-menu border-0 shadow">
                    <li><a className="dropdown-item" href="#">Edit</a></li>
                    <li><a className="dropdown-item" href="#">Share</a></li>
                    <li><a className="dropdown-item" href="#">Delete</a></li>
                </ul>
            </div>
        </li>
        {/* Chat: right */}
        <li className="mb-3 d-flex flex-row-reverse align-items-end">
            <div className="max-width-70 text-right">
                <div className="user-info mb-1">
                    <span className="text-muted small">10:12 AM, Today</span>
                </div>
                <div className="card border-0 p-3 bg-primary text-light">
                    <div className="message">ok,Lets check stoke and sent me product
                        pic
                    </div>
                </div>
            </div>
            {/* More option */}
            <div className="btn-group">
                <a href="#" className="nav-link py-2 px-3 text-muted"
                   data-bs-toggle="dropdown" aria-expanded="false"><i
                    className="fa fa-ellipsis-v"/></a>
                <ul className="dropdown-menu border-0 shadow">
                    <li><a className="dropdown-item" href="#">Edit</a></li>
                    <li><a className="dropdown-item" href="#">Share</a></li>
                    <li><a className="dropdown-item" href="#">Delete</a></li>
                </ul>
            </div>
        </li>
        {/* Chat: left */}
        <li className="mb-3 d-flex flex-row align-items-end">
            <div className="max-width-70">
                <div className="user-info mb-1">
                    <img className="avatar sm rounded-circle me-1"
                         src="assets/images//xs/avatar2.svg" alt="avatar"/>
                    <span className="text-muted small">10:10 AM, Today</span>
                </div>
                <div className="card border-0 p-3">
                    <div className="message">
                        <p>Please find attached images</p>
                        <img className="w120 img-thumbnail"
                             src="assets/images//gallery/1.jpg" alt=""/>
                        <img className="w120 img-thumbnail"
                             src="assets/images//gallery/2.jpg" alt=""/>
                    </div>
                </div>
            </div>
            {/* More option */}
            <div className="btn-group">
                <a href="#" className="nav-link py-2 px-3 text-muted"
                   data-bs-toggle="dropdown" aria-expanded="false"><i
                    className="fa fa-ellipsis-v"/></a>
                <ul className="dropdown-menu border-0 shadow">
                    <li><a className="dropdown-item" href="#">Edit</a></li>
                    <li><a className="dropdown-item" href="#">Share</a></li>
                    <li><a className="dropdown-item" href="#">Delete</a></li>
                </ul>
            </div>
        </li>
        {/* Chat: right */}
        <li className="mb-3 d-flex flex-row-reverse align-items-end">
            <div className="max-width-70 text-right">
                <div className="user-info mb-1">
                    <span className="text-muted small">10:12 AM, Today</span>
                </div>
                <div className="card border-0 p-3 bg-primary text-light">
                    <div className="message">Okay, will check and let you know.</div>
                </div>
            </div>
            {/* More option */}
            <div className="btn-group">
                <a href="#" className="nav-link py-2 px-3 text-muted"
                   data-bs-toggle="dropdown" aria-expanded="false"><i
                    className="fa fa-ellipsis-v"/></a>
                <ul className="dropdown-menu border-0 shadow">
                    <li><a className="dropdown-item" href="#">Edit</a></li>
                    <li><a className="dropdown-item" href="#">Share</a></li>
                    <li><a className="dropdown-item" href="#">Delete</a></li>
                </ul>
            </div>
        </li>
    </ul>

);
export default Chat;