import 'select2/dist/js/select2';

import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import '../assets/plugins/css/swipper.css';
import '../assets/plugins/css/select2.css';
import '../css/tailwind.css';
import '../css/styles.css';
import '../css/responsive.css';
import MiniChat from "./MiniChat";
import Menu_Response from "./menu/Menu_Response";
import Header_Menu from "./menu/Header_Menu";
import Header_Bottom from "./menu/Header_Bottom";
import Footer from "./footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../api/Api";
import { resetRegistrationMessage, setError } from "../redux/Action";
import { bindActionCreators } from "redux";
import { reset } from "../redux/ForgetPasswordAction";
import Header_Top from "./menu/Header_Top";

const SendOtp = () => {
    const [isHeaderSticky, setHeaderSticky] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [otp, setOtp] = useState('');
    const { registerAction } = bindActionCreators({ registerAction: register }, dispatch);
    const registerResponse = useSelector(state => state.appUser.registrationMessage);
    const errorMessage = useSelector(state => state.appUser.errorsMessage);
    const errorsOtp = useSelector(state => state.appUser.errorsOtp);
    const isForget = useSelector(state => state.forget.isForget);
    const success = useSelector(state => state.forget.success);
    const isRegister = useSelector(state => state.appUser.isRegister);
    const location = useLocation();
    const randomNum = location.state && location.state.randomNum;

    console.log(randomNum + "num");

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
    };

    useEffect(() => {
        /**
         * chuyen trang
         */

    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = sessionStorage.getItem('username');
        const email = sessionStorage.getItem('email');
        const password = sessionStorage.getItem('password');
        console.log('isForget:', isForget, 'randomNum:', randomNum);
        console.log('isRegister:', isRegister, 'randomNum:', randomNum);
        if (isRegister === true) {
            if (otp === randomNum.toString()) {
                const userData = {
                    username: username,
                    email: email,
                    password: password,
                };
                registerAction(userData, () => navigate('/login'));
                dispatch(setError(''));
            } else {
                dispatch(setError('Mã otp không trùng khớp'));
                dispatch(reset(''));
                dispatch(resetRegistrationMessage());
            }
        }
        if (isForget === true) {
            if (otp === randomNum.toString()) {
                dispatch(setError(''));
                dispatch(reset(''));
                navigate("/change-password")
            } else {
                dispatch(reset(''));
                dispatch(setError('Mã otp không trùng khớp'));
            }
        }
    }
    const renderMessage = (message, type) => {
        if (typeof message === 'object' && message !== null) {
            return Object.keys(message).map((key, index) => (
                <div key={index} className={`alert alert-${type} p-lg-1`}>
                    {key}: {message[key]}
                </div>
            ));
        }
        return <div className={`alert alert-${type} p-lg-1`}>{message}</div>;
    };
    return (
        <div>
            <Header_Top/>
            <div className="pt_b" style={{ backgroundColor: "var(--bg-breadcum)" }}>
                <div className="container px-3 md:px-5 xl:px-0">
                    <div className="flex items-center gap-1 py-[1.5px]">
                        <Link to="#" className="text-[14px] font-normal leading-[110%] text-dark-gray">Trang chủ</Link>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.125 5.25L10.875 9L7.125 12.75" stroke="#636270" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <Link to="#" className="text-[14px] font-normal leading-[110%] text-dark-gray">Tài khoản</Link>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.125 5.25L10.875 9L7.125 12.75" stroke="#636270" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-[14px] font-medium leading-[110%] font-display text-gray-black inline-block">Nhập OTP</span>
                    </div>
                </div>
            </div>
            <div className="" style={{ backgroundColor: "var(--bg-breadcum)" }}>
                <div className="container py-20">
                    <div className="sign_in">
                        <h2 className="text-center text-gray-black xl:text-[32px] text-[20px] font-semibold font-display">Xác nhận OTP</h2>
                        <div className="form">
                            {success && <div className="alert alert-success p-lg-1">{success}</div>}
                            <form onSubmit={handleSubmit} className="">

                                {errorsOtp && <div className="alert alert-danger p-lg-1">{errorsOtp}</div>}

                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="mã otp"
                                        value={otp}
                                        onChange={handleOtpChange}
                                        className="input-box focus:outline-none focus:ring-2 focus:ring-accents font-display transition duration-300 ease-in-out"
                                    />
                                </div>
                                <button type="submit" className="form_btn w-full">
                                    Xác nhận
                                    <span>
                                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 7.5L20.5 12M20.5 12L16 16.5M20.5 12H4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <MiniChat />
        </div>
    );
}

export default SendOtp;
