import React, {useEffect} from 'react';
import profile from "../assets/images/profile_av.jpg";
import $ from 'jquery';
import {logout, setEmail, setPassword} from "../../redux/Action";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const username = sessionStorage.getItem('username');
    const email = sessionStorage.getItem('email');
    const dispatch = useDispatch();
    const   navigate = useNavigate();
    const  log_out =()=>{
        dispatch(logout());
        sessionStorage.removeItem("isStatus");
        navigate('/login')
        dispatch(setPassword(''));
        dispatch(setEmail(''));
    }
    useEffect(() => {
        // Example of safely using jQuery inside a React component
        // Always ensure any direct DOM manipulation does not conflict with React
        $(document).ready(function() {
            console.log("jQuery is ready!");
            // More jQuery code can go here
        });
    }, []);

    return (
        <div className="header">
            <nav className="navbar py-4">
                <div className="container-xxl">
                    {/* header rightbar icon */}
                    <div className="h-right d-flex align-items-center mr-5 mr-lg-0 order-1">
                        <div className="d-flex">
                            <a className="nav-link text-primary collapsed" href="help"
                               title="Get Help">
                                <i className="icofont-info-square fs-5"/>
                            </a>
                        </div>
                        <div className="dropdown zindex-popover">
                            <a className="nav-link dropdown-toggle pulse" href="#" role="button"
                               data-bs-toggle="dropdown">
                                <img src="../dist/assets/images/flag/GB.png" alt=""/>
                            </a>
                            <div
                                className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-md-end p-0 m-0 mt-3">
                                <div className="card border-0">
                                    <ul className="list-unstyled py-2 px-3">
                                        <li>
                                            <a href="#" className><img
                                                src="../dist/assets/images/flag/GB.png" alt=""/> English</a>
                                        </li>
                                        <li>
                                            <a href="#" className><img
                                                src="../dist/assets/images/flag/DE.png" alt=""/> German</a>
                                        </li>
                                        <li>
                                            <a href="#" className><img
                                                src="../dist/assets/images/flag/FR.png" alt=""/> French</a>
                                        </li>
                                        <li>
                                            <a href="#" className><img
                                                src="../dist/assets/images/flag/IT.png" alt=""/> Italian</a>
                                        </li>
                                        <li>
                                            <a href="#" className><img
                                                src="../dist/assets/images/flag/RU.png" alt=""/> Russian</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown notifications">
                            <a className="nav-link dropdown-toggle pulse" href="#" role="button"
                               data-bs-toggle="dropdown">
                                <i className="icofont-alarm fs-5"/>
                                <span className="pulse-ring"/>
                            </a>
                            <div id="NotificationsDiv"
                                 className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-md-end p-0 m-0 mt-3">
                                <div className="card border-0 w380">
                                    <div className="card-header border-0 p-3">
                                        <h5 className="mb-0 font-weight-light d-flex justify-content-between">
                                            <span>Notifications</span>
                                            <span className="badge text-white">06</span>
                                        </h5>
                                    </div>
                                    <div className="tab-content card-body">
                                        <div className="tab-pane fade show active">
                                            <ul className="list-unstyled list mb-0">
                                                <li className="py-2 mb-1 border-bottom">
                                                    <a href="javascript:void(0);" className="d-flex">
                                                        <img className="avatar rounded-circle"
                                                             src="assets/images/xs/avatar1.svg" alt=""/>
                                                        <div className="flex-fill ms-2">
                                                            <p className="d-flex justify-content-between mb-0 ">
                                                                    <span
                                                                        className="font-weight-bold">Chloe Walkerr</span>
                                                                <small>2MIN</small></p>
                                                            <span
                                                                className>Added New Product 2021-07-15 <span
                                                                className="badge bg-success">Add</span></span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="py-2 mb-1 border-bottom">
                                                    <a href="javascript:void(0);" className="d-flex">
                                                        <div
                                                            className="avatar rounded-circle no-thumbnail">AH
                                                        </div>
                                                        <div className="flex-fill ms-2">
                                                            <p className="d-flex justify-content-between mb-0 ">
                                                                    <span
                                                                        className="font-weight-bold">Alan	Hill</span>
                                                                <small>13MIN</small></p>
                                                            <span className>Invoice generator </span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="py-2 mb-1 border-bottom">
                                                    <a href="javascript:void(0);" className="d-flex">
                                                        <img className="avatar rounded-circle"
                                                             src="assets/images/xs/avatar3.svg" alt=""/>
                                                        <div className="flex-fill ms-2">
                                                            <p className="d-flex justify-content-between mb-0 ">
                                                                    <span
                                                                        className="font-weight-bold">Melanie	Oliver</span>
                                                                <small>1HR</small></p>
                                                            <span className>Orader  Return RT-00004</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="py-2 mb-1 border-bottom">
                                                    <a href="javascript:void(0);" className="d-flex">
                                                        <img className="avatar rounded-circle"
                                                             src="assets/images/xs/avatar5.svg" alt=""/>
                                                        <div className="flex-fill ms-2">
                                                            <p className="d-flex justify-content-between mb-0 ">
                                                                <span className="font-weight-bold">Boris Hart</span>
                                                                <small>13MIN</small></p>
                                                            <span
                                                                className>Product Order to Toyseller</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="py-2 mb-1 border-bottom">
                                                    <a href="javascript:void(0);" className="d-flex">
                                                        <img className="avatar rounded-circle"
                                                             src="assets/images/xs/avatar6.svg" alt=""/>
                                                        <div className="flex-fill ms-2">
                                                            <p className="d-flex justify-content-between mb-0 ">
                                                                    <span
                                                                        className="font-weight-bold">Alan	Lambert</span>
                                                                <small>1HR</small></p>
                                                            <span className>Leave Apply</span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="py-2">
                                                    <a href="javascript:void(0);" className="d-flex">
                                                        <img className="avatar rounded-circle"
                                                             src="assets/images/xs/avatar7.svg" alt=""/>
                                                        <div className="flex-fill ms-2">
                                                            <p className="d-flex justify-content-between mb-0 ">
                                                                <span className="font-weight-bold">Zoe Wright</span>
                                                                <small className>1DAY</small></p>
                                                            <span
                                                                className>Product Stoke Entry Updated</span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a className="card-footer text-center border-top-0" href="#"> View all
                                        notifications</a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="dropdown user-profile ml-2 ml-sm-3 d-flex align-items-center zindex-popover">
                            <div className="u-info me-2">
                                <p className="mb-0 text-end line-height-sm "><span
                                    className="font-weight-bold">{username}</span></p>
                                <small>Admin Profile</small>
                            </div>
                            <a className="nav-link dropdown-toggle pulse p-0" href="#" role="button"
                               data-bs-toggle="dropdown" data-bs-display="static">
                                <img className="avatar lg rounded-circle img-thumbnail"
                                     src="assets/images/profile_av.svg" alt="profile"/>
                            </a>
                            <div
                                className="  mt-300 dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0">
                                <div className="card border-0 w-[295px]">
                                    <div className="card-body pb-0">
                                        <div className="d-flex py-1">
                                            <img className="avatar rounded-circle"
                                                 src={profile} alt="profile"/>
                                            <div className="flex-fill ms-3">
                                                <p className="mb-0"><span
                                                    className="font-weight-bold">{username}</span>
                                                </p>
                                                <small className>{email}</small>
                                            </div>
                                        </div>
                                        <div>
                                            <hr className="dropdown-divider border-dark"/>
                                        </div>
                                    </div>
                                    <div className="list-group m-2 ">
                                        <a href="admin-profile"
                                           className="list-group-item list-group-item-action border-0 "><i
                                            className="icofont-ui-user fs-5 me-3"/>Profile Page</a>
                                        <a href="order-invoices"
                                           className="list-group-item list-group-item-action border-0 "><i
                                            className="icofont-file-text fs-5 me-3"/>Order Invoices</a>
                                        <a onClick={log_out}
                                           className="list-group-item list-group-item-action border-0 "><i
                                            className="icofont-logout fs-5 me-3"/>Signout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="setting ms-2">
                            <a href="#" data-bs-toggle="modal" data-bs-target="#Settingmodal"><i
                                className="icofont-gear-alt fs-5"/></a>
                        </div>
                    </div>
                    {/* menu toggler */}
                    <button className="navbar-toggler p-0 border-0 menu-toggle order-3" type="button"
                            data-bs-toggle="collapse" data-bs-target="#mainHeader">
                        <span className="fa fa-bars"/>
                    </button>
                    {/* main menu Search*/}
                    <div className="order-0 col-lg-4 col-md-4 col-sm-12 col-12 mb-3 mb-md-0 ">
                        <div className="input-group flex-nowrap input-group-lg">
                            <input type="search" className="form-control" placeholder="Search"
                                   aria-label="search" aria-describedby="addon-wrapping"/>
                            <button type="button" className="input-group-text" id="addon-wrapping"><i
                                className="fa fa-search"/></button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    );
};

export default Header;
