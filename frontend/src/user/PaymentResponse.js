import 'select2/dist/js/select2';
import axios from "axios";
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
import {FaCheckCircle, FaTimesCircle} from "react-icons/fa";
import {updatePaymentMethod} from "../api/paymentApi";
import {updateCheckout} from "../api/CartApi";
import {set_errors_payment, setAddress, setEmailPayment, setFullName, setNumberPhone} from "../redux/paymentActions";


const PaymentResponse = () => {

    const [isHeaderSticky, setHeaderSticky] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [paymentStatus, setPaymentStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const id_payment = useSelector(state => state.paymentReducer.paymentId);
    const user_id = useSelector(state => state.appUser.user_id);
    useEffect(() => {

        const query = new URLSearchParams(location.search);
        const fetchPaymentStatus = async () => {
            const responseCode = query.get('vnp_ResponseCode');
            const transactionNo = query.get('vnp_TransactionNo');

            const amount = query.get('vnp_Amount');

            const response = await axios.get(`/api/payment/paymentResponse?vnp_ResponseCode=${responseCode}`);
            setIsLoading(true);

            try {

                const data = response.data;
                setPaymentStatus(data);
                if (data === "00") {
                    dispatch(updatePaymentMethod(id_payment))
                    dispatch(updateCheckout(user_id));
                    dispatch(setAddress(''));
                    dispatch(setFullName(''));
                    dispatch(setNumberPhone(''));
                    dispatch(setEmailPayment(''));
                    dispatch(set_errors_payment(''));

                }
            } catch (error) {
                console.error('Error fetching payment status:', error);
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPaymentStatus();
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
    }, [location.search]);


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
                            className="text-[14px] font-medium leading-[110%] font-display text-gray-black inline-block">Xác nhận</span>
                    </div>
                </div>
            </div>
            <div className=" " style={{backgroundColor: "var(--bg-breadcum)"}}>
                <div className="container py-20">
                    {paymentStatus === "00" &&
                        <div className="text-center">
                            <p style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <FaCheckCircle color="green" size="24px"/>   <p style={{margin: '6px'}}> Thanh toán
                                thành công </p>
                            </p>
                        </div>
                    }
                    {
                        paymentStatus !== "00" &&
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            <FaTimesCircle color="red" size="24px"/>
                            <p style={{margin: '6px'}}>Thanh toán không thành công</p>
                        </div>
                    }


                </div>
            </div>


            {/*footer*/}
            <Footer/>
            <MiniChat/>
        </div>
    );
}
export default PaymentResponse;