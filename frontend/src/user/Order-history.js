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
import Header_Menu from "./menu/Header_Menu";
import Menu_Response from "./menu/Menu_Response";
import Header_Bottom from "./menu/Header_Bottom";
import Footer from "./footer/Footer";

const Order_History= () => {
    const [isHeaderSticky, setHeaderSticky] = useState(false);
    const containerRef = useRef(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isUserOpen, setIsUserOpen] = useState(false);
    const [isMenu, setIsMenu] = useState(false);
    const [isCategory, setCategory] = useState(false);
    const [isUserMin, setIUserMin] = useState(false);
    const [isConfirmPassWord, setConfirmPass] =useState(false);


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
        <div className="font-display">
    
            <header className="font-display">
                <div id="header-sticky" className="">
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
          
            <section  style={{backgroundColor: "var(--bg-breadcum)"}}>
                <div className="container">

                    <div className="shopping-cart-wrapper pt-10 pb-20 flex items-start gap-6">

                        <div className="shopping-cart w-full" >
                            <div className="px-6 py-6 overflow-x-auto">
                                <table className="min-w-[1270px] w-full leading-normal">
                                    <thead>
                                    <tr>
                                        <th className="pb-6 border-b border-[#E1E3E6] text-left text-xs font-semibold text-[#272343] uppercase tracking-wider w-[160px]">
                                        Mã đơn hàng
                                        </th>
                                        <th className="pb-6 border-b border-[#E1E3E6] text-left text-xs font-semibold text-[#272343] uppercase tracking-wider w-[200px]">
                                            Ngày
                                        </th>
                                        <th className="pb-6 border-b border-[#E1E3E6] text-left text-xs font-semibold text-[#272343] uppercase tracking-wider w-[160px]">
                                            Tổng sản phẩm
                                        </th>
                                        <th className="pb-6 border-b border-[#E1E3E6] text-left text-xs font-semibold text-[#272343] uppercase tracking-wider w-[140px]">
                                            Giá tiền
                                        </th>
                                        <th className="pb-6 border-b border-[#E1E3E6] text-left text-xs font-semibold text-[#272343] uppercase tracking-wider w-[120px]">
                                            Trạng thái
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="py-6 text-sm">
                                            <span className="text-dark-accent stext-[14px] font-display leading-[120%] ">#2485</span>
                                        </td>
                                        <td className="py-6 text-sm">
                                            <p className="mb-0">02 April, 2021</p>
                                        </td>
                                        <td className="py-6 text-sm">
                                            <p>05</p>
                                        </td>
                                        <td className="py-6 text-sm">
                                            <p>$265.00</p>
                                        </td>
                                        <td className="py-6 text-sm">
                                            <button className="btn-warning px-3 py-2 text-[#F5813F] text-[14px] leading-[120%] font-display">Pending</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-6 text-sm">
                                            <span className="text-dark-accent stext-[14px] font-display leading-[120%] ">#8901</span>
                                        </td>
                                        <td className="py-6 text-sm">
                                            <p className="mb-0">29 May, 2021</p>
                                        </td>
                                        <td className="py-6 text-sm">
                                            <p>01</p>
                                        </td>
                                        <td className="py-6 text-sm">
                                            <p>$265.00</p>
                                        </td>
                                        <td className="py-6 text-sm">
                                            <button className="btn-success2 px-3 py-2 text-[#01AD5A] text-[14px] leading-[120%] font-display">Completed</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-6 text-sm">
                                            <span className="text-dark-accent stext-[14px] font-display leading-[120%] ">#2597</span>
                                        </td>
                                        <td className="py-6 text-sm">
                                            <p className="mb-0">16 May, 2021</p>
                                        </td>
                                        <td className="py-6 text-sm">
                                            <p>01</p>
                                        </td>
                                        <td className="py-6 text-sm">
                                            <p>$265.00</p>
                                        </td>
                                        <td className="py-6 text-sm">
                                            <button className="btn-success2 px-3 py-2 text-[#01AD5A] text-[14px] leading-[120%] font-display">Completed</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-6 text-sm">
                                            <span className="text-dark-accent stext-[14px] font-display leading-[120%] ">#2485</span>
                                        </td>
                                        <td className="py-6 text-sm">
                                            <p className="mb-0">21 February, 2021</p>
                                        </td>
                                        <td className="py-6 text-sm">
                                            <p>02</p>
                                        </td>
                                        <td className="py-6 text-sm">
                                            <p>$265.00</p>
                                        </td>
                                        <td className="py-6 text-sm">
                                            <button className="btn-success2 px-3 py-2 text-[#01AD5A] text-[14px] leading-[120%] font-display">Completed</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-6 text-sm">
                                            <span className="text-dark-accent stext-[14px] font-display leading-[120%] ">#2485</span>
                                        </td>
                                        <td className="py-6 text-sm">
                                            <p className="mb-0">15 January, 2021</p>
                                        </td>
                                        <td className="py-6 text-sm">
                                            <p>01</p>
                                        </td>
                                        <td className="py-6 text-sm">
                                            <p>$265.00</p>
                                        </td>
                                        <td className="py-6 text-sm">
                                            <button className="btn-success2 px-3 py-2 text-[#01AD5A] text-[14px] leading-[120%] font-display">Completed</button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            {/*footer*/}
            <Footer/>
            <MiniChat/>
        </div>
    );
}
export default Order_History;