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
import MiniChat from "./MiniChat";
import Menu_Response from "./menu/Menu_Response";
import Header_Menu from "./menu/Header_Menu";
import Header_Bottom from "./menu/Header_Bottom";
import Footer from "./footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import {formatPrice} from "../format/FormatMoney";
import ReactQuill from "react-quill";
import {addCart, count, getListCart} from "../api/CartApi";

const Product_details = () => {
    const [isHeaderSticky, setHeaderSticky] = useState(false);
    const [countProduct, setCount] = useState(1);
    const productDetails = useSelector(state => state.details.array_product_details);
    const  countCart = useSelector(state => state.cart.countCart);
    /**
     * lấy img  đầu tiên
     */
    const dispatch = useDispatch();
    const firstImageUrl = productDetails.mediaUrls[0];
    /**
     * lay id nguoi dung
     */
    const  user_id =useSelector(state => state.appUser.user_id);

    /**
     * lay trang thai
     */
    const  isStatus =useSelector(state => state.appUser.isStatus);
    const handleMinusClick = () => {
        const newCount =countProduct - 1 < 1 ? 1 :countProduct - 1;
        setCount(newCount);
    };

    const handlePlusClick = () => {
        setCount(countProduct + 1);
    };
    const handAddCart =()=>{

        if(isStatus === true){
            dispatch(addCart(user_id,productDetails.product_id,countProduct,productDetails.price*countProduct  ));
            /**
             * gọi lại api
             */
            dispatch(count(user_id));
            dispatch(getListCart(user_id));
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
                <div className="container px-3_t md:px-5 xl:px-0_t">
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
                            className="text-[14px] font-medium leading-[110%] font-display text-gray-black inline-block product_details_name mt_8"> {productDetails.product_name}</span>
                    </div>
                    <h2 className="pt-[13.5px] text-2xl font-semibold text-gray-black font-display">Chi tiết sản
                        phẩm</h2>
                </div>
            </div>
 {/*thông tin sản phẩm*/}
            <div className="" style={{backgroundColor: "var(--bg-breadcum)"}}>
                <div className="container px-3_t md:px-5 xl:px-0_t">
                    <div className="product-details-wrap pt-10">
                        <div className="left-side xl:w-7/12 w-full">
                            <div className="gallery-container mb-[50px]">

                                <div className="swiper-container gallery-main">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">

                                            {firstImageUrl &&
                                                <img src={firstImageUrl} alt={productDetails.product_name}/>}
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="single-product-desc">
                                <h2 className="text-[#272343] text-2xl font-semibold mb-3.5">Chi tiết sản phẩm</h2>
                                <ReactQuill readOnly={true}  className="text-[#636270] text-base mb-3 NoBorderQuill"  value={productDetails.description} />
                            </div>
                        </div>
                        <div className="right-side xl:px-8 px-0_t xl:w-5/12 w-full">
                            <h2 className="text-[#272343] pro-title font-semibold mb-3 capitalize">{productDetails.product_name}</h2>
                            <div className="flex items-center gap-2.5 mb-6">
                                <p className="flex gap-1.5 items-center">
                                    <span
                                        className="text-[#272343] text-2xl">{formatPrice(productDetails.price)} VNĐ</span>

                                </p>

                            </div>
                            <div className="flex flex-wrap-tw lg:flex-nowrap items-center gap-3 mb-6">
                                <div
                                    className="border inline-flex justify-around items-center h-[52px] w-[140px] xl:w-[343px] add-to-cart-btn border-[#D6D9DD] rounded-lg">
                                    <span
                                        className="w-5 h-5 inline-flex justify-center items-center text-[#9A9CAA] pl-[14px] select-none minus"
                                        id="minus" onClick={handleMinusClick}>-</span>
                                    <input type="text" className="text-[#272343] text-base plus_mines_input select-none"
                                           value={countProduct}/>
                                    <span
                                        className="w-5 h-5 inline-flex justify-center items-center text-[#9A9CAA] pr-[14px] select-none plus "
                                        id="plus" onClick={handlePlusClick}>+</span>
                                </div>
                                <div className="flex gap-3 w-full">
                                    <div className="xl:w-[343px] add-to-cart-btn">
                                        <button onClick={handAddCart}
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

    )
}
export default Product_details;