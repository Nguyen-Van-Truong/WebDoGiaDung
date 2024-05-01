import React, {useCallback, useEffect, useState} from "react";
import cart1 from '../../assets/images/all-img/cart-01.png'
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    logout,
    setCategory, setEmail,
    setIsCart,
    setIsMenu, setPassword,
    setUserMin, tabIsSeach,
    toggleMenuOpen
} from "../../redux/Action";

import {getNotification, updateIsRead} from "../../api/NotificationApi";
import {timeSince} from '../convertDateTime/Convert'
import {setIsNotification, setNotificationCount} from "../../redux/NotificationAction";
import {count, getListCart, throttledCountCart} from "../../api/CartApi";
import {throttledTop_selling} from "../../api/Api";
import {formatPrice} from "../../format/FormatMoney";
import {deleteCart} from "../../api/HistoryCartApi";

const Header_Menu = () => {
    const dispatch = useDispatch();

    const isCart = useSelector((state) => state.appUser.isCart);
    const isMenu = useSelector((state) => state.appUser.isMenu);
    const isSeach = useSelector((state) => state.appUser.isSearch);
    const isUserMin = useSelector((state) => state.appUser.isUserMin);
    const [webSocket, setWebSocket] = useState(null);
    const isCategory = useSelector((state) => state.appUser.isCategory);
    const isNotification = useSelector(state => state.notification.isNotification);

    const navigate = useNavigate();
    const userData = useSelector(state => state.appUser.userData);
    const lisData = useSelector(state => state.notification.listNotification);
    const notificationCount = useSelector(state => state.notification.notificationCount);
    const  cartList = useSelector(state => state.cart.ListCart);
    /**
     * lay id nguoi dung
     */
    const  user_id =useSelector(state => state.appUser.user_id);
    /**
     * lay trang thai
     */
    const  isStatus =useSelector(state => state.appUser.isStatus);
    /**
     *
     * sap xep theo thoi gian giam dan
     * @type {[]|*}
     */
    const sortList = lisData.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    /**
     * đếm só luong sản phẩm
     */
    const  countCart = useSelector(state => state.cart.countCart);
    /**
     * lấy img
     */

    const userOpen = () => {
        dispatch(setIsNotification(false));
        dispatch(setIsMenu(!isMenu))
    }
    const clickSeach = () => {
        dispatch(tabIsSeach());
        dispatch(setIsNotification(false));
        dispatch(setIsMenu(false));
        dispatch(setIsCart(false));
    }

    const clickNotification = () => {
        dispatch(setIsNotification(!isNotification));
        dispatch(setIsMenu(false));
        dispatch(setIsCart(false));
        if (user_id !== null && isNotification === false) {
            dispatch(updateIsRead(user_id));
        }
    }
    const cartOpen = () => {
        dispatch(setIsCart(!isCart));
        dispatch(setIsNotification(false));
    }
    const handleMenuClick = () => {
        dispatch(toggleMenuOpen());
        dispatch(setIsMenu(true));
        dispatch(setUserMin(isUserMin));
        dispatch(setCategory(isCategory));
    };
    const clickAll = () => {
        dispatch(setIsMenu(!isMenu));
        dispatch(setUserMin(isUserMin));
        dispatch((setCategory(isCategory)));
    }
    /**
     * đăng xuất
     */
    const log_out = () => {
        dispatch(logout());
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("username");
        navigate('/login')
        dispatch(setPassword(''));
        dispatch(setEmail(''));
    }
    /*
    xoa san pham
     */
    const  delete_Cart  =(id)=>{
        dispatch(deleteCart(id));
    }

    const throttledCountCallback = useCallback(() => {
        throttledCountCart(user_id, dispatch);
    }, [user_id, dispatch]);


    useEffect(() => {
        if(isStatus== true){
            dispatch(getListCart(user_id));
            throttledCountCallback();
        }
        if (user_id !== null) {
            dispatch(getNotification(user_id));
        }
        const socket = new WebSocket(`ws://localhost:8080/countNotification?user_id=${user_id}`);
        socket.addEventListener('open', function (event) {
            console.log('Connected to WS Server');
            const messageInterval = setInterval(() => {
                socket.send(user_id);
            }, 500);

            socket.addEventListener('close', function (event) {

            });
        });

        socket.addEventListener('message', function (event) {
            dispatch(setNotificationCount(event.data));
        });
        // Handle any errors that occur.
        socket.addEventListener('error', function (error) {
            console.error('WebSocket Error: ' + error);
        });


        setWebSocket(socket);

        const handleBeforeUnload = (event) => {

            console.log("nay la" + userData)

        };
        sendMessage(notificationCount);
        window.addEventListener('beforeunload', handleBeforeUnload);

        // Cleanup function
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);

        };

    }, [notificationCount,countCart, throttledCountCallback]);
    const sendMessage = (message) => {
        if (webSocket && webSocket.readyState === WebSocket.OPEN) {
            webSocket.send(message);
        }
    };
    return (
        <div className="main-header bg-grayscales-500 lg:border-none border-b border-grayscales-700">
            <div className="container px-3_t md:px-5 xl:px-0">
                <div className="flex justify-between items-center py-5">
                    <div>
                                  <span className="logo-icon">
                        <i className="bi bi-bag-check-fill fs-4"></i>
                                 </span>
                        <span className="logo-text">eTTShop</span>
                    </div>
                    <div className="lg:max-w-[413px] lg:block hidden w-full">
                        <div className="relative">
                            <input type="text" id="search" placeholder="search here..."
                                   className="block w-full bg-white focus:outline-none border-0 px-4 py-3 rounded-lg focus:ring-2 ring-[#029FAE]"/>
                            <label onClick={clickSeach} for="search" className="absolute right-4 top-3">
                                <svg width="23" height="22" viewBox="0 0 23 22" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M10.5833 17.4167C14.6334 17.4167 17.9167 14.1334 17.9167 10.0833C17.9167 6.03325 14.6334 2.75 10.5833 2.75C6.53325 2.75 3.25 6.03325 3.25 10.0833C3.25 14.1334 6.53325 17.4167 10.5833 17.4167Z"
                                        stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                    <path d="M19.75 19.25L15.7625 15.2625" stroke="#272343"
                                          stroke-width="1.5" stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                </svg>
                            </label>
                        </div>
                        {isSeach && (
                            <div className="seach-content">
                                <ul className="py-3"
                                    style={{display: isSeach ? 'block' : 'none'}}>
                                    <div className="px-3_t shadow-[0px_1px_0px_#E1E3E6]">
                                        <li>
                                            <Link to="/login">không có sản phẩm nào</Link>
                                        </li>

                                    </div>

                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="lg:block hidden">
                        <ul className="flex items-center gap-3">
                            <li className="relative" onClick={cartOpen}>
                                <a href="#" className="inline-flex gap-2 bg-white rounded-lg p-[11px]"
                                   id="addToCart">
                                        <span><svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                                   xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M2.52087 2.97916L4.42754 3.30916L5.31029 13.8261C5.3442 14.2399 5.5329 14.6258 5.83873 14.9066C6.14457 15.1875 6.54506 15.3427 6.96029 15.3413H16.9611C17.3587 15.3418 17.7431 15.1986 18.0436 14.9383C18.344 14.6779 18.5404 14.3178 18.5965 13.9242L19.4673 7.91266C19.4905 7.75279 19.482 7.58991 19.4422 7.43333C19.4024 7.27675 19.3322 7.12955 19.2354 7.00015C19.1387 6.87074 19.0175 6.76167 18.8786 6.67917C18.7397 6.59667 18.5859 6.54235 18.426 6.51933C18.3673 6.51291 4.73371 6.50833 4.73371 6.50833"
                                                    stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round"/>
                                                <path d="M12.948 9.89542H15.4899" stroke="#272343" stroke-width="1.5"
                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M6.55786 18.5194C6.62508 18.5165 6.69219 18.5273 6.75515 18.551C6.81811 18.5748 6.87562 18.611 6.9242 18.6575C6.97279 18.7041 7.01145 18.76 7.03787 18.8219C7.06428 18.8837 7.0779 18.9503 7.0779 19.0176C7.0779 19.0849 7.06428 19.1515 7.03787 19.2134C7.01145 19.2753 6.97279 19.3312 6.9242 19.3777C6.87562 19.4243 6.81811 19.4605 6.75515 19.4842C6.69219 19.508 6.62508 19.5187 6.55786 19.5158C6.42942 19.5103 6.30808 19.4554 6.21914 19.3626C6.13021 19.2698 6.08057 19.1462 6.08057 19.0176C6.08057 18.8891 6.13021 18.7655 6.21914 18.6726C6.30808 18.5798 6.42942 18.5249 6.55786 18.5194Z"
                                                      fill="#272343" stroke="#272343" stroke-width="1.5"
                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M16.8988 18.5194C17.0312 18.5194 17.1583 18.5721 17.252 18.6657C17.3457 18.7594 17.3983 18.8865 17.3983 19.019C17.3983 19.1515 17.3457 19.2786 17.252 19.3723C17.1583 19.4659 17.0312 19.5186 16.8988 19.5186C16.7663 19.5186 16.6392 19.4659 16.5455 19.3723C16.4518 19.2786 16.3992 19.1515 16.3992 19.019C16.3992 18.8865 16.4518 18.7594 16.5455 18.6657C16.6392 18.5721 16.7663 18.5194 16.8988 18.5194Z"
                                                      fill="#272343" stroke="#272343" stroke-width="1.5"
                                                      stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </span>
                                    <span>Cart</span>
                                    {isStatus==true &&  <span
                                        className="bg-dark-accents text-white rounded-full py-[3px] px-[9px] ml-1 inline-flex justify-center items-center text-[10px] leading-[100%]">{countCart}</span>}
                                    {isStatus==false &&  <span
                                        className="bg-dark-accents text-white rounded-full py-[3px] px-[9px] ml-1 inline-flex justify-center items-center text-[10px] leading-[100%]">0</span>}
                                </a>
                                {isCart && isStatus ===true &&
                                <div className="cart-content">

                                        <ul className="p-6-t"
                                            style={{display: isCart ? 'block' : 'none'}}>
                                            {cartList.map((cart) => (
                                            <li className="pb-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-1">
                                                        <div>
                                                            <img src={cart.url} alt=""/>
                                                        </div>
                                                        <div className="px-2-t">
                                                            <h5 style={{fontSize: "15px"}}
                                                                className="text-gray-black ">
                                                                <span>{cart.name}</span>
                                                                <span className="text-[#636270]">x {cart.quantity}</span>
                                                            </h5>
                                                            <p className="text-gray-black font-semibold mb-0">{formatPrice(cart.price)} VNĐ</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </li>
                                            ))}
                                        </ul>

                                    <div className={"cart-summary"}>

                                        <div className="flex justify-between items-center p_10">
                                            <a href="/cart" className="btn-transparent">Xem giỏ hàng</a>
                                            <Link className="btn-primary" to={"/checkout-shopping"}
                                                  onClick={clickAll}>Thanh
                                                toán</Link>

                                        </div>
                                    </div>


                                </div>
                                }
                                {isCart && isStatus === false &&
                                    <div className="cart-content">
                                    <ul className="p-6-t"
                                        style={{display: isCart ? 'block' : 'none'}}>

                                        <li className="pb-4 ">
                                            <img className={"img_product"} src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/cart/9bdd8040b334d31946f4.png" alt=""/>
                                            <p className={"text-center"}>Chưa có sản phẩm nào</p>
                                        </li>


                                    </ul>
                                    </div>
                                }
                            </li>
                            <li className={"relative"}>
                                <div className={" "} onClick={clickNotification}>
                                    <a className={"bg-white text-gray-black hover:text-[#007580] rounded-lg p-[11px]"}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24"
                                             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                             stroke-linejoin="round" className="feather feather-bell">
                                            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                                            <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                                        </svg>

                                    </a>
                                    <span id="notification-icon"

                                          className=" re_p_l bg_red text-white rounded-full py-[6px] px-[9px] ml-1 inline-flex justify-center items-center text-[10px] leading-[100%]">{notificationCount}</span>
                                    {isNotification && (
                                        <div className="notification-content">
                                            <ul className="py-3"
                                                style={{display: isNotification ? 'block' : 'none'}}>
                                                <div className="px-3_t shadow-[0px_1px_0px_#E1E3E6]">
                                                    {user_id !==null &&
                                                        <li>
                                                            {sortList.map(notification => (
                                                                <div>
                                                                    <a className="notifi-ml"
                                                                       key={notification.notification_id}>{notification.message}</a>
                                                                    <p>{timeSince(new Date(notification.created_at))} trước</p>
                                                                </div>
                                                            ))}

                                                        </li>
                                                    }
                                                    {user_id === 0 &&
                                                        <li>

                                                            <div>
                                                                <p className="notification_not_userid">Không có thông báo nào</p>

                                                            </div>

                                                        </li>
                                                    }

                                                </div>

                                            </ul>
                                        </div>
                                    )}
                                </div>

                            </li>
                            <li className="relative">
                                <button
                                    className="bg-white text-gray-black hover:text-[#007580] rounded-lg p-[11px] user-profile"
                                    onClick={userOpen}>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M10.9862 14.0672C7.44053 14.0672 4.4137 14.6034 4.4137 16.7503C4.4137 18.8971 7.42128 19.4526 10.9862 19.4526C14.5309 19.4526 17.5587 18.9154 17.5587 16.7695C17.5587 14.6236 14.5502 14.0672 10.9862 14.0672V14.0672Z"
                                              stroke="currentColor" stroke-width="1.5"
                                              stroke-linecap="round" stroke-linejoin="round"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M10.9862 11.0055C11.8195 11.0055 12.634 10.7584 13.3268 10.2955C14.0197 9.83255 14.5597 9.17457 14.8785 8.40475C15.1974 7.63492 15.2808 6.78783 15.1183 5.97058C14.9557 5.15334 14.5545 4.40266 13.9653 3.81346C13.3761 3.22426 12.6254 2.82301 11.8081 2.66045C10.9909 2.49789 10.1438 2.58132 9.37397 2.9002C8.60415 3.21907 7.94617 3.75906 7.48324 4.45188C7.02031 5.14471 6.77322 5.95925 6.77322 6.7925C6.76932 7.90581 7.20779 8.97508 7.99218 9.76515C8.77657 10.5552 9.84266 11.0014 10.956 11.0055H10.9862Z"
                                              stroke="currentColor" stroke-width="1.429"
                                              stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                                {isMenu && (
                                    <div className="profile-content">
                                        {userData !== null &&
                                            <ul className="py-3"
                                                style={{display: isMenu ? 'block' : 'none'}}>

                                                <div className="px-3_t shadow-[0px_1px_0px_#E1E3E6]">
                                                    <li>
                                                        <Link to={"/forget-password"} onClick={clickAll}>Quên mật
                                                            khẩu</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/order-history"} onClick={clickAll}>Lịch sử đơn
                                                            hàng</Link>
                                                    </li>
                                                </div>
                                                <div className="px-3_t shadow-[0px_1px_0px_#E1E3E6]">
                                                    <li>
                                                        <Link to={"/change-password"} onClick={clickAll}>Đổi mật
                                                            khẩu</Link>

                                                    </li>
                                                    <li>
                                                        <Link to={"/cart"} onClick={clickAll}>Giỏ hàng</Link>

                                                    </li>
                                                </div>
                                                <div className="px-3_t shadow-[0px_1px_0px_#E1E3E6]">
                                                    <li>
                                                        <Link to={"/account-setting"} onClick={clickAll}>Cài đặt tài
                                                            khoản</Link>

                                                    </li>

                                                </div>
                                                <div className="px-3_t">
                                                    <li>
                                                        <a onClick={log_out}>Đăng xuất</a>


                                                    </li>
                                                </div>
                                            </ul>
                                        }
                                        {userData === null &&
                                            <ul className="py-3"
                                                style={{display: isMenu ? 'block' : 'none'}}>
                                                <div className="px-3_t shadow-[0px_1px_0px_#E1E3E6]">
                                                    <li>
                                                        <Link to="/login" onClick={clickAll}>Đăng nhập</Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/register"} onClick={clickAll}>Đăng kí</Link>
                                                    </li>
                                                </div>
                                                <div className="px-3_t shadow-[0px_1px_0px_#E1E3E6]">
                                                    <li>
                                                        <Link to={"/forget-password"} onClick={clickAll}>Quên mật
                                                            khẩu</Link>
                                                    </li>

                                                </div>


                                            </ul>

                                        }


                                    </div>
                                )}

                            </li>
                        </ul>
                    </div>
                    <div className="lg:hidden inline-block hamburger-btn" id="hamburger-btn"
                         onClick={handleMenuClick}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header_Menu;