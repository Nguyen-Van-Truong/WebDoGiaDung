import React, {useEffect, useRef, useState} from "react";
import Swiper from "swiper";
import mixitup from "mixitup";
import $ from "jquery";
import f_product_4 from '../assets/images/all-img/f-product-04.png'
import product1 from '../assets/images/all-img/f-product-01.png';
import product3 from '../assets/images/all-img/f-product-03.png';
import product2 from '../assets/images/all-img/f-product-02.png'
import '../assets/plugins/css/swipper.css'
import '../assets/plugins/css/select2.css'
import '../css/tailwind.css'
import '../css/styles.css'
import '../css/responsive.css'
import {Link} from "react-router-dom";
import cart1 from "../assets/images/all-img/cart-01.png";

const Product_details = () => {
    const containerRef = useRef(null);
    const [isHeaderSticky, setHeaderSticky] = useState(false);
    const [count, setCount] = useState(1);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isUserOpen, setIsUserOpen] = useState(false);
    const [isMenu, setIsMenu] = useState(false);
    const [isCategory, setCategory] = useState(false);
    const [isUserMin, setIUserMin] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const handleMinusClick = () => {
        const newCount = count - 1 < 1 ? 1 : count - 1;
        setCount(newCount);
    };
    const userOpen = () => {
        setIsUserOpen(!isUserOpen);
    }
    const handlePlusClick = () => {
        setCount(count + 1);
    };


    const handClickMenu = () => {
        setIsMenu(true, () => {
            if (isMenu) {
                setIsMenu(false);
            }
        });
        setIUserMin(false);
        setCategory(false);
    };
    const handClickUserMin = () => {
        setIUserMin(!isUserMin);
    }
    const handCategory = () => {
        setIsMenu(false);
        setCategory(true, () => {
            if (setCategory) {
                setCategory(false);
            }
        });

    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
        setIsMenu(!isMenu);
    };
    const handClickUser = () => {
        setIsUserOpen(!isUserOpen);
    }
    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
        setIsMenu(true, () => {
            if (isMenu) {
                setIsMenu(false);
            }
        });

        setIUserMin(false);
        setCategory(false);

    };

    const handleCloseClick = () => {


        setMenuOpen(!menuOpen);
        setIsMenu(true, () => {

            if (isMenu) {

                setIsMenu(false);
            }
        });
        const cartOpen = () => {
            setIsCartOpen(!isCartOpen);
        }
    };
    const cartOpen = () => {
        setIsCartOpen(!isCartOpen);
    }
    useEffect(() => {
        const swiperBanner = new Swiper('.bannerSwiper', {
            cssMode: true,
            loop: true,
            speed: 1000,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            mousewheel: true,
            keyboard: true,
        });

        const swiperBanner2 = new Swiper(".brandSwiper", {
            slidesPerView: 2,
            spaceBetween: 12,
            loop: true,
            mousewheel: true,
            breakpoints: {
                375: {
                    slidesPerView: 3,
                    spaceBetween: 12,
                },
                640: {
                    slidesPerView: 4,
                    spaceBetween: 12,
                },
                768: {
                    slidesPerView: 5,
                    spaceBetween: 18,
                },
                1024: {
                    slidesPerView: 6,
                    spaceBetween: 24,
                },
                1500: {
                    slidesPerView: 6,
                    spaceBetween: 106,
                }
            },
        });
        const swiper3 = new Swiper(".topCategoriesSwiper", {
            slidesPerView: 1,
            spaceBetween: 12,
            centeredSlides: true,
            loop: true,
            navigation: {
                nextEl: ".categoriesSwiper-button-next",
                prevEl: ".categoriesSwiper-button-prev",
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 12,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 18,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
            },
        });

        const swiper4 = new Swiper(".featureSwiper", {
            slidesPerView: 1,
            spaceBetween: 24,
            loop: true,
            navigation: {
                nextEl: ".featureSwiper-button-next",
                prevEl: ".featureSwiper-button-prev",
            },
            breakpoints: {
                480: {
                    slidesPerView: 2,
                    spaceBetween: 12,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 18,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                },
            },
        });

        const swiper5 = new Swiper(".recentSwiper", {
            slidesPerView: 1,
            spaceBetween: 24,
            loop: true,
            navigation: {
                nextEl: ".recentSwiper-button-next",
                prevEl: ".recentSwiper-button-prev",
            },
            breakpoints: {
                480: {
                    slidesPerView: 2,
                    spaceBetween: 12,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 18,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                },
            },
        });


//testimonials Slider

        const swiper6 = new Swiper(".testimonialSwiper", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            navigation: {
                nextEl: ".testimonials-button-next",
                prevEl: ".testimonials-button-prev",
            },
            breakpoints: {
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
            },
        });


        // Initialize mixitup
        if (containerRef.current) {
            const mixer = mixitup(containerRef.current, {
                animation: {
                    animateResizeContainer: true
                },
                load: {
                    filter: '.all'
                }
            });

            // Clean up mixitup when the component unmounts
            return () => mixer.destroy();
        }
        $('.custom-select').select2();
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
                                <p className="sm:flex gap-2 items-center text-[13px] leading-[110%] text-white opacity-70 hidden">
                            <span>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3334 4.5L6.00002 11.8333L2.66669 8.5" stroke="white" stroke-width="1.5"
                                          stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                                    <span>Free shipping on all orders over $50</span>
                                </p>
                                <div>
                                    <ul className="flex gap-6 items-center">
                                        <li className="inline-flex items-center text-white-50 justify-center relative language">
                                            <select className="custom-select" name="state">
                                                <option value="AL">Eng</option>
                                                <option value="WY">Bangla</option>
                                            </select>
                                        </li>
                                        <li className="inline-flex items-center justify-center">
                                            <a href="#"
                                               className="inline-flex gap-2 items-center text-white opacity-70 text-[13px] leading-[130%]">Faqs</a>
                                        </li>
                                        <li className="inline-flex items-center justify-center">
                                            <a href="#"
                                               className="inline-flex gap-2 items-center text-white opacity-70 text-[13px] leading-[130%]">
                                        <span>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="0.7" clip-path="url(#clip0_906_1673)">
                                                    <path
                                                        d="M7.99992 14.6667C11.6818 14.6667 14.6666 11.6819 14.6666 8C14.6666 4.3181 11.6818 1.33333 7.99992 1.33333C4.31802 1.33333 1.33325 4.3181 1.33325 8C1.33325 11.6819 4.31802 14.6667 7.99992 14.6667Z"
                                                        stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                                    <path d="M8 5.33333V8" stroke="white" stroke-linecap="round"
                                                          stroke-linejoin="round"/>
                                                    <path d="M8 10.6667H8.00615" stroke="white" stroke-linecap="round"
                                                          stroke-linejoin="round"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_906_1673">
                                                        <rect width="16" height="16" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                                <span>Need Help</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-header bg-grayscales-500 lg:border-none border-b border-grayscales-700">
                        <div className="container px-3 md:px-5 xl:px-0">
                            <div className="flex justify-between items-center py-5">
                                <div>
                                    <a href="index.html">
                                        <img src="./assets/images/all-img/logo.png" alt=""/>
                                    </a>
                                </div>
                                <div className="lg:max-w-[413px] lg:block hidden w-full">
                                    <div className="relative">
                                        <input type="text" id="search" placeholder="search here..."
                                               className="block w-full bg-white focus:outline-none border-0 px-4 py-3 rounded-lg focus:ring-2 ring-[#029FAE]"/>
                                        <label htmlFor="search" className="absolute right-4 top-3">
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
                                                <span
                                                    className="bg-dark-accents text-white rounded-full py-[3px] px-[9px] ml-1 inline-flex justify-center items-center text-[10px] leading-[100%]">2</span>
                                            </a>
                                            <div className="cart-content">
                                                {isCartOpen && (
                                                    <ul className="p-6"
                                                        style={{display: isCartOpen ? 'block' : 'none'}}>

                                                        <li className="pb-4">
                                                            <div className="flex items-center justify-between">
                                                                <div className="flex items-center gap-1">
                                                                    <div>
                                                                        <img src={cart1} alt=""/>
                                                                    </div>
                                                                    <div className="px-2">
                                                                        <h2 className="text-gray-black"><span>Isolate Sofa Chair</span>
                                                                            <span className="text-[#636270]">x5</span>
                                                                        </h2>
                                                                        <p className="text-gray-black font-semibold mb-0">$150.00</p>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <button
                                                                        className="hover:bg-[#F0F2F3] bg-transparent p-2 hover:text-gray-black rounded-full text-[#9A9CAA] transition-all duration-500">
                                                                        <svg width="28" height="28" viewBox="0 0 28 28"
                                                                             fill="none"
                                                                             xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M10 10L14 14M14 14L18 10M14 14L10 18M14 14L18 18"
                                                                                stroke="currentColor" stroke-width="1.5"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"/>
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li className="py-4">
                                                            <div className="flex items-center justify-between">
                                                                <div className="flex items-center gap-1">
                                                                    <div>
                                                                        <img src={cart1} alt=""/>
                                                                    </div>
                                                                    <div className="px-2">
                                                                        <h2 className="text-gray-black"><span>Isolate Sofa Chair</span>
                                                                            <span className="text-[#636270]">x5</span>
                                                                        </h2>
                                                                        <p className="text-gray-black font-semibold mb-0">$150.00</p>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <button
                                                                        className="hover:bg-[#F0F2F3] bg-transparent p-2 hover:text-gray-black rounded-full text-[#9A9CAA] transition-all duration-500">
                                                                        <svg width="28" height="28" viewBox="0 0 28 28"
                                                                             fill="none"
                                                                             xmlns="http://www.w3.org/2000/svg">
                                                                            <path
                                                                                d="M10 10L14 14M14 14L18 10M14 14L10 18M14 14L18 18"
                                                                                stroke="currentColor" stroke-width="1.5"
                                                                                stroke-linecap="round"
                                                                                stroke-linejoin="round"/>
                                                                        </svg>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <div className="flex justify-between items-center py-2 mb-4">
                                                            <p className="text-[#636270] text-lg">2 Products</p>
                                                            <p className="text-gray-black text-xl font-medium">$250.00</p>
                                                        </div>
                                                        <div className="flex justify-between items-center">
                                                            <a href="shopping-cart.html" className="btn-transparent">View
                                                                Cart</a>
                                                            <a href="checkout-shopping.html"
                                                               className="btn-primary">Checkout</a>
                                                        </div>

                                                    </ul>
                                                )}

                                            </div>
                                        </li>
                                        <li className="inline-flex items-center justify-center">
                                            <a href="#"
                                               className="bg-white text-gray-black hover:text-[#007580] rounded-lg p-[11px]">
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                          d="M2.63262 10.6315C1.64903 7.56067 2.79762 4.05075 6.02245 3.01217C6.85867 2.74459 7.74676 2.68086 8.61262 2.82629C9.47849 2.97172 10.297 3.32208 10.9999 3.84817C12.3337 2.81692 14.2743 2.46858 15.9683 3.01217C19.1922 4.05075 20.349 7.56067 19.3664 10.6315C17.8355 15.499 10.9999 19.2482 10.9999 19.2482C10.9999 19.2482 4.21478 15.5558 2.63262 10.6315V10.6315Z"
                                                          stroke="currentColor" stroke-width="1.5"
                                                          stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </a>
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
                                            {isUserOpen && (
                                                <div className="profile-content">
                                                    <ul className="py-3"
                                                        style={{display: isUserOpen ? 'block' : 'none'}}>
                                                        <div className="px-3 shadow-[0px_1px_0px_#E1E3E6]">
                                                            <li>
                                                                <Link to="/login">Đăng nhập</Link>
                                                            </li>
                                                            <li>
                                                                <Link to={"/register"}>Đăng kí</Link>
                                                            </li>
                                                        </div>
                                                        <div className="px-3 shadow-[0px_1px_0px_#E1E3E6]">
                                                            <li>
                                                                <a href="account-setting.html">Cài đặt tài khoản</a>
                                                            </li>
                                                            <li>
                                                                <a href="order-history.html">Lịch sử đơn hàng</a>
                                                            </li>
                                                        </div>
                                                        <div className="px-3 shadow-[0px_1px_0px_#E1E3E6]">
                                                            <li>
                                                                <a href="wishlist.html">Yêu thích</a>
                                                            </li>
                                                            <li>
                                                                <a href="shopping-cart.html">Giỏ hàng</a>
                                                            </li>
                                                        </div>
                                                        <div className="px-3">
                                                            <li>
                                                                <a href="#">Đăng xuất</a>
                                                            </li>
                                                        </div>
                                                    </ul>
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
                </div>
                <div className="bottom-header bg-white shadow-[0px_1px_0px_#E1E3E6] relative z-30 hidden lg:block">
                    <div className="container px-3 md:px-5 xl:px-0">
                        <div className="py-3.5 flex justify-between items-center">
                            <div className="flex gap-8 items-center">
                                <div className="relative">
                                    <button onClick={toggleDropdown}
                                            className="max-h-12 inline-flex items-center justify-center gap-4 py-3.5 px-5 border border-grayscales-700 rounded-md text-gray-black text-sm leading-4 font-medium font-display custom-dropdown">
        <span className="text-gray-black inline-flex">
          {/* SVG remains unchanged */}
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 2.5H0V0.5H18V2.5Z" fill="currentColor"/>
            <path d="M18 8.5H0V6.5H18V8.5Z" fill="currentColor"/>
            <path d="M18 14.5H0V12.5H18V14.5Z" fill="currentColor"/>
          </svg>
        </span>
                                        <span className="text-gray-black inline-flex">Danh mục</span>
                                    </button>
                                    {isDropdownOpen && (
                                        <div className="dropdown-content">
                                            <ul className="p-3" style={{display: isDropdownOpen ? 'block' : 'none'}}>
                                                {/* List items remain unchanged */}
                                                <li><a href="#">Bàn ghế</a></li>
                                                <li><a href="#">Bếp điện từ</a></li>
                                                <li><a href="#">Nồi cơm</a></li>
                                                <li><a href="#">Tủ lạnh</a></li>
                                                <li><a href="#">Quạt</a></li>
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                <ul className="lg:flex gap-8 items-center hidden main-menu">
                                    <li>
                                        <Link to={"/"}>Trang chủ</Link>
                                    </li>
                                    <li>
                                        <Link to={"/products"}>Shop</Link>

                                    </li>
                                    <li>
                                        <a href="product-details.html">Sản phẩm</a>
                                    </li>

                                </ul>
                            </div>
                            <div>
                                <p className="text-grayscales-900 inline-flex gap-2 items-center text-sm font-display">
                                    <span>Contact:</span><span
                                    className="text-secondary font-medium">(808) 555-0111</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={menuOpen ? 'nav-menu open' : 'nav-menu'} id="nav-menu">
                    {menuOpen && (
                        <div className="flex justify-between  items-center px-3 py-4 mb-4">
                            <div>
                                <a href="#">
                                    <img src="./assets/images/all-img/logo-sm.png" alt=""/>
                                </a>
                            </div>
                            <ul className="flex items-center gap-3">
                                <li>
                                    <a href="#" className="inline-flex gap-2 bg-white rounded-lg p-[11px] relative">
                            <span>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.52087 2.97916L4.42754 3.30916L5.31029 13.8261C5.3442 14.2399 5.5329 14.6258 5.83873 14.9066C6.14457 15.1875 6.54506 15.3427 6.96029 15.3413H16.9611C17.3587 15.3418 17.7431 15.1986 18.0436 14.9383C18.344 14.6779 18.5404 14.3178 18.5965 13.9242L19.4673 7.91266C19.4905 7.75279 19.482 7.58991 19.4422 7.43333C19.4024 7.27675 19.3322 7.12955 19.2354 7.00015C19.1387 6.87074 19.0175 6.76167 18.8786 6.67917C18.7397 6.59667 18.5859 6.54235 18.426 6.51933C18.3673 6.51291 4.73371 6.50833 4.73371 6.50833"
                                        stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                    <path d="M12.948 9.89542H15.4899" stroke="#272343" stroke-width="1.5"
                                          stroke-linecap="round" stroke-linejoin="round"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M6.55786 18.5194C6.62508 18.5165 6.69219 18.5273 6.75515 18.551C6.81811 18.5748 6.87562 18.611 6.9242 18.6575C6.97279 18.7041 7.01145 18.76 7.03787 18.8219C7.06428 18.8837 7.0779 18.9503 7.0779 19.0176C7.0779 19.0849 7.06428 19.1515 7.03787 19.2134C7.01145 19.2753 6.97279 19.3312 6.9242 19.3777C6.87562 19.4243 6.81811 19.4605 6.75515 19.4842C6.69219 19.508 6.62508 19.5187 6.55786 19.5158C6.42942 19.5103 6.30808 19.4554 6.21914 19.3626C6.13021 19.2698 6.08057 19.1462 6.08057 19.0176C6.08057 18.8891 6.13021 18.7655 6.21914 18.6726C6.30808 18.5798 6.42942 18.5249 6.55786 18.5194Z"
                                          fill="#272343" stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M16.8988 18.5194C17.0312 18.5194 17.1583 18.5721 17.252 18.6657C17.3457 18.7594 17.3983 18.8865 17.3983 19.019C17.3983 19.1515 17.3457 19.2786 17.252 19.3723C17.1583 19.4659 17.0312 19.5186 16.8988 19.5186C16.7663 19.5186 16.6392 19.4659 16.5455 19.3723C16.4518 19.2786 16.3992 19.1515 16.3992 19.019C16.3992 18.8865 16.4518 18.7594 16.5455 18.6657C16.6392 18.5721 16.7663 18.5194 16.8988 18.5194Z"
                                          fill="#272343" stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                </svg>
                            </span>
                                        <span
                                            className="bg-dark-accents absolute -top-1 right-0 text-white rounded-full px-2 py-1.5 inline-flex justify-center items-center text-[10px] leading-[100%]">2</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="bg-white text-gray-black flex hover:text-[#007580] rounded-lg p-[11px]">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M2.63262 10.6315C1.64903 7.56067 2.79762 4.05075 6.02245 3.01217C6.85867 2.74459 7.74676 2.68086 8.61262 2.82629C9.47849 2.97172 10.297 3.32208 10.9999 3.84817C12.3337 2.81692 14.2743 2.46858 15.9683 3.01217C19.1922 4.05075 20.349 7.56067 19.3664 10.6315C17.8355 15.499 10.9999 19.2482 10.9999 19.2482C10.9999 19.2482 4.21478 15.5558 2.63262 10.6315V10.6315Z"
                                                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                  stroke-linejoin="round"/>
                                        </svg>
                                    </a>
                                </li>
                                <li className="relative">
                                    <button
                                        className="bg-white text-gray-black hover:text-[#007580] rounded-lg p-[11px] user-profile"
                                        onClick={handClickUserMin}>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M10.9862 14.0672C7.44053 14.0672 4.4137 14.6034 4.4137 16.7503C4.4137 18.8971 7.42128 19.4526 10.9862 19.4526C14.5309 19.4526 17.5587 18.9154 17.5587 16.7695C17.5587 14.6236 14.5502 14.0672 10.9862 14.0672V14.0672Z"
                                                  stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                  stroke-linejoin="round"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M10.9862 11.0055C11.8195 11.0055 12.634 10.7584 13.3268 10.2955C14.0197 9.83255 14.5597 9.17457 14.8785 8.40475C15.1974 7.63492 15.2808 6.78783 15.1183 5.97058C14.9557 5.15334 14.5545 4.40266 13.9653 3.81346C13.3761 3.22426 12.6254 2.82301 11.8081 2.66045C10.9909 2.49789 10.1438 2.58132 9.37397 2.9002C8.60415 3.21907 7.94617 3.75906 7.48324 4.45188C7.02031 5.14471 6.77322 5.95925 6.77322 6.7925C6.76932 7.90581 7.20779 8.97508 7.99218 9.76515C8.77657 10.5552 9.84266 11.0014 10.956 11.0055H10.9862Z"
                                                  stroke="currentColor" stroke-width="1.429" stroke-linecap="round"
                                                  stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                    <div className="profile-content">
                                        {(isUserMin &&
                                            <ul style={{display: isUserMin ? 'block' : 'none'}}>
                                                <li>
                                                    <a href="#">Đăng nhập</a>
                                                </li>
                                                <li>
                                                    <a href="#">Đăng kí </a>
                                                </li>

                                            </ul>
                                        )}
                                    </div>
                                </li>
                                <li>
                        <span
                            className="hamburger-btn-close bg-[#F7F7F9] text-black w-[44px] h-[44px] rounded-full flex items-center justify-center"
                            id="hamburger-btn-close" onClick={handleCloseClick}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 1L1 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round"></path>
                                <path d="M1 1L11 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round"></path>
                            </svg>
                        </span>
                                </li>
                            </ul>
                        </div>
                    )}

                    <div className="px-3 mb-4">
                        <div className="lg:max-w-[413px] w-full">
                            <div className="relative">
                                <input type="text" placeholder="search here..."
                                       className="block w-full bg-grayscales-500 focus:outline-none border-0 px-4 py-3 rounded-lg"/>
                                <span className="absolute right-4 top-3">
                            <svg width="23" height="22" viewBox="0 0 23 22" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.5833 17.4167C14.6334 17.4167 17.9167 14.1334 17.9167 10.0833C17.9167 6.03325 14.6334 2.75 10.5833 2.75C6.53325 2.75 3.25 6.03325 3.25 10.0833C3.25 14.1334 6.53325 17.4167 10.5833 17.4167Z"
                                    stroke="#272343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M19.75 19.25L15.7625 15.2625" stroke="#272343" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <nav className="tabs flex flex-row">
                            <button data-target="panel-1" onClick={handClickMenu}
                                    className={isMenu ? 'tab rounded-none w-1/2 text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500 active' : 'tab rounded-none w-1/2 text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500'}>
                                Menu
                            </button>
                            <button data-target="panel-2" onClick={handCategory}
                                    className={isCategory ? 'tab rounded-none w-1/2 text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500 active' : 'tab rounded-none w-1/2 text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500'}>
                                Danh mục
                            </button>
                        </nav>
                    </div>

                    <div id="panels">
                        {(isMenu &&
                            <div className={isMenu ? 'panel-1 tab-content active' : 'panel-1 tab-content py-5'}>
                                <ul className="flex flex-col items-center">
                                    <li className="w-full block">
                                        <a href="" className="border-b border-[#029FAE] block px-3 py-2">Trang chủ</a>
                                    </li>
                                    <li className="w-full block">
                                        <a href="" className="border-b border-[#029FAE] block px-3 py-2">Shop</a>
                                    </li>
                                    <li className="w-full block">
                                        <a href="" className="border-b border-[#029FAE] block px-3 py-2">Sản phẩm</a>
                                    </li>

                                </ul>
                            </div>
                        )}
                        {(isCategory &&
                            <div className={isCategory ? 'panel-2 tab-content active' : 'panel-2 tab-content py-5'}>
                                <ul>
                                    <li>
                                        <a href="#" className="border-b border-[#029FAE] block px-3 py-2">Bàn ghế</a>
                                    </li>
                                    <li>
                                        <a href="#" className="border-b border-[#029FAE] block px-3 py-2">Bếp điện
                                            từ</a>
                                    </li>
                                    <li>
                                        <a href="#" className="border-b border-[#029FAE] block px-3 py-2">Nồi cơm</a>
                                    </li>
                                    <li>
                                        <a href="#" className="border-b border-[#029FAE] block px-3 py-2">Tủ lạnh</a>
                                    </li>
                                    <li>
                                        <a href="#" className="border-b border-[#029FAE] block px-3 py-2">Quạt</a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                <div className={menuOpen ? 'overlay open' : 'overlay'} id="overlay"></div>
            </header>


            <div className="pt_b" style={{backgroundColor: "var(--bg-breadcum)"}}>>
                <div className="container px-3 md:px-5 xl:px-0">
                    <div className="flex items-center gap-1 py-[1.5px]">
                        <a href="index.html" className="text-[14px] font-normal leading-[110%] text-dark-gray">Trang
                            chủ</a>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.125 5.25L10.875 9L7.125 12.75" stroke="#636270" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>
                        <a href="products.html"
                           className="text-[14px] font-normal leading-[110%] text-dark-gray">Shop</a>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.125 5.25L10.875 9L7.125 12.75" stroke="#636270" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>
                        <span
                            className="text-[14px] font-medium leading-[110%] font-display text-gray-black inline-block">Isolate Sofa Chair</span>
                    </div>

                    <h2 className="pt-[13.5px] text-2xl font-semibold text-gray-black font-display">Chi tiết sản
                        phẩm</h2>
                </div>
            </div>

            <div className="" style={{backgroundColor: "var(--bg-breadcum)"}}> >
                <div className="container px-3 md:px-5 xl:px-0">
                    <div className="product-details-wrap pt-10">
                        <div className="left-side xl:w-7/12 w-full">
                            <div className="gallery-container mb-[50px]">

                                <div className="swiper-container gallery-main">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <img src={product1} alt="Slide 01"/>
                                        </div>
                                        <div className="swiper-slide">
                                            <img src={product2} alt="Slide 01"/>
                                        </div>
                                        <div className="swiper-slide">
                                            <img src={product3} alt="Slide 01"/>
                                        </div>
                                        <div className="swiper-slide">
                                            <img src={f_product_4} alt="Slide 01"/>
                                        </div>
                                        <div className="swiper-slide">
                                            <img src={product2} alt="Slide 01"/>
                                        </div>
                                        <div className="swiper-slide">
                                            <img src={product3} alt="Slide 01"/>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="single-product-desc">
                                <h2 className="text-[#272343] text-2xl font-semibold mb-3.5">Product Descriptions</h2>
                                <p className="text-[#636270] text-base mb-3">Super Stretchy form fit fabric: This super
                                    stretchable sofa slipcover will ensure your three-seater sofa is completely covered.
                                    Our slipcovers are designed and ready-made to fit a variety of sofa sizes, stretches
                                    to 66” with seat width up to 90”</p>

                                <p className="text-[#636270] text-base mb-3">Transform your old sofa or protect your new
                                    one: PureFit sofa furniture protectors not only protects your sofa furniture daily
                                    wears and tears, kids, scratches from pets, dogs or accidental spills, it also
                                    transforms an old, worn out couch into the stunning centerpiece of your room</p>

                                <p className="text-[#636270] text-base mb-3">The sofa cover that stays in place:
                                    Featuring non skid elastic bottom and premium non slip foam anchors, our sofa
                                    furniture slipcovers are among the only ones in the market to guarantee they will
                                    stay tight with no snag, no wrinkling, shifting or slipping even after sitting or
                                    taking a nap on it</p>

                                <p className="text-[#636270] text-base mb-3">Easy to install/put on: You'll be done in
                                    no time! Just slip it on, Tuck any extra fabric and insert the non slip foam anchors
                                    into the gap/crease between the back and sitting cushions for a seamless look and
                                    VOILA! Use our picture guidelines to ensure a good fit (Installation Instructions
                                    Included)</p>

                                <p className="text-[#636270] text-base">Easy care & 6 month warranty: Machine Washable
                                    Slipcover, wash at or below 30 degrees Celsius, do not bleach, do not iron. We stand
                                    behind all of our high quality products so we offer a 6 months No Question Asked on
                                    all our sofa covers. Please contact us (through Amazon if past the standard return
                                    window) and we will be pleased to assist you.</p>
                            </div>
                        </div>
                        <div className="right-side xl:px-8 px-0 xl:w-5/12 w-full">
                            <h2 className="text-[#272343] pro-title font-semibold mb-3 capitalize">isolate sofa
                                Chair</h2>
                            <div className="flex items-center gap-2.5 mb-6">
                                <p className="flex gap-1.5 items-center">
                                    <span className="text-[#272343] text-2xl">$250</span>
                                    <span className="text-[#272343] opacity-30 text-xl line-through">$500</span>
                                </p>
                                <span
                                    className="bg-[#F5813F] px-2.5 py-1.5 rounded-[4px] text-white text-sm">50% Off</span>
                            </div>
                            <p className="text-[#636270] text-base mb-6">
                                As you run your fingers across the surface of this golden oak colored vanity set, you’ll
                                understand why it stands out from the rest; from the table to the legs.
                            </p>
                            <div className="mb-6">
                                <h2 className="text-[#9A9CAA] text-sm font-medium mb-3">Color</h2>
                                <ul className="flex gap-[30px] items-center p-0 m-0">
                                    <li>
                                        <label htmlFor="black"
                                               className="inline-flex gap-2 items-center custom-radio cursor-pointer">
                                            <input type="radio" id="black" checked name="color" className="hidden"/>
                                            <span className="bg-[#1E1E1E] w-8 h-8 rounded-full custom-bg m-1"></span>
                                            <span className="text-base text-[#636270]">Black</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label htmlFor="brown"
                                               className="inline-flex gap-2 items-center custom-radio cursor-pointer">
                                            <input type="radio" id="brown" name="color" className="hidden"/>
                                            <span className="bg-[#B26F3F] w-8 h-8 rounded-full custom-bg m-1"></span>
                                            <span className="text-base text-[#636270]">Brown</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label htmlFor="orange"
                                               className="inline-flex gap-2 items-center custom-radio cursor-pointer">
                                            <input type="radio" id="orange" name="color" className="hidden"/>
                                            <span className="bg-[#F7AD94] w-8 h-8 rounded-full custom-bg m-1"></span>
                                            <span className="text-base text-[#636270]">Peach</span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-6">
                                <ul className="p-0 m-0">
                                    <li>
                                        <p className="text-[15px] inline-flex gap-2 items-center">
                                            <span className="text-[#9A9CAA]">Material:</span><span
                                            className="text-[#636270] font-medium">Polyester, Fabric</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-[15px] inline-flex gap-2 items-center">
                                            <span className="text-[#9A9CAA]">Brand:</span><span
                                            className="text-[#636270] font-medium">Purefit</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-[15px] inline-flex gap-2 items-center">
                                            <span className="text-[#9A9CAA]">Category:</span><span
                                            className="text-[#636270] font-medium">Wing Chair</span>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-[15px] inline-flex gap-2 items-center">
                                            <span className="text-[#9A9CAA]">Tag:</span><span
                                            className="text-[#636270] font-medium">minimalistic, Sofa, Living room</span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-wrap lg:flex-nowrap items-center gap-3 mb-6">
                                <div
                                    className="border inline-flex justify-around items-center h-[52px] w-[140px] xl:w-[343px] add-to-cart-btn border-[#D6D9DD] rounded-lg">
                                    <span
                                        className="w-5 h-5 inline-flex justify-center items-center text-[#9A9CAA] pl-[14px] select-none minus"
                                        id="minus" onClick={handleMinusClick}>-</span>
                                    <input type="text" className="text-[#272343] text-base plus_mines_input select-none"
                                           value={count}/>
                                    <span
                                        className="w-5 h-5 inline-flex justify-center items-center text-[#9A9CAA] pr-[14px] select-none plus "
                                        id="plus" onClick={handlePlusClick}>+</span>
                                </div>
                                <div className="flex gap-3 w-full">
                                    <div className="xl:w-[343px] add-to-cart-btn">
                                        <button
                                            className="inline-flex gap-3 py-3.5 bg-[#029FAE] hover:bg-[#272343] transition-all duration-300 rounded-lg px-4 xl:w-[343px] w-full items-center justify-center">
                                    <span className="text-white text-base">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2.75 3.25L4.83 3.61L5.793 15.083C5.82999 15.5345 6.03584 15.9554 6.36948 16.2618C6.70312 16.5682 7.14002 16.7375 7.593 16.736H18.503C18.9367 16.7365 19.3561 16.5803 19.6838 16.2963C20.0116 16.0122 20.2258 15.6194 20.287 15.19L21.237 8.632C21.2623 8.45759 21.253 8.2799 21.2096 8.10909C21.1662 7.93828 21.0896 7.77769 20.9841 7.63653C20.8786 7.49536 20.7463 7.37637 20.5947 7.28637C20.4432 7.19636 20.2754 7.13711 20.101 7.112C20.037 7.105 5.164 7.1 5.164 7.1"
                                                stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round"/>
                                            <path d="M14.125 10.795H16.898" stroke="white" stroke-width="1.5"
                                                  stroke-linecap="round" stroke-linejoin="round"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M7.15398 20.203C7.22732 20.1999 7.30053 20.2116 7.36921 20.2375C7.4379 20.2634 7.50063 20.3029 7.55363 20.3537C7.60664 20.4045 7.64881 20.4655 7.67763 20.533C7.70645 20.6005 7.7213 20.6731 7.7213 20.7465C7.7213 20.8199 7.70645 20.8926 7.67763 20.9601C7.64881 21.0276 7.60664 21.0886 7.55363 21.1393C7.50063 21.1901 7.4379 21.2296 7.36921 21.2555C7.30053 21.2814 7.22732 21.2932 7.15398 21.29C7.01387 21.284 6.88149 21.2241 6.78448 21.1228C6.68746 21.0216 6.6333 20.8868 6.6333 20.7465C6.6333 20.6063 6.68746 20.4715 6.78448 20.3702C6.88149 20.2689 7.01387 20.209 7.15398 20.203Z"
                                                  fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                  stroke-linejoin="round"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M18.4351 20.203C18.5797 20.203 18.7183 20.2604 18.8205 20.3626C18.9227 20.4648 18.9801 20.6035 18.9801 20.748C18.9801 20.8925 18.9227 21.0312 18.8205 21.1334C18.7183 21.2356 18.5797 21.293 18.4351 21.293C18.2906 21.293 18.152 21.2356 18.0498 21.1334C17.9476 21.0312 17.8901 20.8925 17.8901 20.748C17.8901 20.6035 17.9476 20.4648 18.0498 20.3626C18.152 20.2604 18.2906 20.203 18.4351 20.203Z"
                                                  fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                  stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                            <span className="text-white text-base">Add To Cart</span>
                                        </button>
                                    </div>
                                    <div>
                                        <button
                                            className="h-[52px] w-[52px] border border-[#D6D9DD] rounded-lg inline-flex justify-center items-center">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M2.87199 11.598C1.79899 8.24799 3.05199 4.419 6.56999 3.286C7.48224 2.9941 8.45106 2.92457 9.39563 3.08322C10.3402 3.24187 11.2332 3.62409 12 4.198C13.455 3.073 15.572 2.693 17.42 3.286C20.937 4.419 22.199 8.24799 21.127 11.598C19.457 16.908 12 20.998 12 20.998C12 20.998 4.59799 16.97 2.87199 11.598V11.598Z"
                                                      stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                                      stroke-linejoin="round"/>
                                                <path
                                                    d="M16 6.70001C16.5232 6.86903 16.9845 7.18931 17.3257 7.62039C17.6669 8.05148 17.8727 8.57403 17.917 9.12201"
                                                    stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2.5 items-center">
                                <p>Share on</p>
                                <ul className="m-0 p-0 flex gap-1">
                                    <li>
                                        <a href="#"
                                           className="p-[11px] inline-flex justify-center items-center text-[#636270] hover:text-[#029FAE] border hover:border-[#029FAE] border-transparent rounded-full transition-all duration-500">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_248_4233)">
                                                    <path
                                                        d="M16 8C16 3.58167 12.4183 0 8 0C3.58167 0 0 3.58167 0 8C0 11.993 2.92533 15.3027 6.75 15.9027V10.3127H4.71867V8H6.75V6.23733C6.75 4.23267 7.94433 3.125 9.77167 3.125C10.6467 3.125 11.5623 3.28133 11.5623 3.28133V5.25H10.5537C9.56 5.25 9.25 5.86667 9.25 6.5V8H11.4687L11.114 10.3127H9.25V15.9027C13.0747 15.3027 16 11.9927 16 8Z"
                                                        fill="currentColor"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_248_4233">
                                                        <rect width="16" height="16" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="p-[11px] inline-flex justify-center items-center text-[#636270] hover:text-[#029FAE] border hover:border-[#029FAE] border-transparent rounded-full transition-all duration-500">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_248_4237)">
                                                    <path
                                                        d="M5.03333 14.5001C11.07 14.5001 14.3723 9.49807 14.3723 5.1614C14.3723 5.02073 14.369 4.87707 14.3627 4.7364C15.0052 4.27173 15.5596 3.69615 16 3.03673C15.4017 3.30273 14.7667 3.47673 14.116 3.55207C14.8008 3.1416 15.3136 2.49675 15.5593 1.73707C14.915 2.11896 14.2104 2.38837 13.4757 2.53373C12.9807 2.00751 12.3261 1.65904 11.6132 1.54222C10.9002 1.4254 10.1687 1.54673 9.53161 1.88746C8.89456 2.22818 8.38752 2.76931 8.08891 3.42715C7.79031 4.08499 7.71677 4.8229 7.87967 5.52673C6.575 5.46127 5.29865 5.12236 4.13336 4.53199C2.96806 3.94162 1.93984 3.11297 1.11533 2.09973C0.696305 2.82223 0.568091 3.67717 0.756747 4.4908C0.945403 5.30443 1.43677 6.0157 2.131 6.48007C1.60977 6.46355 1.09995 6.32324 0.643667 6.07073V6.1114C0.643231 6.86956 0.905349 7.60448 1.38547 8.19125C1.86559 8.77802 2.53409 9.18042 3.27733 9.33007C2.79463 9.46215 2.28801 9.48143 1.79667 9.3864C2.00644 10.0384 2.41454 10.6087 2.964 11.0176C3.51346 11.4265 4.17688 11.6537 4.86167 11.6674C4.18054 12.2026 3.40049 12.5981 2.56623 12.8312C1.73197 13.0644 0.859899 13.1306 0 13.0261C1.50191 13.9895 3.24899 14.5011 5.03333 14.5001Z"
                                                        fill="currentColor"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_248_4237">
                                                        <rect width="16" height="16" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="p-[11px] inline-flex justify-center items-center text-[#636270] hover:text-[#029FAE] border hover:border-[#029FAE] border-transparent rounded-full transition-all duration-500">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.667 4.66667C10.667 4.48986 10.7372 4.32029 10.8623 4.19526C10.9873 4.07024 11.1568 4 11.3337 4C11.5105 4 11.68 4.07024 11.8051 4.19526C11.9301 4.32029 12.0003 4.48986 12.0003 4.66667C12.0003 4.84348 11.9301 5.01305 11.8051 5.13807C11.68 5.2631 11.5105 5.33333 11.3337 5.33333C11.1568 5.33333 10.9873 5.2631 10.8623 5.13807C10.7372 5.01305 10.667 4.84348 10.667 4.66667Z"
                                                    fill="currentColor"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M8.00016 4.83331C7.16031 4.83331 6.35486 5.16694 5.76099 5.76081C5.16713 6.35467 4.8335 7.16013 4.8335 7.99998C4.8335 8.83983 5.16713 9.64529 5.76099 10.2392C6.35486 10.833 7.16031 11.1666 8.00016 11.1666C8.84001 11.1666 9.64547 10.833 10.2393 10.2392C10.8332 9.64529 11.1668 8.83983 11.1668 7.99998C11.1668 7.16013 10.8332 6.35467 10.2393 5.76081C9.64547 5.16694 8.84001 4.83331 8.00016 4.83331ZM5.8335 7.99998C5.8335 7.42534 6.06177 6.87424 6.4681 6.46792C6.87443 6.06159 7.42553 5.83331 8.00016 5.83331C8.5748 5.83331 9.1259 6.06159 9.53223 6.46792C9.93856 6.87424 10.1668 7.42534 10.1668 7.99998C10.1668 8.57462 9.93856 9.12572 9.53223 9.53204C9.1259 9.93837 8.5748 10.1666 8.00016 10.1666C7.42553 10.1666 6.87443 9.93837 6.4681 9.53204C6.06177 9.12572 5.8335 8.57462 5.8335 7.99998Z"
                                                      fill="currentColor"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M11.5055 1.88865C9.17578 1.63038 6.82462 1.63038 4.49487 1.88865C3.15353 2.03865 2.0702 3.09532 1.91287 4.44332C1.63647 6.80637 1.63647 9.19359 1.91287 11.5566C2.0702 12.9046 3.15287 13.9613 4.49487 14.1113C6.80553 14.3693 9.19487 14.3693 11.5055 14.1113C12.8469 13.9613 13.9302 12.9046 14.0875 11.5566C14.364 9.19359 14.364 6.80637 14.0875 4.44332C13.9302 3.09532 12.8475 2.03865 11.5055 1.88865ZM4.60553 2.88198C6.86174 2.6319 9.13866 2.6319 11.3949 2.88198C12.2815 2.98198 12.9915 3.68132 13.0949 4.55998C13.3622 6.84553 13.3622 9.15444 13.0949 11.44C12.9915 12.3186 12.2815 13.0186 11.3949 13.1173C9.13866 13.3674 6.86173 13.3674 4.60553 13.1173C3.71887 13.0186 3.00887 12.3186 2.90553 11.44C2.63823 9.15444 2.63823 6.84553 2.90553 4.55998C3.00887 3.68132 3.71887 2.98132 4.60553 2.88265V2.88198Z"
                                                      fill="currentColor"/>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="p-[11px] inline-flex justify-center items-center text-[#636270] hover:text-[#029FAE] border hover:border-[#029FAE] border-transparent rounded-full transition-all duration-500">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_248_4251)">
                                                    <path
                                                        d="M8 0C3.58133 0 0 3.58133 0 8C0 11.3907 2.10933 14.2843 5.08433 15.45C5.01567 14.8157 4.95 13.8467 5.11267 13.1563C5.25933 12.5313 6.05 9.18133 6.05 9.18133C6.05 9.18133 5.80933 8.703 5.80933 7.99367C5.80933 6.88133 6.453 6.05 7.256 6.05C7.93733 6.05 8.26867 6.56267 8.26867 7.178C8.26867 7.86566 7.83133 8.89066 7.60633 9.84066C7.41867 10.6373 8.00633 11.2873 8.79067 11.2873C10.2123 11.2873 11.3063 9.78733 11.3063 7.625C11.3063 5.70933 9.93133 4.36867 7.96567 4.36867C5.69067 4.36867 4.353 6.075 4.353 7.84066C4.353 8.528 4.61867 9.26566 4.95 9.66566C5.01567 9.74366 5.025 9.81566 5.00633 9.89366C4.947 10.147 4.80967 10.6903 4.78433 10.8C4.75 10.9467 4.66867 10.978 4.51567 10.9063C3.51567 10.4407 2.89067 8.98133 2.89067 7.80633C2.89067 5.28133 4.725 2.96567 8.175 2.96567C10.95 2.96567 13.1063 4.94367 13.1063 7.58733C13.1063 10.344 11.3687 12.5623 8.95633 12.5623C8.147 12.5623 7.38433 12.1407 7.122 11.6437C7.122 11.6437 6.722 13.172 6.625 13.547C6.44367 14.2403 5.95633 15.1127 5.63133 15.6437C6.3986 15.8804 7.19706 16.0005 8 16C12.4187 16 16 12.4187 16 8C16 3.58133 12.4187 0 8 0Z"
                                                        fill="currentColor"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_248_4251">
                                                        <rect width="16" height="16" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="p-[11px] inline-flex justify-center items-center text-[#636270] hover:text-[#029FAE] border hover:border-[#029FAE] border-transparent rounded-full transition-all duration-500">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.8407 4.79995C15.8407 4.79995 15.6843 3.69661 15.203 3.21261C14.5937 2.57495 13.9123 2.57195 13.6 2.53428C11.3627 2.37195 8.00333 2.37195 8.00333 2.37195H7.99667C7.99667 2.37195 4.63767 2.37195 2.4 2.53428C2.08733 2.57195 1.40633 2.57495 0.796667 3.21261C0.316 3.69661 0.162667 4.79995 0.162667 4.79995C0.162667 4.79995 0 6.09662 0 7.39062V8.60295C0 9.89695 0.159333 11.1936 0.159333 11.1936C0.159333 11.1936 0.315667 12.2969 0.793667 12.7813C1.403 13.4186 2.203 13.3969 2.55933 13.4656C3.84067 13.5876 8 13.6249 8 13.6249C8 13.6249 11.3623 13.6186 13.6 13.4593C13.9127 13.4219 14.5937 13.4186 15.2033 12.7813C15.6843 12.2969 15.8407 11.1936 15.8407 11.1936C15.8407 11.1936 16 9.90028 16 8.60328V7.39095C16 6.09728 15.8407 4.80028 15.8407 4.80028V4.79995ZM6.34667 10.0749V5.57828L10.6683 7.83428L6.34667 10.0749Z"
                                                    fill="currentColor"/>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="single-product-desc2">
                                <h2 className="text-[#272343] text-2xl font-semibold mb-3.5">Product Descriptions</h2>
                                <p className="text-[#636270] text-base mb-3">Super Stretchy form fit fabric: This super
                                    stretchable sofa slipcover will ensure your three-seater sofa is completely covered.
                                    Our slipcovers are designed and ready-made to fit a variety of sofa sizes, stretches
                                    to 66” with seat width up to 90”</p>

                                <p className="text-[#636270] text-base mb-3">Transform your old sofa or protect your new
                                    one: PureFit sofa furniture protectors not only protects your sofa furniture daily
                                    wears and tears, kids, scratches from pets, dogs or accidental spills, it also
                                    transforms an old, worn out couch into the stunning centerpiece of your room</p>

                                <p className="text-[#636270] text-base mb-3">The sofa cover that stays in place:
                                    Featuring non skid elastic bottom and premium non slip foam anchors, our sofa
                                    furniture slipcovers are among the only ones in the market to guarantee they will
                                    stay tight with no snag, no wrinkling, shifting or slipping even after sitting or
                                    taking a nap on it</p>

                                <p className="text-[#636270] text-base mb-3">Easy to install/put on: You'll be done in
                                    no time! Just slip it on, Tuck any extra fabric and insert the non slip foam anchors
                                    into the gap/crease between the back and sitting cushions for a seamless look and
                                    VOILA! Use our picture guidelines to ensure a good fit (Installation Instructions
                                    Included)</p>

                                <p className="text-[#636270] text-base">Easy care & 6 month warranty: Machine Washable
                                    Slipcover, wash at or below 30 degrees Celsius, do not bleach, do not iron. We stand
                                    behind all of our high quality products so we offer a 6 months No Question Asked on
                                    all our sofa covers. Please contact us (through Amazon if past the standard return
                                    window) and we will be pleased to assist you.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="xl:py-20 py-6 md:py-10" style={{backgroundColor: "var(--bg-breadcum)"}}>>
                <div className="container px-3 md:px-5 xl:px-0">
                    <div className="flex items-center justify-between items-cente mb-10">
                        <h2 className="text-[#272343] xl:text-[32px] xl:leading-[110%] text-xl md:text-2xl font-semibold font-display">Similar
                            Products</h2>
                        <div className="flex gap-[18px]">
                            <button className="recentSwiper-button-prev">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect width="24" height="24" transform="matrix(-1 0 0 1 24 0)" fill="none"/>
                                    <path d="M8.5 7.5L4 12M4 12L8.5 16.5M4 12H20" stroke="currentColor"
                                          stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                            <button className="recentSwiper-button-next">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.5 7.5L20 12M20 12L15.5 16.5M20 12H4" stroke="currentColor"
                                          stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="swiper recentSwiper overflow-hidden">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="product-card">
                                    <a href="product-details.html">
                                        <div className="product-thumb">
                                            <img src={product1} alt=""/>
                                            <span className="badge new">New</span>
                                        </div>
                                        <div className="product-info">
                                            <div>
                                                <h2 className="product-name">Library Stool Chair</h2>
                                                <h3 className="product-price">$20</h3>
                                            </div>
                                            <div>
                                                <button className="cart-icon">
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M2.52081 2.97913L4.42748 3.30913L5.31023 13.826C5.34414 14.2399 5.53284 14.6257 5.83867 14.9066C6.14451 15.1875 6.545 15.3427 6.96023 15.3413H16.9611C17.3586 15.3417 17.743 15.1986 18.0435 14.9382C18.344 14.6778 18.5403 14.3177 18.5964 13.9241L19.4672 7.91263C19.4904 7.75275 19.4819 7.58987 19.4421 7.43329C19.4023 7.27671 19.3321 7.12951 19.2354 7.00011C19.1387 6.8707 19.0174 6.76163 18.8785 6.67913C18.7396 6.59663 18.5858 6.54231 18.4259 6.51929C18.3672 6.51288 4.73365 6.50829 4.73365 6.50829"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M12.9479 9.89539H15.4898" stroke="currentColor"
                                                              stroke-width="1.5" stroke-linecap="round"
                                                              stroke-linejoin="round"/>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M6.5578 18.5194C6.62502 18.5165 6.69213 18.5272 6.75509 18.551C6.81805 18.5747 6.87556 18.611 6.92414 18.6575C6.97273 18.704 7.01139 18.7599 7.03781 18.8218C7.06422 18.8837 7.07784 18.9503 7.07784 19.0176C7.07784 19.0849 7.06422 19.1515 7.03781 19.2133C7.01139 19.2752 6.97273 19.3311 6.92414 19.3777C6.87556 19.4242 6.81805 19.4605 6.75509 19.4842C6.69213 19.5079 6.62502 19.5187 6.5578 19.5158C6.42936 19.5103 6.30801 19.4554 6.21908 19.3626C6.13015 19.2697 6.08051 19.1461 6.08051 19.0176C6.08051 18.889 6.13015 18.7654 6.21908 18.6726C6.30801 18.5798 6.42936 18.5249 6.5578 18.5194Z"
                                                              fill="#272343" stroke="currentColor" stroke-width="1.5"
                                                              stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M16.8988 18.5194C17.0312 18.5194 17.1583 18.572 17.252 18.6657C17.3457 18.7594 17.3983 18.8865 17.3983 19.019C17.3983 19.1515 17.3457 19.2786 17.252 19.3723C17.1583 19.4659 17.0312 19.5186 16.8988 19.5186C16.7663 19.5186 16.6392 19.4659 16.5455 19.3723C16.4518 19.2786 16.3992 19.1515 16.3992 19.019C16.3992 18.8865 16.4518 18.7594 16.5455 18.6657C16.6392 18.572 16.7663 18.5194 16.8988 18.5194Z"
                                                              fill="#272343" stroke="currentColor" stroke-width="1.5"
                                                              stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="wishlist.html" className="heart-icon">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M2.63268 10.6315C1.64909 7.56068 2.79768 4.05077 6.02251 3.01218C6.85874 2.74461 7.74682 2.68088 8.61268 2.8263C9.47855 2.97173 10.2971 3.3221 11 3.84818C12.3338 2.81693 14.2743 2.4686 15.9683 3.01218C19.1923 4.05077 20.3491 7.56068 19.3664 10.6315C17.8356 15.499 11 19.2482 11 19.2482C11 19.2482 4.21484 15.5558 2.63268 10.6315V10.6315Z"
                                                  stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                                  stroke-linejoin="round"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="product-card">
                                    <a href="product-details.html">
                                        <div className="product-thumb">
                                            <img src={product2} alt=""/>
                                            <span className="badge new">New</span>
                                        </div>
                                        <div className="product-info">
                                            <div>
                                                <h2 className="product-name">Library Stool Chair</h2>
                                                <h3 className="product-price">$20</h3>
                                            </div>
                                            <div>
                                                <button className="cart-icon">
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M2.52081 2.97913L4.42748 3.30913L5.31023 13.826C5.34414 14.2399 5.53284 14.6257 5.83867 14.9066C6.14451 15.1875 6.545 15.3427 6.96023 15.3413H16.9611C17.3586 15.3417 17.743 15.1986 18.0435 14.9382C18.344 14.6778 18.5403 14.3177 18.5964 13.9241L19.4672 7.91263C19.4904 7.75275 19.4819 7.58987 19.4421 7.43329C19.4023 7.27671 19.3321 7.12951 19.2354 7.00011C19.1387 6.8707 19.0174 6.76163 18.8785 6.67913C18.7396 6.59663 18.5858 6.54231 18.4259 6.51929C18.3672 6.51288 4.73365 6.50829 4.73365 6.50829"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M12.9479 9.89539H15.4898" stroke="currentColor"
                                                              stroke-width="1.5" stroke-linecap="round"
                                                              stroke-linejoin="round"/>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M6.5578 18.5194C6.62502 18.5165 6.69213 18.5272 6.75509 18.551C6.81805 18.5747 6.87556 18.611 6.92414 18.6575C6.97273 18.704 7.01139 18.7599 7.03781 18.8218C7.06422 18.8837 7.07784 18.9503 7.07784 19.0176C7.07784 19.0849 7.06422 19.1515 7.03781 19.2133C7.01139 19.2752 6.97273 19.3311 6.92414 19.3777C6.87556 19.4242 6.81805 19.4605 6.75509 19.4842C6.69213 19.5079 6.62502 19.5187 6.5578 19.5158C6.42936 19.5103 6.30801 19.4554 6.21908 19.3626C6.13015 19.2697 6.08051 19.1461 6.08051 19.0176C6.08051 18.889 6.13015 18.7654 6.21908 18.6726C6.30801 18.5798 6.42936 18.5249 6.5578 18.5194Z"
                                                              fill="#272343" stroke="currentColor" stroke-width="1.5"
                                                              stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M16.8988 18.5194C17.0312 18.5194 17.1583 18.572 17.252 18.6657C17.3457 18.7594 17.3983 18.8865 17.3983 19.019C17.3983 19.1515 17.3457 19.2786 17.252 19.3723C17.1583 19.4659 17.0312 19.5186 16.8988 19.5186C16.7663 19.5186 16.6392 19.4659 16.5455 19.3723C16.4518 19.2786 16.3992 19.1515 16.3992 19.019C16.3992 18.8865 16.4518 18.7594 16.5455 18.6657C16.6392 18.572 16.7663 18.5194 16.8988 18.5194Z"
                                                              fill="#272343" stroke="currentColor" stroke-width="1.5"
                                                              stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="wishlist.html" className="heart-icon">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M2.63268 10.6315C1.64909 7.56068 2.79768 4.05077 6.02251 3.01218C6.85874 2.74461 7.74682 2.68088 8.61268 2.8263C9.47855 2.97173 10.2971 3.3221 11 3.84818C12.3338 2.81693 14.2743 2.4686 15.9683 3.01218C19.1923 4.05077 20.3491 7.56068 19.3664 10.6315C17.8356 15.499 11 19.2482 11 19.2482C11 19.2482 4.21484 15.5558 2.63268 10.6315V10.6315Z"
                                                  stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                                  stroke-linejoin="round"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="product-card">
                                    <a href="product-details.html">
                                        <div className="product-thumb">
                                            <img src={product3} alt=""/>
                                            <span className="badge new">New</span>
                                        </div>
                                        <div className="product-info">
                                            <div>
                                                <h2 className="product-name">Library Stool Chair</h2>
                                                <h3 className="product-price">$20</h3>
                                            </div>
                                            <div>
                                                <button className="cart-icon">
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M2.52081 2.97913L4.42748 3.30913L5.31023 13.826C5.34414 14.2399 5.53284 14.6257 5.83867 14.9066C6.14451 15.1875 6.545 15.3427 6.96023 15.3413H16.9611C17.3586 15.3417 17.743 15.1986 18.0435 14.9382C18.344 14.6778 18.5403 14.3177 18.5964 13.9241L19.4672 7.91263C19.4904 7.75275 19.4819 7.58987 19.4421 7.43329C19.4023 7.27671 19.3321 7.12951 19.2354 7.00011C19.1387 6.8707 19.0174 6.76163 18.8785 6.67913C18.7396 6.59663 18.5858 6.54231 18.4259 6.51929C18.3672 6.51288 4.73365 6.50829 4.73365 6.50829"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M12.9479 9.89539H15.4898" stroke="currentColor"
                                                              stroke-width="1.5" stroke-linecap="round"
                                                              stroke-linejoin="round"/>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M6.5578 18.5194C6.62502 18.5165 6.69213 18.5272 6.75509 18.551C6.81805 18.5747 6.87556 18.611 6.92414 18.6575C6.97273 18.704 7.01139 18.7599 7.03781 18.8218C7.06422 18.8837 7.07784 18.9503 7.07784 19.0176C7.07784 19.0849 7.06422 19.1515 7.03781 19.2133C7.01139 19.2752 6.97273 19.3311 6.92414 19.3777C6.87556 19.4242 6.81805 19.4605 6.75509 19.4842C6.69213 19.5079 6.62502 19.5187 6.5578 19.5158C6.42936 19.5103 6.30801 19.4554 6.21908 19.3626C6.13015 19.2697 6.08051 19.1461 6.08051 19.0176C6.08051 18.889 6.13015 18.7654 6.21908 18.6726C6.30801 18.5798 6.42936 18.5249 6.5578 18.5194Z"
                                                              fill="#272343" stroke="currentColor" stroke-width="1.5"
                                                              stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M16.8988 18.5194C17.0312 18.5194 17.1583 18.572 17.252 18.6657C17.3457 18.7594 17.3983 18.8865 17.3983 19.019C17.3983 19.1515 17.3457 19.2786 17.252 19.3723C17.1583 19.4659 17.0312 19.5186 16.8988 19.5186C16.7663 19.5186 16.6392 19.4659 16.5455 19.3723C16.4518 19.2786 16.3992 19.1515 16.3992 19.019C16.3992 18.8865 16.4518 18.7594 16.5455 18.6657C16.6392 18.572 16.7663 18.5194 16.8988 18.5194Z"
                                                              fill="#272343" stroke="currentColor" stroke-width="1.5"
                                                              stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="wishlist.html" className="heart-icon">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M2.63268 10.6315C1.64909 7.56068 2.79768 4.05077 6.02251 3.01218C6.85874 2.74461 7.74682 2.68088 8.61268 2.8263C9.47855 2.97173 10.2971 3.3221 11 3.84818C12.3338 2.81693 14.2743 2.4686 15.9683 3.01218C19.1923 4.05077 20.3491 7.56068 19.3664 10.6315C17.8356 15.499 11 19.2482 11 19.2482C11 19.2482 4.21484 15.5558 2.63268 10.6315V10.6315Z"
                                                  stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                                  stroke-linejoin="round"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="product-card">
                                    <a href="product-details.html">
                                        <div className="product-thumb">
                                            <img src={f_product_4} alt=""/>
                                            <span className="badge new">New</span>
                                        </div>
                                        <div className="product-info">
                                            <div>
                                                <h2 className="product-name">Library Stool Chair</h2>
                                                <h3 className="product-price">$20</h3>
                                            </div>
                                            <div>
                                                <button className="cart-icon">
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M2.52081 2.97913L4.42748 3.30913L5.31023 13.826C5.34414 14.2399 5.53284 14.6257 5.83867 14.9066C6.14451 15.1875 6.545 15.3427 6.96023 15.3413H16.9611C17.3586 15.3417 17.743 15.1986 18.0435 14.9382C18.344 14.6778 18.5403 14.3177 18.5964 13.9241L19.4672 7.91263C19.4904 7.75275 19.4819 7.58987 19.4421 7.43329C19.4023 7.27671 19.3321 7.12951 19.2354 7.00011C19.1387 6.8707 19.0174 6.76163 18.8785 6.67913C18.7396 6.59663 18.5858 6.54231 18.4259 6.51929C18.3672 6.51288 4.73365 6.50829 4.73365 6.50829"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M12.9479 9.89539H15.4898" stroke="currentColor"
                                                              stroke-width="1.5" stroke-linecap="round"
                                                              stroke-linejoin="round"/>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M6.5578 18.5194C6.62502 18.5165 6.69213 18.5272 6.75509 18.551C6.81805 18.5747 6.87556 18.611 6.92414 18.6575C6.97273 18.704 7.01139 18.7599 7.03781 18.8218C7.06422 18.8837 7.07784 18.9503 7.07784 19.0176C7.07784 19.0849 7.06422 19.1515 7.03781 19.2133C7.01139 19.2752 6.97273 19.3311 6.92414 19.3777C6.87556 19.4242 6.81805 19.4605 6.75509 19.4842C6.69213 19.5079 6.62502 19.5187 6.5578 19.5158C6.42936 19.5103 6.30801 19.4554 6.21908 19.3626C6.13015 19.2697 6.08051 19.1461 6.08051 19.0176C6.08051 18.889 6.13015 18.7654 6.21908 18.6726C6.30801 18.5798 6.42936 18.5249 6.5578 18.5194Z"
                                                              fill="#272343" stroke="currentColor" stroke-width="1.5"
                                                              stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M16.8988 18.5194C17.0312 18.5194 17.1583 18.572 17.252 18.6657C17.3457 18.7594 17.3983 18.8865 17.3983 19.019C17.3983 19.1515 17.3457 19.2786 17.252 19.3723C17.1583 19.4659 17.0312 19.5186 16.8988 19.5186C16.7663 19.5186 16.6392 19.4659 16.5455 19.3723C16.4518 19.2786 16.3992 19.1515 16.3992 19.019C16.3992 18.8865 16.4518 18.7594 16.5455 18.6657C16.6392 18.572 16.7663 18.5194 16.8988 18.5194Z"
                                                              fill="#272343" stroke="currentColor" stroke-width="1.5"
                                                              stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="wishlist.html" className="heart-icon">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M2.63268 10.6315C1.64909 7.56068 2.79768 4.05077 6.02251 3.01218C6.85874 2.74461 7.74682 2.68088 8.61268 2.8263C9.47855 2.97173 10.2971 3.3221 11 3.84818C12.3338 2.81693 14.2743 2.4686 15.9683 3.01218C19.1923 4.05077 20.3491 7.56068 19.3664 10.6315C17.8356 15.499 11 19.2482 11 19.2482C11 19.2482 4.21484 15.5558 2.63268 10.6315V10.6315Z"
                                                  stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                                  stroke-linejoin="round"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="product-card">
                                    <a href="product-details.html">
                                        <div className="product-thumb">
                                            <img src={product1} alt=""/>
                                            <span className="badge new">New</span>
                                        </div>
                                        <div className="product-info">
                                            <div>
                                                <h2 className="product-name">Library Stool Chair</h2>
                                                <h3 className="product-price">$20</h3>
                                            </div>
                                            <div>
                                                <button className="cart-icon">
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M2.52081 2.97913L4.42748 3.30913L5.31023 13.826C5.34414 14.2399 5.53284 14.6257 5.83867 14.9066C6.14451 15.1875 6.545 15.3427 6.96023 15.3413H16.9611C17.3586 15.3417 17.743 15.1986 18.0435 14.9382C18.344 14.6778 18.5403 14.3177 18.5964 13.9241L19.4672 7.91263C19.4904 7.75275 19.4819 7.58987 19.4421 7.43329C19.4023 7.27671 19.3321 7.12951 19.2354 7.00011C19.1387 6.8707 19.0174 6.76163 18.8785 6.67913C18.7396 6.59663 18.5858 6.54231 18.4259 6.51929C18.3672 6.51288 4.73365 6.50829 4.73365 6.50829"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M12.9479 9.89539H15.4898" stroke="currentColor"
                                                              stroke-width="1.5" stroke-linecap="round"
                                                              stroke-linejoin="round"/>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M6.5578 18.5194C6.62502 18.5165 6.69213 18.5272 6.75509 18.551C6.81805 18.5747 6.87556 18.611 6.92414 18.6575C6.97273 18.704 7.01139 18.7599 7.03781 18.8218C7.06422 18.8837 7.07784 18.9503 7.07784 19.0176C7.07784 19.0849 7.06422 19.1515 7.03781 19.2133C7.01139 19.2752 6.97273 19.3311 6.92414 19.3777C6.87556 19.4242 6.81805 19.4605 6.75509 19.4842C6.69213 19.5079 6.62502 19.5187 6.5578 19.5158C6.42936 19.5103 6.30801 19.4554 6.21908 19.3626C6.13015 19.2697 6.08051 19.1461 6.08051 19.0176C6.08051 18.889 6.13015 18.7654 6.21908 18.6726C6.30801 18.5798 6.42936 18.5249 6.5578 18.5194Z"
                                                              fill="#272343" stroke="currentColor" stroke-width="1.5"
                                                              stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M16.8988 18.5194C17.0312 18.5194 17.1583 18.572 17.252 18.6657C17.3457 18.7594 17.3983 18.8865 17.3983 19.019C17.3983 19.1515 17.3457 19.2786 17.252 19.3723C17.1583 19.4659 17.0312 19.5186 16.8988 19.5186C16.7663 19.5186 16.6392 19.4659 16.5455 19.3723C16.4518 19.2786 16.3992 19.1515 16.3992 19.019C16.3992 18.8865 16.4518 18.7594 16.5455 18.6657C16.6392 18.572 16.7663 18.5194 16.8988 18.5194Z"
                                                              fill="#272343" stroke="currentColor" stroke-width="1.5"
                                                              stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="wishlist.html" className="heart-icon">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M2.63268 10.6315C1.64909 7.56068 2.79768 4.05077 6.02251 3.01218C6.85874 2.74461 7.74682 2.68088 8.61268 2.8263C9.47855 2.97173 10.2971 3.3221 11 3.84818C12.3338 2.81693 14.2743 2.4686 15.9683 3.01218C19.1923 4.05077 20.3491 7.56068 19.3664 10.6315C17.8356 15.499 11 19.2482 11 19.2482C11 19.2482 4.21484 15.5558 2.63268 10.6315V10.6315Z"
                                                  stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                                  stroke-linejoin="round"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="product-card">
                                    <a href="product-details.html">
                                        <div className="product-thumb">
                                            <img src={product2} alt=""/>
                                            <span className="badge new">New</span>
                                        </div>
                                        <div className="product-info">
                                            <div>
                                                <h2 className="product-name">Library Stool Chair</h2>
                                                <h3 className="product-price">$20</h3>
                                            </div>
                                            <div>
                                                <button className="cart-icon">
                                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M2.52081 2.97913L4.42748 3.30913L5.31023 13.826C5.34414 14.2399 5.53284 14.6257 5.83867 14.9066C6.14451 15.1875 6.545 15.3427 6.96023 15.3413H16.9611C17.3586 15.3417 17.743 15.1986 18.0435 14.9382C18.344 14.6778 18.5403 14.3177 18.5964 13.9241L19.4672 7.91263C19.4904 7.75275 19.4819 7.58987 19.4421 7.43329C19.4023 7.27671 19.3321 7.12951 19.2354 7.00011C19.1387 6.8707 19.0174 6.76163 18.8785 6.67913C18.7396 6.59663 18.5858 6.54231 18.4259 6.51929C18.3672 6.51288 4.73365 6.50829 4.73365 6.50829"
                                                            stroke="currentColor" stroke-width="1.5"
                                                            stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M12.9479 9.89539H15.4898" stroke="currentColor"
                                                              stroke-width="1.5" stroke-linecap="round"
                                                              stroke-linejoin="round"/>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M6.5578 18.5194C6.62502 18.5165 6.69213 18.5272 6.75509 18.551C6.81805 18.5747 6.87556 18.611 6.92414 18.6575C6.97273 18.704 7.01139 18.7599 7.03781 18.8218C7.06422 18.8837 7.07784 18.9503 7.07784 19.0176C7.07784 19.0849 7.06422 19.1515 7.03781 19.2133C7.01139 19.2752 6.97273 19.3311 6.92414 19.3777C6.87556 19.4242 6.81805 19.4605 6.75509 19.4842C6.69213 19.5079 6.62502 19.5187 6.5578 19.5158C6.42936 19.5103 6.30801 19.4554 6.21908 19.3626C6.13015 19.2697 6.08051 19.1461 6.08051 19.0176C6.08051 18.889 6.13015 18.7654 6.21908 18.6726C6.30801 18.5798 6.42936 18.5249 6.5578 18.5194Z"
                                                              fill="#272343" stroke="currentColor" stroke-width="1.5"
                                                              stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                              d="M16.8988 18.5194C17.0312 18.5194 17.1583 18.572 17.252 18.6657C17.3457 18.7594 17.3983 18.8865 17.3983 19.019C17.3983 19.1515 17.3457 19.2786 17.252 19.3723C17.1583 19.4659 17.0312 19.5186 16.8988 19.5186C16.7663 19.5186 16.6392 19.4659 16.5455 19.3723C16.4518 19.2786 16.3992 19.1515 16.3992 19.019C16.3992 18.8865 16.4518 18.7594 16.5455 18.6657C16.6392 18.572 16.7663 18.5194 16.8988 18.5194Z"
                                                              fill="#272343" stroke="currentColor" stroke-width="1.5"
                                                              stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="wishlist.html" className="heart-icon">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                  d="M2.63268 10.6315C1.64909 7.56068 2.79768 4.05077 6.02251 3.01218C6.85874 2.74461 7.74682 2.68088 8.61268 2.8263C9.47855 2.97173 10.2971 3.3221 11 3.84818C12.3338 2.81693 14.2743 2.4686 15.9683 3.01218C19.1923 4.05077 20.3491 7.56068 19.3664 10.6315C17.8356 15.499 11 19.2482 11 19.2482C11 19.2482 4.21484 15.5558 2.63268 10.6315V10.6315Z"
                                                  stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                                  stroke-linejoin="round"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div
                    className="footer-top xl:pt-20 xl:pb-[60px] py-6 sm:py-8 md:py-12 shadow-[inset_0px_1px_0px_#E1E3E6]">
                    <div className="container px-3 md:px-5 xl:px-0">
                        <div className=" flex flex-wrap gap-y-6 justify-between">
                            <div className="footer-widget max-w-[350px]">
                                <div className="lg:mb-6 mb-4">
                                    <a href="#">
                                        <img src="../assets/images/all-img/logo.png" alt=""/>
                                    </a>
                                </div>
                                <p className="lg:mb-6 mb-4 text-[#272343] text-base">Vivamus tristique odio sit amet
                                    velit semper, eu posuere turpis interdum. Cras egestas purus </p>
                                <ul className="flex gap-1">
                                    <li>
                                        <a href="#"
                                           className="text-[#636270] p-[11px] rounded-full border border-transparent hover:text-[#007580] hover:border-[#007580] transition-all duration-500">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_1101_2875)">
                                                    <path
                                                        d="M16 8C16 3.58167 12.4183 0 8 0C3.58167 0 0 3.58167 0 8C0 11.993 2.92533 15.3027 6.75 15.9027V10.3127H4.71867V8H6.75V6.23733C6.75 4.23267 7.94433 3.125 9.77167 3.125C10.6467 3.125 11.5623 3.28133 11.5623 3.28133V5.25H10.5537C9.56 5.25 9.25 5.86667 9.25 6.5V8H11.4687L11.114 10.3127H9.25V15.9027C13.0747 15.3027 16 11.9927 16 8Z"
                                                        fill="currentColor"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1101_2875">
                                                        <rect width="16" height="16" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="text-[#636270] p-[11px] rounded-full border border-transparent hover:text-[#007580] hover:border-[#007580] transition-all duration-500">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_1101_2879)">
                                                    <path
                                                        d="M5.03333 14.5001C11.07 14.5001 14.3723 9.49813 14.3723 5.16146C14.3723 5.0208 14.369 4.87713 14.3627 4.73646C15.0052 4.27179 15.5596 3.69621 16 3.0368C15.4017 3.3028 14.7667 3.4768 14.116 3.55213C14.8008 3.14166 15.3136 2.49681 15.5593 1.73713C14.915 2.11902 14.2104 2.38843 13.4757 2.5338C12.9807 2.00757 12.3261 1.65911 11.6132 1.54228C10.9002 1.42546 10.1687 1.54679 9.53161 1.88752C8.89456 2.22824 8.38752 2.76937 8.08891 3.42721C7.79031 4.08506 7.71677 4.82296 7.87967 5.5268C6.575 5.46133 5.29865 5.12242 4.13336 4.53206C2.96806 3.94169 1.93984 3.11303 1.11533 2.0998C0.696305 2.82229 0.568091 3.67723 0.756747 4.49086C0.945403 5.30449 1.43677 6.01576 2.131 6.48013C1.60977 6.46361 1.09995 6.3233 0.643667 6.0708V6.11146C0.643231 6.86962 0.905349 7.60455 1.38547 8.19131C1.86559 8.77808 2.53409 9.18048 3.27733 9.33013C2.79463 9.46221 2.28801 9.48149 1.79667 9.38646C2.00644 10.0385 2.41454 10.6087 2.964 11.0176C3.51346 11.4266 4.17688 11.6537 4.86167 11.6675C4.18054 12.2026 3.40049 12.5981 2.56623 12.8313C1.73197 13.0644 0.859899 13.1306 0 13.0261C1.50191 13.9895 3.24899 14.5012 5.03333 14.5001Z"
                                                        fill="currentColor"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1101_2879">
                                                        <rect width="16" height="16" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="text-[#636270] p-[11px] rounded-full border border-transparent hover:text-[#007580] hover:border-[#007580] transition-all duration-500">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M10.6667 4.66667C10.6667 4.48986 10.7369 4.32029 10.8619 4.19526C10.9869 4.07024 11.1565 4 11.3333 4C11.5101 4 11.6797 4.07024 11.8047 4.19526C11.9298 4.32029 12 4.48986 12 4.66667C12 4.84348 11.9298 5.01305 11.8047 5.13807C11.6797 5.2631 11.5101 5.33333 11.3333 5.33333C11.1565 5.33333 10.9869 5.2631 10.8619 5.13807C10.7369 5.01305 10.6667 4.84348 10.6667 4.66667Z"
                                                    fill="currentColor"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M7.99998 4.83301C7.16013 4.83301 6.35467 5.16664 5.76081 5.7605C5.16694 6.35437 4.83331 7.15982 4.83331 7.99967C4.83331 8.83953 5.16694 9.64498 5.76081 10.2388C6.35467 10.8327 7.16013 11.1663 7.99998 11.1663C8.83983 11.1663 9.64529 10.8327 10.2392 10.2388C10.833 9.64498 11.1666 8.83953 11.1666 7.99967C11.1666 7.15982 10.833 6.35437 10.2392 5.7605C9.64529 5.16664 8.83983 4.83301 7.99998 4.83301ZM5.83331 7.99967C5.83331 7.42504 6.06159 6.87394 6.46792 6.46761C6.87424 6.06128 7.42534 5.83301 7.99998 5.83301C8.57462 5.83301 9.12572 6.06128 9.53204 6.46761C9.93837 6.87394 10.1666 7.42504 10.1666 7.99967C10.1666 8.57431 9.93837 9.12541 9.53204 9.53174C9.12572 9.93807 8.57462 10.1663 7.99998 10.1663C7.42534 10.1663 6.87424 9.93807 6.46792 9.53174C6.06159 9.12541 5.83331 8.57431 5.83331 7.99967Z"
                                                      fill="currentColor"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                      d="M11.5053 1.88853C9.17557 1.63026 6.82441 1.63026 4.49465 1.88853C3.15332 2.03853 2.06999 3.09519 1.91265 4.44319C1.63625 6.80625 1.63625 9.19347 1.91265 11.5565C2.06999 12.9045 3.15265 13.9612 4.49465 14.1112C6.80532 14.3692 9.19465 14.3692 11.5053 14.1112C12.8467 13.9612 13.93 12.9045 14.0873 11.5565C14.3638 9.19347 14.3638 6.80625 14.0873 4.44319C13.93 3.09519 12.8473 2.03853 11.5053 1.88853ZM4.60532 2.88186C6.86152 2.63177 9.13845 2.63177 11.3947 2.88186C12.2813 2.98186 12.9913 3.68119 13.0947 4.55986C13.362 6.8454 13.362 9.15431 13.0947 11.4399C12.9913 12.3185 12.2813 13.0185 11.3947 13.1172C9.13845 13.3673 6.86152 13.3673 4.60532 13.1172C3.71865 13.0185 3.00865 12.3185 2.90532 11.4399C2.63802 9.15431 2.63802 6.8454 2.90532 4.55986C3.00865 3.68119 3.71865 2.98119 4.60532 2.88253V2.88186Z"
                                                      fill="currentColor"/>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="text-[#636270] p-[11px] rounded-full border border-transparent hover:text-[#007580] hover:border-[#007580] transition-all duration-500">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_1101_2893)">
                                                    <path
                                                        d="M8 0C3.58133 0 0 3.58133 0 8C0 11.3907 2.10933 14.2843 5.08433 15.45C5.01567 14.8157 4.95 13.8467 5.11267 13.1563C5.25933 12.5313 6.05 9.18133 6.05 9.18133C6.05 9.18133 5.80933 8.703 5.80933 7.99367C5.80933 6.88133 6.453 6.05 7.256 6.05C7.93733 6.05 8.26867 6.56267 8.26867 7.178C8.26867 7.86566 7.83133 8.89066 7.60633 9.84066C7.41867 10.6373 8.00633 11.2873 8.79067 11.2873C10.2123 11.2873 11.3063 9.78733 11.3063 7.625C11.3063 5.70933 9.93133 4.36867 7.96567 4.36867C5.69067 4.36867 4.353 6.075 4.353 7.84066C4.353 8.528 4.61867 9.26566 4.95 9.66566C5.01567 9.74366 5.025 9.81566 5.00633 9.89366C4.947 10.147 4.80967 10.6903 4.78433 10.8C4.75 10.9467 4.66867 10.978 4.51567 10.9063C3.51567 10.4407 2.89067 8.98133 2.89067 7.80633C2.89067 5.28133 4.725 2.96567 8.175 2.96567C10.95 2.96567 13.1063 4.94367 13.1063 7.58733C13.1063 10.344 11.3687 12.5623 8.95633 12.5623C8.147 12.5623 7.38433 12.1407 7.122 11.6437C7.122 11.6437 6.722 13.172 6.625 13.547C6.44367 14.2403 5.95633 15.1127 5.63133 15.6437C6.3986 15.8804 7.19706 16.0005 8 16C12.4187 16 16 12.4187 16 8C16 3.58133 12.4187 0 8 0Z"
                                                        fill="currentColor"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1101_2893">
                                                        <rect width="16" height="16" fill="white"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           className="text-[#636270] p-[11px] rounded-full border border-transparent hover:text-[#007580] hover:border-[#007580] transition-all duration-500">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M15.8407 4.80007C15.8407 4.80007 15.6843 3.69674 15.203 3.21274C14.5937 2.57507 13.9123 2.57207 13.6 2.5344C11.3627 2.37207 8.00333 2.37207 8.00333 2.37207H7.99667C7.99667 2.37207 4.63767 2.37207 2.4 2.5344C2.08733 2.57207 1.40633 2.57507 0.796667 3.21274C0.316 3.69674 0.162667 4.80007 0.162667 4.80007C0.162667 4.80007 0 6.09674 0 7.39074V8.60307C0 9.89707 0.159333 11.1937 0.159333 11.1937C0.159333 11.1937 0.315667 12.2971 0.793667 12.7814C1.403 13.4187 2.203 13.3971 2.55933 13.4657C3.84067 13.5877 8 13.6251 8 13.6251C8 13.6251 11.3623 13.6187 13.6 13.4594C13.9127 13.4221 14.5937 13.4187 15.2033 12.7814C15.6843 12.2971 15.8407 11.1937 15.8407 11.1937C15.8407 11.1937 16 9.9004 16 8.6034V7.39107C16 6.0974 15.8407 4.8004 15.8407 4.8004V4.80007ZM6.34667 10.0751V5.5784L10.6683 7.8344L6.34667 10.0751Z"
                                                    fill="currentColor"/>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="footer-widget">
                                <h2 className="widget-title text-[#9A9CAA] text-sm leading-[110%] font-display font-medium uppercase mb-5">Category</h2>
                                <ul class="flex flex-col gap-3">
                                    <li>
                                        <a href="#"
                                           class="footer-link text-[#272343] text-base leading-[110%] hover:text-[#007580] transition-all duration-500 inline-block pb-1 ease-in-out">Sofa</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           class="footer-link text-[#272343] text-base leading-[110%] hover:text-[#007580] transition-all duration-500 inline-block pb-1">Armchair</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           class="footer-link text-[#272343] text-base leading-[110%] hover:text-[#007580] transition-all duration-500 inline-block pb-1">Wing
                                            Chair</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           class="footer-link text-[#272343] text-base leading-[110%] hover:text-[#007580] transition-all duration-500 inline-block pb-1">Desk
                                            Chair</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           class="footer-link text-[#272343] text-base leading-[110%] hover:text-[#007580] transition-all duration-500 inline-block pb-1">wooden
                                            Chair</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           class="footer-link text-[#272343] text-base leading-[110%] hover:text-[#007580] transition-all duration-500 inline-block pb-1">Park
                                            Bench</a>
                                    </li>
                                </ul>
                            </div>

                            <div class="footer-widget">
                                <h2 class="widget-title text-[#9A9CAA] text-sm leading-[110%] font-display font-medium uppercase mb-5">Support</h2>
                                <ul class="flex flex-col gap-3">
                                    <li>
                                        <a href="#"
                                           class="footer-link text-[#272343] text-base leading-[110%] hover:text-[#007580] transition-all duration-500 inline-block pb-1">Help
                                            & Support</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           class="footer-link text-[#272343] text-base leading-[110%] hover:text-[#007580] transition-all duration-500 inline-block pb-1">Tearms
                                            & Conditions</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           class="footer-link text-[#272343] text-base leading-[110%] hover:text-[#007580] transition-all duration-500  inline-block pb-1">Privacy
                                            Policy</a>
                                    </li>
                                    <li>
                                        <a href="#"
                                           class="footer-link text-[#272343] text-base leading-[110%] hover:text-[#007580] transition-all duration-500 inline-block pb-1">Help</a>
                                    </li>
                                </ul>
                            </div>


                            <div class="footer-widget w-[424px]">
                                <h2 class="widget-title text-[#9A9CAA] text-sm leading-[110%] font-display font-medium uppercase mb-5">Newsletter</h2>
                                <form action="" class="flex flex-wrap xl:flex-nowrap gap-3">
                                    <input type="text" name="" id=""
                                           class="bg-[#FFFFFF] block max-w-[285px] w-full px-5 py-[15px] rounded-lg focus:outline-none focus:ring-2 focus:ring-accents transition duration-300 ease-in-out border border-[#E1E3E6]"
                                           placeholder="Your email"/>
                                    <button type="submit" class="btn-primary">Subscribe</button>
                                </form>
                                <p class="py-3 text-[#272343] opacity-60">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Nullam tincidunt erat enim.</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="footer-bottom shadow-[inset_0px_1px_0px_#E1E3E6] py-6">
                    <div class="container px-3 md:px-5 xl:px-0">
                        <div
                            class="flex flex-wrap sm:justify-between sm:flex-nowrap justify-center items-center gap-y-6">
                            <p class="text-center text-[#9A9CAA]">@ 2021 - Blogy - Designed & Develop by <b
                                class="text-grayscales-900">Zakirsoft</b></p>
                            <div class="inline-flex justify-center h-[27px] w-[227px]">
                                <img src="../assets/images/all-img/payments.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>

    )
}
export default Product_details;