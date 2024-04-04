import $ from 'jquery';
import Swiper from "swiper";
import 'select2/dist/js/select2';
import mixitup from 'mixitup';
import React, {useState, useEffect, useRef} from 'react';
import {Link} from "react-router-dom";
import '../assets/plugins/css/swipper.css'
import '../assets/plugins/css/select2.css'
import '../css/tailwind.css'
import '../css/styles.css'
import '../css/responsive.css'
import MiniChat from "./MiniChat";
import Menu_Response from "./menu/Menu_Response";
import Header_Menu from "./menu/Header_Menu";
import Header_Bottom from "./menu/Header_Bottom";
import Footer from "./footer/Footer";

const Order_Details = () => {
    const [isHeaderSticky, setHeaderSticky] = useState(false);
    const containerRef = useRef(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [isMenu, setIsMenu] = useState(false);

    const [isConfirmPassWord, setConfirmPass] =useState(false);



    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const toggleConfirmPasswordVisibility = () => {
        setConfirmPass(!isConfirmPassWord);
    };
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
        setIsMenu(!isMenu);
    };

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
                        <div className="container px-3 md:px-5 xl:px-0">
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

            <div className="pt_b" tyle={{backgroundColor: "var(--bg-breadcum)"}}>
                <div className="container px-3 md:px-5 xl:px-0">
                    <div className="flex items-center gap-1 py-[1.5px]">
                        <a href="#" className="text-[14px] font-normal leading-[110%] text-dark-gray">Trang chủ</a>

                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.125 5.25L10.875 9L7.125 12.75" stroke="#636270" stroke-linecap="round"
                                  stroke-linejoin="round" />
                        </svg>

                        <a href="#" className="text-[14px] font-normal leading-[110%] text-dark-gray">Tài khoản</a>

                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.125 5.25L10.875 9L7.125 12.75" stroke="#636270" stroke-linecap="round"
                                  stroke-linejoin="round" />
                        </svg>

                        <span className="text-[14px] font-medium leading-[110%] font-display text-gray-black inline-block">Đăng kí</span>
                    </div>

                    <h2 className="pt-[13.5px] text-2xl font-semibold text-gray-black font-display">Đăng kí</h2>
                </div>
            </div>

            <div style={{backgroundColor: "var(--bg-breadcum)"}}>
                <div className="container py-20" >
                    <div className="sign_in">
                        <h2 className="text-center text-gray-black xl:text-[32px] text-[20px] font-semibold font-display">Đăng kí</h2>
                        <div className="form">
                            <form action="" className="">
                                <div className="xl:flex flex-wrap justify-between items-center mb-4">
                                    <div className="xl:w-[284px] w-full">
                                        <input type="text" placeholder="First Name"
                                               className="input-box focus:outline-none focus:ring-2 focus:ring-accents font-display transition duration-300 ease-in-out"/>
                                    </div>
                                    <div className="xl:w-[284px] w-full">
                                        <input type="text" placeholder="Last Name"
                                               className="input-box focus:outline-none focus:ring-2 focus:ring-accents font-display transition duration-300 ease-in-out"/>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <input type="text" placeholder="Email"
                                           className="input-box focus:outline-none focus:ring-2 focus:ring-accents font-display transition duration-300 ease-in-out"/>
                                </div>
                                <div className="relative">
                                    <input type={showPassword ? "text" : "password"} id="myInput" placeholder="Password"
                                           className="form_password focus:outline-none focus:ring-2 focus:ring-accents font-display transition duration-300 ease-in-out"
                                           name="password"/>
                                    <span className="absolute top-[17px] right-5 cursor-pointer ">

                            <svg id="create-icon-show" onClick={togglePasswordVisibility} width="24" height="24"
                                 viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 4.24902C4.5 4.24902 1.5 11.9999 1.5 11.9999C1.5 11.9999 4.5 19.749 12 19.749C19.5 19.749 22.5 11.9999 22.5 11.9999C22.5 11.9999 19.5 4.24902 12 4.24902V4.24902Z"
                                    stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path
                                    d="M12 15.75C12.9946 15.75 13.9484 15.3549 14.6517 14.6517C15.3549 13.9484 15.75 12.9946 15.75 12C15.75 11.0054 15.3549 10.0516 14.6517 9.34835C13.9484 8.64509 12.9946 8.25 12 8.25C11.0054 8.25 10.0516 8.64509 9.34835 9.34835C8.64509 10.0516 8.25 11.0054 8.25 12C8.25 12.9946 8.64509 13.9484 9.34835 14.6517C10.0516 15.3549 11.0054 15.75 12 15.75V15.75Z"
                                    stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                            <svg className="mt-[10px]" id="create-icon-hide" onClick="CreatePasswordIcon()" width="20"
                                 height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.858 2.93481L18.9963 6.63906" stroke="#272343" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.4547 4.99353L13.1215 8.77578" stroke="#272343" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.53701 4.99133L6.86951 8.77433" stroke="#272343" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3.13825 2.9325L0.989502 6.6525" stroke="#272343" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M1 0.83252C2.575 2.78252 5.4655 5.25002 10 5.25002C14.5345 5.25002 17.4235 2.78252 19 0.83252"
                                    stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </span>
                                </div>
                                <div className="relative">
                                    <input type={isConfirmPassWord ? "text" : "password"} placeholder="Confirm Password"
                                           className="form_password focus:outline-none  focus:ring-2 focus:ring-accents font-display transition duration-300 ease-in-out"
                                           id="myInput" name="password"/>
                                    <span className="absolute top-[17px] right-5 cursor-pointer ">
                            <svg id="icon-show" onClick={toggleConfirmPasswordVisibility} width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 4.24902C4.5 4.24902 1.5 11.9999 1.5 11.9999C1.5 11.9999 4.5 19.749 12 19.749C19.5 19.749 22.5 11.9999 22.5 11.9999C22.5 11.9999 19.5 4.24902 12 4.24902V4.24902Z"
                                    stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path
                                    d="M12 15.75C12.9946 15.75 13.9484 15.3549 14.6517 14.6517C15.3549 13.9484 15.75 12.9946 15.75 12C15.75 11.0054 15.3549 10.0516 14.6517 9.34835C13.9484 8.64509 12.9946 8.25 12 8.25C11.0054 8.25 10.0516 8.64509 9.34835 9.34835C8.64509 10.0516 8.25 11.0054 8.25 12C8.25 12.9946 8.64509 13.9484 9.34835 14.6517C10.0516 15.3549 11.0054 15.75 12 15.75V15.75Z"
                                    stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                            <svg className="mt-[10px]" id="icon-hide" onClick="PasswordIcon()" width="20" height="10"
                                 viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.858 2.93481L18.9963 6.63906" stroke="#272343" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.4547 4.99353L13.1215 8.77578" stroke="#272343" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.53701 4.99133L6.86951 8.77433" stroke="#272343" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3.13825 2.9325L0.989502 6.6525" stroke="#272343" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M1 0.83252C2.575 2.78252 5.4655 5.25002 10 5.25002C14.5345 5.25002 17.4235 2.78252 19 0.83252"
                                    stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="cursor-pointer">
                                        <input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent"
                                               className="cursor-pointer" type="checkbox" value="yes"/>
                                        <label htmlFor="wp-comment-cookies-consent">Chấp nhận tất cả các điều khoản và điều kiện</label>
                                    </div>
                                </div>
                                <button className="form_btn w-full">
                                    Đăng kí
                                    <span>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 7.5L20.5 12M20.5 12L16 16.5M20.5 12H4.5" stroke="white" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </span>
                                </button>
                            </form>
                            <div className="font-display font-normal text-[14px] leading-[110%] text-gray-black mt-6 text-center">
                                Đã có tài khoản?  <Link className="text-dark-accents font-display font-medium text-[14px] leading-[110%]" to={"/login"}>Đăng nhập</Link></div>
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
export default Order_Details;