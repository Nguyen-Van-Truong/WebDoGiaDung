import $ from 'jquery';
import Swiper from "swiper";
import 'select2/dist/js/select2';
import mixitup from 'mixitup';
import React, {useState, useEffect, useRef} from 'react';
import {Link, useNavigate} from "react-router-dom";

import '../assets/plugins/css/swipper.css'
import '../assets/plugins/css/select2.css'
import '../css/styles.css'
import '../css/responsive.css'
import '../css/tailwind.css'
import cart1 from "../assets/images/all-img/cart-01.png";
import MiniChat from "./MiniChat";
import axios from "axios";
import Header_Menu from "./menu/Header_Menu";
import Menu_Response from "./menu/Menu_Response";
import Header_Bottom from "./menu/Header_Bottom";
import Footer from "./footer/Footer";
import Pagination from "./page/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories} from "../admin/Api/CategoryApi";
import {fetchProducts} from "../admin/Api/ProductApi";
import {setProducts} from "../admin/redux/actions/ProductActions";
import {setCurrentPage, setPageCount} from "../admin/redux/actions/CurrentPageAction";
import {formatPrice} from "../format/FormatMoney";
import {bindActionCreators} from "redux";
import {product_details} from "../api/Product_Details_Api";

const  Products = () => {
    const [isHeaderSticky, setHeaderSticky] = useState(false);
    const containerRef = useRef(null);
    const dispatch = useDispatch();
    const products = useSelector(state => state.productAdmin.products);
    const selectedCategory = useSelector(state => state.category.selectedCategory);
    const currentPage = useSelector(state => state.page.currentPage);
    const pageCount = useSelector(state => state.page.pageCount);
    const  sortOrder = useSelector(state => state.productAdmin.sortOrder);
    const  sortBy = useSelector(state => state.productAdmin.sortBy);
    const navigate = useNavigate();
    const handlePageClick = (data) => {
        dispatch(setCurrentPage(data.selected));
    };

    const {productDetailsAction} = bindActionCreators({productDetailsAction: product_details}, dispatch);
    const handleProductDetail = (id) => {
        productDetailsAction(id, () => navigate(`/product-detail?id=${id}`));

    };
    useEffect(() => {
        dispatch(fetchCategories());
        loadProducts();

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
    }, [dispatch, currentPage, selectedCategory, sortOrder, sortBy]);
    const loadProducts = async () => {
        const data = await fetchProducts({
            categoryId: selectedCategory || undefined,
            page: currentPage,
            size: 12,
            sortOrder,
            sortBy
        });
        dispatch(setProducts(data.content));
        dispatch(setPageCount(data.totalPages));

    };
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
                            <path d="M7.125 5.25L10.875 9L7.125 12.75" stroke="#636270" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <span className="text-[14px] font-medium leading-[110%] font-display text-gray-black inline-block">Shop</span>
                    </div>

                    <h2 className="pt-[13.5px] text-2xl font-semibold text-gray-black font-display">Shop</h2>
                </div>
            </div>
      


            <section className="">
                <div className="container px-3 md:px-5 xl:px-0">
                    <div className="product-list py-6">
                        <div className="product-filter flex flex-col lg:flex-row gap-y-4 gap-x-6 lg:justify-between items-center">
                            <div className="relative xl:w-[536px] w-full">
                                <input type="text" name="" id="search2" className="input-box2 bg-[#F0F2F3] px-5 py-[18px] rounded-lg focus:outline-none focus:ring-2 ring-[#029FAE] focus:bg-white transition duration-300 ease-in-out block w-full" placeholder="Search here..."/>
                                    <label htmlFor="search2" className="absolute top-[18px] right-5">
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.9881 20.6428C16.3663 20.6428 20.7262 16.2829 20.7262 10.9047C20.7262 5.52655 16.3663 1.16666 10.9881 1.16666C5.60989 1.16666 1.25 5.52655 1.25 10.9047C1.25 16.2829 5.60989 20.6428 10.9881 20.6428Z" stroke="#272343" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M17.76 18.1826L21.5777 21.9905" stroke="#272343" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </label>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="filter-history py-4 shadow-[inset_0px_1px_0px_#E1E3E6]">
                    <div className="container px-3 md:px-5 xl:px-0">
                        <div className="filter-history-list flex flex-wrap gap-y-4 justify-between items-center">

                            <div className="filter-activety flex flex-wrap gap-y-2 items-center gap-x-6">


                            </div>

                            <div className="filter-result flex gap-1 items-center">
                                <h2 className="text-[#272343] text-[16px] font-medium font-display">2,547</h2>
                                <p className="text-[#636270] text-[16px] font-medium font-display">Results found.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div  className="portfoliolist justify-center mx-auto">

                    {products.map((product) => (
                        <div className="mix all featured" data-cat="featured">
                            <div className="product-card">
                                <a onClick={() => handleProductDetail(product.productId)}>
                                    <div className="product-thumb">
                                        <img src={product.imageUrl}/>
                                        <span className="badge new"></span>
                                    </div>
                                    <div className="product-info">
                                        <div>
                                            <h2 className="product-name">{product.productName}</h2>
                                            <h3 className="product-price">{formatPrice(product.price)} VNĐ</h3>
                                        </div>
                                        <div>
                                            <button className="cart-icon">
                                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M2.52081 2.97913L4.42748 3.30913L5.31023 13.826C5.34414 14.2399 5.53284 14.6257 5.83867 14.9066C6.14451 15.1875 6.545 15.3427 6.96023 15.3413H16.9611C17.3586 15.3417 17.743 15.1986 18.0435 14.9382C18.344 14.6778 18.5403 14.3177 18.5964 13.9241L19.4672 7.91263C19.4904 7.75275 19.4819 7.58987 19.4421 7.43329C19.4023 7.27671 19.3321 7.12951 19.2354 7.00011C19.1387 6.8707 19.0174 6.76163 18.8785 6.67913C18.7396 6.59663 18.5858 6.54231 18.4259 6.51929C18.3672 6.51288 4.73365 6.50829 4.73365 6.50829"
                                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round"/>
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

                            </div>
                        </div>
                    ))}

                </div>

            </section>
            {/*phan trang*/}
                                  <Pagination onPageChange={handlePageClick} pageCount={pageCount}/>
            {/*footer*/}
            <Footer/>
            <MiniChat/>
        </div>
  
    );
}
export default Products ;