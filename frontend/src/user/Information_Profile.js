
import 'select2/dist/js/select2';

import React, {useState, useEffect, useRef} from 'react';

import '../assets/plugins/css/swipper.css'
import '../assets/plugins/css/select2.css'
import '../css/tailwind.css'
import '../css/styles.css'
import '../css/responsive.css'
import profile from '../assets/images/all-img/profile-photo.png'
import MiniChat from "./MiniChat";
import Header_Menu from "./menu/Header_Menu";
import Menu_Response from "./menu/Menu_Response";
import Header_Bottom from "./menu/Header_Bottom";
import Footer from "./footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import {setTabNewProducts} from "../redux/Action";
import {setConfirmPassword, setError, setNewPassword} from "../redux/ProfileAction";
import {notification, updatePassword} from "../api/Api";

const Information_Profile = () => {
    const [isHeaderSticky, setHeaderSticky] = useState(false);
    const dispatch = useDispatch();
    const email = sessionStorage.getItem('email');
    const password =sessionStorage.getItem('password');
    const user_id = localStorage.getItem('user_id');
    const newPassword = useSelector(state => state.profile.newPassword);
    const confirmPassword = useSelector(state => state.profile.confirmPassword);
    const errors = useSelector(state => state.profile.error);
    const success = useSelector(state => state.profile.success);


    /**
     * phuong thuc thay doi newpass va confirm pass khi nhap
     */
    const handNewPassword = (e) => {
        dispatch(setNewPassword(e.target.value))
    }
    const handConfirmPassword = (e) => {
        dispatch(setConfirmPassword(e.target.value));
    }
    const handClick = async (event) => {
        event.preventDefault();
        if (newPassword !== confirmPassword) {
            console.log('mật khẩu không trùng khớp');
            dispatch(setError("mật khẩu không trùng khớp"))

        } else {
            dispatch(updatePassword(user_id, password, newPassword));
            dispatch(notification(user_id, 'Mật khẩu của bạn đã thay đổi'))
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;
            if (scroll < 500) {
                setHeaderSticky(false);
            } else {
                setHeaderSticky(true);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>

            <header className="font-display">
                <div className={isHeaderSticky ? 'header-sticky' : ''} id="header-sticky">
                    <div className="top-header bg-secondary">
                        <div className="container px-3_t md:px-5 xl:px-0">
                            <div className="py-3.5 flex justify-center sm:justify-between">

                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Header*/}
                    <Header_Menu/>
                </div>

                {/*bottom-header*/}
                <Header_Bottom/>

                {/*menu response*/}
                <Menu_Response/>
            </header>

            <div className="pt_b" style={{backgroundColor: "var(--bg-breadcum)"}}>
                <div className="container px-3_t md:px-5 xl:px-0">
                    <div className="flex items-center gap-1 py-[1.5px]">
                        <a href="#" className="text-[14px] font-normal leading-[110%] text-dark-gray">Trang chủ</a>

                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.125 5.25L10.875 9L7.125 12.75" stroke="#636270" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>

                        <a href="#" className="text-[14px] font-normal leading-[110%] text-dark-gray">Tài khoản</a>

                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.125 5.25L10.875 9L7.125 12.75" stroke="#636270" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>

                        <span
                            className="text-[14px] font-medium leading-[110%] font-display text-gray-black inline-block">Đăng kí</span>
                    </div>

                    <h2 className="pt-[13.5px] text-2xl font-semibold text-gray-black font-display">Đăng kí</h2>
                </div>
            </div>

            <div style={{backgroundColor: "var(--bg-breadcum)"}}>
                <div className="container">

                    <div id="tab-contents">


                        <div>
                            <div id="account_settings">
                                <div className="container px-3_t md:px-5 xl:px-0 py-10">
                                    <div className="accout-setting flex flex-col xl:flex-row gap-6-t">

                                        <div className="box xl:w-[536px]">
                                            <div className="w-full ">
                                                <div className="p-6-t">
                                                    <h2 className="text-start xl:text-2xl acc-title text-[22px] text-[#272343] font-medium mb-6 font-display">Thông
                                                        tin tài khoản</h2>
                                                    <div className="flex flex-col sm:flex-row gap-5 items-center mb-5">
                                                        <div className="w-full">
                                                            <input type="text" placeholder="Kevin"
                                                                   className="input-box focus:outline-none focus:ring-2 focus:ring-accents transition duration-300 ease-in-out"/>
                                                        </div>
                                                        <div className="w-full">
                                                            <input type="text" placeholder="Kevin Gilbert"
                                                                   className="input-box focus:outline-none focus:ring-2 focus:ring-accents font-display transition duration-300 ease-in-out"/>
                                                        </div>
                                                    </div>

                                                    <div className="w-full mb-5">
                                                        <input type="email" value={email}
                                                               className="input-box focus:outline-none  focus:ring-2 focus:ring-accents font-display transition duration-300 ease-in-out"/>
                                                    </div>

                                                    <button type="submit" className="btn-primary">Lưu thay đổi</button>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="flex flex-col md:flex-row gap-6-t">

                                            <div className="box xl:w-[424px]">
                                                <div className="">
                                                    <div className="p-6-t">
                                                        <h2 className="text-start xl:text-2xl acc-title text-[22px] text-[#272343] font-medium mb-6 font-display">Thay
                                                            đổi mật khẩu</h2>
                                                        {success && <div className="alert alert-success p-lg-1">{success }</div>}
                                                        {errors && <div className="alert alert-danger p-lg-1">{errors}</div>}
                                                        <div className="relative">
                                                            <input type="password" value={password}
                                                                   className="form_password focus:outline-none focus:ring-2 focus:ring-accents font-display transition duration-300 ease-in-out"
                                                                   name="password"/>
                                                            <span
                                                                className="absolute top-[17px] right-5 cursor-pointer ">

                                                <svg id="current-icon-show" onClick="currentPasswordIcon()" width="24"
                                                     height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12 4.24902C4.5 4.24902 1.5 11.9999 1.5 11.9999C1.5 11.9999 4.5 19.749 12 19.749C19.5 19.749 22.5 11.9999 22.5 11.9999C22.5 11.9999 19.5 4.24902 12 4.24902V4.24902Z"
                                                        stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round"/>
                                                    <path
                                                        d="M12 15.75C12.9946 15.75 13.9484 15.3549 14.6517 14.6517C15.3549 13.9484 15.75 12.9946 15.75 12C15.75 11.0054 15.3549 10.0516 14.6517 9.34835C13.9484 8.64509 12.9946 8.25 12 8.25C11.0054 8.25 10.0516 8.64509 9.34835 9.34835C8.64509 10.0516 8.25 11.0054 8.25 12C8.25 12.9946 8.64509 13.9484 9.34835 14.6517C10.0516 15.3549 11.0054 15.75 12 15.75V15.75Z"
                                                        stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round"/>
                                                </svg>
                                                <svg id="current-icon-hide" onClick="currentPasswordIcon()" width="20"
                                                     height="10" viewBox="0 0 20 10" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.858 2.93481L18.9963 6.63906" stroke="#272343"
                                                          stroke-width="1.5" stroke-linecap="round"
                                                          stroke-linejoin="round"/>
                                                    <path d="M12.4547 4.99353L13.1215 8.77578" stroke="#272343"
                                                          stroke-width="1.5" stroke-linecap="round"
                                                          stroke-linejoin="round"/>
                                                    <path d="M7.53701 4.99133L6.86951 8.77433" stroke="#272343"
                                                          stroke-width="1.5" stroke-linecap="round"
                                                          stroke-linejoin="round"/>
                                                    <path d="M3.13825 2.9325L0.989502 6.6525" stroke="#272343"
                                                          stroke-width="1.5" stroke-linecap="round"
                                                          stroke-linejoin="round"/>
                                                    <path
                                                        d="M1 0.83252C2.575 2.78252 5.4655 5.25002 10 5.25002C14.5345 5.25002 17.4235 2.78252 19 0.83252"
                                                        stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round"/>
                                                </svg>
                                            </span>
                                                        </div>

                                                        <div className="relative">
                                                            <input type="password" placeholder="Mật khẩu mới"
                                                                   className="form_password focus:outline-none focus:ring-2 focus:ring-accents font-display transition duration-300 ease-in-out"
                                                                   value={newPassword} onChange={handNewPassword}
                                                                   name="password"/>
                                                            <span
                                                                className="absolute top-[17px] right-5 cursor-pointer select-none ">

                                                <svg id="create-icon-show" onClick="CreatePasswordIcon()" width="24"
                                                     height="24" viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12 4.24902C4.5 4.24902 1.5 11.9999 1.5 11.9999C1.5 11.9999 4.5 19.749 12 19.749C19.5 19.749 22.5 11.9999 22.5 11.9999C22.5 11.9999 19.5 4.24902 12 4.24902V4.24902Z"
                                                        stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round"/>
                                                    <path
                                                        d="M12 15.75C12.9946 15.75 13.9484 15.3549 14.6517 14.6517C15.3549 13.9484 15.75 12.9946 15.75 12C15.75 11.0054 15.3549 10.0516 14.6517 9.34835C13.9484 8.64509 12.9946 8.25 12 8.25C11.0054 8.25 10.0516 8.64509 9.34835 9.34835C8.64509 10.0516 8.25 11.0054 8.25 12C8.25 12.9946 8.64509 13.9484 9.34835 14.6517C10.0516 15.3549 11.0054 15.75 12 15.75V15.75Z"
                                                        stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round"/>
                                                </svg>

                                                <svg id="create-icon-hide" onClick="CreatePasswordIcon()" width="20"
                                                     height="10" viewBox="0 0 20 10" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.858 2.93481L18.9963 6.63906" stroke="#272343"
                                                          stroke-width="1.5" stroke-linecap="round"
                                                          stroke-linejoin="round"/>
                                                    <path d="M12.4547 4.99353L13.1215 8.77578" stroke="#272343"
                                                          stroke-width="1.5" stroke-linecap="round"
                                                          stroke-linejoin="round"/>
                                                    <path d="M7.53701 4.99133L6.86951 8.77433" stroke="#272343"
                                                          stroke-width="1.5" stroke-linecap="round"
                                                          stroke-linejoin="round"/>
                                                    <path d="M3.13825 2.9325L0.989502 6.6525" stroke="#272343"
                                                          stroke-width="1.5" stroke-linecap="round"
                                                          stroke-linejoin="round"/>
                                                    <path
                                                        d="M1 0.83252C2.575 2.78252 5.4655 5.25002 10 5.25002C14.5345 5.25002 17.4235 2.78252 19 0.83252"
                                                        stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round"/>
                                                </svg>
                                            </span>
                                                        </div>

                                                        <div className="relative">
                                                            <input type="password" placeholder="Xác nhận mật khẩu"
                                                                   className="form_password focus:outline-none focus:ring-2 focus:ring-accents font-display transition duration-300 ease-in-out"
                                                                   name="password" value={confirmPassword}
                                                                   onChange={handConfirmPassword}/>
                                                            <span
                                                                className="absolute top-[17px] right-5 cursor-pointer ">
                                                <svg id="icon-show" onClick="PasswordIcon()" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12 4.24902C4.5 4.24902 1.5 11.9999 1.5 11.9999C1.5 11.9999 4.5 19.749 12 19.749C19.5 19.749 22.5 11.9999 22.5 11.9999C22.5 11.9999 19.5 4.24902 12 4.24902V4.24902Z"
                                                        stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round"/>
                                                    <path
                                                        d="M12 15.75C12.9946 15.75 13.9484 15.3549 14.6517 14.6517C15.3549 13.9484 15.75 12.9946 15.75 12C15.75 11.0054 15.3549 10.0516 14.6517 9.34835C13.9484 8.64509 12.9946 8.25 12 8.25C11.0054 8.25 10.0516 8.64509 9.34835 9.34835C8.64509 10.0516 8.25 11.0054 8.25 12C8.25 12.9946 8.64509 13.9484 9.34835 14.6517C10.0516 15.3549 11.0054 15.75 12 15.75V15.75Z"
                                                        stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round"/>
                                                </svg>
                                                <svg id="icon-hide" onClick="PasswordIcon()" width="20" height="10"
                                                     viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16.858 2.93481L18.9963 6.63906" stroke="#272343"
                                                          stroke-width="1.5" stroke-linecap="round"
                                                          stroke-linejoin="round"/>
                                                    <path d="M12.4547 4.99353L13.1215 8.77578" stroke="#272343"
                                                          stroke-width="1.5" stroke-linecap="round"
                                                          stroke-linejoin="round"/>
                                                    <path d="M7.53701 4.99133L6.86951 8.77433" stroke="#272343"
                                                          stroke-width="1.5" stroke-linecap="round"
                                                          stroke-linejoin="round"/>
                                                    <path d="M3.13825 2.9325L0.989502 6.6525" stroke="#272343"
                                                          stroke-width="1.5" stroke-linecap="round"
                                                          stroke-linejoin="round"/>
                                                    <path
                                                        d="M1 0.83252C2.575 2.78252 5.4655 5.25002 10 5.25002C14.5345 5.25002 17.4235 2.78252 19 0.83252"
                                                        stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round"/>
                                                </svg>
                                            </span>
                                                        </div>


                                                        <button onClick={handClick} className="btn-primary">Lưu thay
                                                            đổi
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>


            {/*footer*/}
            <Footer/>
            <MiniChat/>
        </div>
    );
}
export default Information_Profile;