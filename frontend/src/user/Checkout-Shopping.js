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
import product from '../assets/images/all-img/product1.png'
import MiniChat from "./MiniChat";
import Header_Menu from "./menu/Header_Menu";
import Menu_Response from "./menu/Menu_Response";
import Header_Bottom from "./menu/Header_Bottom";
import Footer from "./footer/Footer";


const Checkout_Shopping = () => {
    const [isHeaderSticky, setHeaderSticky] = useState(false);
    const containerRef = useRef(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [isMenu, setIsMenu] = useState(false);

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

            <div>
                <div className="pt_b" style={{backgroundColor: "var(--bg-breadcum)"}}>
                    <div className="container px-3 md:px-5 xl:px-0">
                        <div className="flex items-center gap-1 py-[1.5px]">
                            <a href="#" className="text-[14px] font-normal leading-[110%] text-dark-gray">Home</a>

                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.125 5.25L10.875 9L7.125 12.75" stroke="#636270" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                            </svg>

                            <span
                                className="text-[14px] font-medium leading-[110%] font-display text-gray-black inline-block">Shop</span>
                        </div>

                    </div>
                </div>

                <div className="" style={{backgroundColor: "var(--bg-breadcum)"}}>
                    <div className="container py-20">
                        <div className="flex flex-wrap-tw lg:flex-nowrap items-start gap-6-t">

                            <div className="cart-total lg:w-2/3 w-full p-8">
                                <h2 className="text-start text-2xl text-[#272343] font-semibold mb-6 font-display">Thông tin thanh toán hoá đơn</h2>
                                <div>
                                    <form action="" className="">
                                        <div className="flex flex-col sm:flex-row gap-5 items-center mb-5">
                                            <div className=" w-full">
                                                <input type="text" placeholder="First Name"
                                                       className="input-box focus:outline-none focus:ring-2 focus:ring-accents font-display transition duration-300 ease-in-out"/>
                                            </div>

                                            <div className=" w-full">

                                                <input type="text" placeholder="Last Name"
                                                       className="input-box focus:outline-none  focus:ring-2 focus:ring-accents font-display transition duration-300 ease-in-out"/>
                                            </div>
                                        </div>
                                        <div className="w-full inline-flex mb-5">
                                            <textarea
                                                className="input-box focus:outline-none  focus:ring-2 focus:ring-accents font-display transition duration-300 ease-in-out"
                                                placeholder="Address" name="" cols="10" rows="5"></textarea>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-5 items-center mb-5">
                                            <div className=" w-full">
                                                <input type="text" placeholder="Phone"
                                                       className="input-box focus:outline-none  focus:ring-2 focus:ring-accents font-display transition duration-300 ease-in-out"/>
                                            </div>

                                            <div className=" w-full">

                                                <input type="text" placeholder="Email"
                                                       className="input-box focus:outline-none  focus:ring-2 focus:ring-accents font-display transition duration-300 ease-in-out"/>
                                            </div>
                                        </div>

                                        <hr className="my-8"/>


                                    </form>
                                </div>
                            </div>

                            <div className="cart-total p-8 h-auto lg:w-1/3 w-full">

                                <div className="flex justify-between items-center pb-4">
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <img src={product} alt=""/>
                                        </div>
                                        <div className="flex gap-[6px]">
                                            <p>Isolate Sofa Chair</p>
                                            <span>X</span>
                                            <p>1</p>
                                        </div>

                                    </div>
                                    <p className="text-gray-black text-[16px] leading-[120%] font-display font-medium">$145.00</p>

                                </div>

                                <div className="flex justify-between items-center pb-4">
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <img src={product} alt=""/>
                                        </div>
                                        <div className="flex gap-[6px]">
                                            <p>Isolate Sofa Chair</p>
                                            <span>X</span>
                                            <p>1</p>
                                        </div>

                                    </div>
                                    <p className="text-gray-black text-[16px] leading-[120%] font-display font-medium">$145.00</p>

                                </div>

                                <div className="flex justify-between items-center pb-4">
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <img src={product} alt=""/>
                                        </div>
                                        <div className="flex gap-[6px]">
                                            <p>Isolate Sofa Chair</p>
                                            <span>X</span>
                                            <p>1</p>
                                        </div>

                                    </div>
                                    <p className="text-gray-black text-[16px] leading-[120%] font-display font-medium">$145.00</p>

                                </div>


                                <hr/>


                                <div className="subtotal-info">

                                    <div className="flex justify-between items-center">
                                        <p className="common-hedding">Tổng tiền</p>
                                        <p className="text-gray-black text-[16px] leading-[120%] font-display font-medium">$1,435.00</p>
                                    </div>
                                    <div className="flex justify-between items-center pt-4">
                                        <p className="common-hedding">Giảm giá</p>
                                        <p className="text-gray-black text-[16px] leading-[120%] font-display font-medium">26%</p>
                                    </div>
                                    <div className="flex justify-between items-center pt-4">
                                        <p className="common-hedding">Phí vận chuyển</p>
                                        <p className="text-gray-black text-[16px] leading-[120%] font-display font-medium">Free</p>
                                    </div>
                                    <hr/>
                                    <div className="flex justify-between items-center">
                                        <p className="common-hedding">Tổng:</p>
                                        <p className="text-gray-black text-[22px] leading-[120%] font-display font-semibold">$1026.23</p>
                                    </div>



                                    <button
                                        class="w-full flex gap-3 items-center justify-center mt-5 bg-accents hover:bg-[#272343] rounded-lg transition-all duration-300 py-[16px] text-[18px] font-bold font-display leading-[110%] text-gray-white  ">
                                         Thanh toán
                                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.5 7.5L20 12M20 12L15.5 16.5M20 12H4" stroke="white" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/*footer*/}
            <Footer/>
            <MiniChat/>v
        </div>
    );
}
export default Checkout_Shopping;