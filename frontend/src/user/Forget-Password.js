import 'select2/dist/js/select2';

import React, {useState, useEffect} from 'react';

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
import {setEmail, setErrorForget} from "../redux/ForgetPasswordAction";
import {checkEmailForget, getId, otpForget} from "../api/ForgetPasswordApi";
import {setError} from "../redux/Action";
import {bindActionCreators} from "redux";
import {otp} from "../api/Api";
import {useNavigate} from "react-router-dom";
import {check} from "../redux/RegisterAction";
import Header_Top from "./menu/Header_Top";
import {useTranslation} from "react-i18next";

const Forget_Password = () => {
    const [isHeaderSticky, setHeaderSticky] = useState(false);
    const dispatch = useDispatch();
    const email = useSelector(state => state.forget.email);
    const errorsMessage = useSelector(state => state.forget.errorsMessage);
    const  isPage = useSelector(state => state.forget.isPage);
    const {otpAction} = bindActionCreators({otpAction: otpForget}, dispatch);
    const navigate = useNavigate();
    const { t } = useTranslation();
    const handleEmailChange = async  (e) => {
        const emailValue = e.target.value;
        console.log('New email value:', emailValue);
        dispatch(setEmail(emailValue));
        /**
         * validation kiem tra email ton tai k
         */
        dispatch(checkEmailForget(emailValue));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email === '') {
            dispatch(setErrorForget('Email không được để trống'))
        } else {
            const min = 100000;
            const max = 999999;
            const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
            if(isPage === true){
                dispatch(check(false));
                otpAction(email, randomNum, (code) => navigate('/send-otp', {state: {code, randomNum}}));
                dispatch(getId(email));
            }

        }

    }
    useEffect(() => {

    }, []);
    return (
        <div>

            <Header_Top/>

            <div class="pt_b" style={{backgroundColor: "var(--bg-breadcum)"}}>
                <div class="container">
                    <div class="flex items-center gap-1 py-[1.5px]">
                        <a href="#" class="text-[14px] font-normal leading-[110%] text-dark-gray">{t('home')}</a>

                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.125 5.25L10.875 9L7.125 12.75" stroke="#636270" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>

                        <a href="#" class="text-[14px] font-normal leading-[110%] text-dark-gray">{t('account')}</a>

                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.125 5.25L10.875 9L7.125 12.75" stroke="#636270" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>

                        <span class="text-[14px] font-medium leading-[110%] font-display text-gray-black inline-block">{t('forgotPassword')}</span>
                    </div>


                </div>
            </div>

            <div style={{backgroundColor: "var(--bg-breadcum)"}}>
                <div class="container py-20">
                    <div class="sign_in">
                        <h2 class="text-center text-gray-black xl:text-[32px] text-[20px] font-semibold font-display">{t('forgotPassword')}</h2>
                        <p class="xl:text-center text-center text-[#636270] text-[16px] font-normal leading-[150%] font-display pb-6 xl:w-[408px] mx-auto">
                            {t('emailResetPrompt')}</p>
                        <div class="form">
                            <form onSubmit={handleSubmit} action="" class="">
                                {errorsMessage && <div className="alert alert-danger p-lg-1">{errorsMessage}</div>}
                                <div>
                                    <input type="email" placeholder="Email" name="email"
                                           class="pl-5 py-[17px] w-full bg-[#F0F2F3] rounded-lg focus:outline-none  focus:ring-2 focus:ring-accents font-display transition duration-300 ease-in-out pr-5"
                                           onChange={handleEmailChange} value={email}/>
                                </div>
                                <button type={"submit"} class="form_btn w-full">
                                    {t('continue')}
                                    <span>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 7.5L20.5 12M20.5 12L16 16.5M20.5 12H4.5" stroke="white" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                                </button>
                            </form>
                            <div
                                class="font-display font-normal text-[14px] leading-[110%] text-gray-black mt-6 text-center">
                                <a href="/login"
                                   class="text-dark-accents font-display font-medium text-[14px] leading-[110%]"> {t('login')}</a></div>
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
export default Forget_Password;