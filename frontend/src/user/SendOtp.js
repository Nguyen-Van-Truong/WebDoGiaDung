import 'select2/dist/js/select2';

import React, {useState, useEffect, useRef} from 'react';
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
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
import {useDispatch, useSelector} from "react-redux";
import { register} from "../api/Api";
import {resetRegistrationMessage, setError} from "../redux/Action";
import {bindActionCreators} from "redux";
import {Cookies, useCookies} from "react-cookie";

const SendOtp = () => {

    const [isHeaderSticky, setHeaderSticky] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const  [otp, setOtp]= useState('');
    const {registerAction} = bindActionCreators({registerAction: register}, dispatch);
    const registerResponse = useSelector(state => state.appUser.registrationMessage);
    const errorMessage = useSelector(state => state.appUser.errorsMessage);
    const errors = useSelector(state => state.appUser.errors);
    const isForget = useSelector(state => state.forget.isForget);
    const  isRegister =useSelector(state => state.appUser.isRegister);
    const location = useLocation();

    const randomNum = location.state && location.state.randomNum;


    console.log(randomNum +"num");
    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };
    useEffect(() => {
        /**
         * chuyen trang
         */
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



    const handleSubmit = (e) => {
        e.preventDefault();
        const username = sessionStorage.getItem('username');
        const  email = sessionStorage.getItem('email');
        const password = sessionStorage.getItem('password');


       if(isRegister === true){
           if(otp === randomNum.toString()){
               const userData = {
                   username: username,
                   email: email,
                   password: password,
               };
               registerAction(userData, () => navigate('/login'));
               dispatch(setError(''));
           }else{
               dispatch(setError('Mã otp không trùng khớp'));
               dispatch(resetRegistrationMessage());
           }
       }
       if(isForget ===true){
           if(otp === randomNum.toString()){
               dispatch(setError(''));

               navigate("/change-password")
           }
           else{
               dispatch(setError('Mã otp không trùng khớp'));
           }
       }

    }
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
            <div className="pt_b" style={{backgroundColor: "var(--bg-breadcum)"}}>
                <div className="container px-3 md:px-5 xl:px-0">
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
                            className="text-[14px] font-medium leading-[110%] font-display text-gray-black inline-block">Nhập OTP</span>
                    </div>
                </div>
            </div>
            <div className=" " style={{backgroundColor: "var(--bg-breadcum)"}}>
                <div className="container py-20">

                    <div className="sign_in ">
                        <h2 className="text-center text-gray-black xl:text-[32px] text-[20px] font-semibold font-display">Xác
                            nhận OTP</h2>
                        {/*form dang nhap*/}
                        <div className="form">
                            <form onSubmit={handleSubmit} action="" className="">
                                {/*bao loi*/}
                                {registerResponse && <div className="alert alert-success p-lg-1">{registerResponse}</div>}
                                {errors && <div className="alert alert-danger p-lg-1">{errors}</div>}
                                {errorMessage && <div className="alert alert-danger p-lg-1">{errorMessage}</div>}
                                <div className="mb-4">
                                    <input type="text" placeholder="mã otp" value={otp} onChange={handleOtpChange}
                                           className="input-box focus:outline-none focus:ring-2 focus:ring-accents font-display transition duration-300 ease-in-out"
                                    />
                                </div>
                                <button type={"submit"} className="form_btn w-full">
                                    Xác nhận
                                    <span>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 7.5L20.5 12M20.5 12L16 16.5M20.5 12H4.5" stroke="white" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                        </span>
                                </button>

                            </form>

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
export default SendOtp;