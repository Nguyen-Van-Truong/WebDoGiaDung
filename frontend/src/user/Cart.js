import $ from 'jquery';
import Swiper from "swiper";
import 'select2/dist/js/select2';
import mixitup from 'mixitup';
import React, {useState, useEffect, useRef} from 'react';
import {Link} from "react-router-dom";
import shop_cart from "../assets/images/all-img/shopping-cart-01.png";
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
import {useDispatch, useSelector} from "react-redux";
import {formatPrice} from "../format/FormatMoney";
import {setUpdateCart} from "../redux/CartAction";
import {count, getListCart, updateCart} from "../api/CartApi";
const  Cart = () => {
    const [isHeaderSticky, setHeaderSticky] = useState(false);
    const  cartList = useSelector(state => state.cart.ListCart);
    const  user_id =useSelector(state => state.appUser.user_id);
    const  countCart = useSelector(state => state.cart.countCart);
    const dispatch = useDispatch();
    // const totalQuantity = cartList.reduce((sum, item) => sum + item.quantity, 0);
    const handleMinusClick = (cart) => () => {
        const newQuantity = cart.quantity - 1 > 0 ? cart.quantity - 1 : 1; // Giữ số lượng tối thiểu là 1
        dispatch(setUpdateCart(cart.cart_item_id, newQuantity));
        dispatch(updateCart(cart.cart_item_id, newQuantity, cart.price*newQuantity))
        dispatch(count(countCart));
        dispatch(getListCart(user_id));

    };

    const handlePlusClick = (cart) => () => {
        const newQuantity = cart.quantity + 1;
        dispatch(setUpdateCart(cart.cart_item_id, newQuantity));
        dispatch(updateCart(cart.cart_item_id, newQuantity, cart.price*newQuantity))
        dispatch(count(countCart));
        dispatch(getListCart(user_id));
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
         
            <header class="font-display">
                <div id="header-sticky" class="">
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
            <div class="pt_b"   style={{backgroundColor: "var(--bg-breadcum)"}}>
                <div class="container px-3 md:px-5 xl:px-0">
                    <div class="flex items-center gap-1 py-[1.5px]">
                        <a href="#" class="text-[14px] font-normal leading-[110%] text-dark-gray">Home</a>

                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.125 5.25L10.875 9L7.125 12.75" stroke="#636270" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span class="text-[14px] font-medium leading-[110%] font-display text-gray-black inline-block">Shop</span>
                    </div>
                </div>
            </div>
            <section   style={{backgroundColor: "var(--bg-breadcum)"}}>
                <div class="container px-3 md:px-5 xl:px-0">

                    <div class="shopping-cart-wrapper pt-10 pb-20 flex lg:flex-nowrap flex-wrap-tw items-start gap-6-t">

                        <div class="shopping-cart lg:w-2/3 w-full ">
                            <div class="px-6 py-6 overflow-x-auto">

                                <table class="w-[824px] leading-normal">
                                    <thead>
                                    <tr>
                                        <th class="pb-6 border-b border-[#E1E3E6] text-left text-xs font-semibold text-[#272343] uppercase tracking-wider w-[240px]">
                                            Sản phẩm
                                        </th>
                                        <th className="pb-6 border-b border-[#E1E3E6] text-left text-xs font-semibold text-[#272343] uppercase tracking-wider w-[240px]">
                                           Tên Sản phẩm
                                        </th>
                                        <th class="pb-6 border-b border-[#E1E3E6] text-left text-xs font-semibold text-[#272343] uppercase tracking-wider w-[104px]">
                                            Giá
                                        </th>
                                        <th class="pb-6 border-b border-[#E1E3E6] text-left text-xs font-semibold text-[#272343] uppercase tracking-wider w-[164px]">
                                            Số lượng
                                        </th>
                                        <th class="pb-6 border-b border-[#E1E3E6] text-left text-xs font-semibold text-[#272343] uppercase tracking-wider w-[96px]">
                                            Tổng tiền
                                        </th>
                                        <th className="pb-6 border-b border-[#E1E3E6] text-left text-xs font-semibold text-[#272343] uppercase tracking-wider w-[96px]">

                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {cartList.map((cart) => (
                                        <tr className="cart-item">
                                            <td className="py-6 text-sm">
                                                <div className="flex gap-2 items-center">
                                                    <div className="w-[70px] h-[70px]">
                                                        <img className="w-full h-full rounded-lg" src={cart.url} alt="" />
                                                    </div>

                                                </div>
                                            </td>
                                            <td className="py-6 text-sm">
                                                <div className="ml-1">
                                                    <p className="mb-0 text-[#272343] text-sm">{cart.name}</p>
                                                </div>

                                            </td>
                                            <td className="py-6 text-sm">
                                                <p className="mb-0">{formatPrice(cart.price)} VNĐ</p>
                                            </td>
                                            <td className="py-6 text-sm">
                                                <div className="border inline-flex justify-around items-center h-[52px] w-[140px] border-[#D6D9DD] rounded-lg">
                                                    <span className="w-5 h-5 inline-flex justify-center items-center text-[#9A9CAA] pl-[14px] select-none minus" id="minus" onClick={handleMinusClick(cart)}>-</span>
                                                    <input type="text" className="text-[#272343] text-base plus_mines_input select-none" value={cart.quantity}/>
                                                    <span className="w-5 h-5 inline-flex justify-center items-center text-[#9A9CAA] pr-[14px] select-none plus"  onClick={handlePlusClick(cart)}>+</span>
                                                </div>
                                            </td>
                                            <td className="py-6 text-sm">
                                                <p>{formatPrice(cart.price)} VNĐ</p>
                                            </td>
                                            <td className="py-6 text-sm">
                                                <button type="button m_l9"
                                                        className="btn btn-outline-secondary deleterow"><i
                                                    className="icofont-ui-delete text-danger"/></button>
                                            </td>
                                        </tr>
                                    ))}


                                    </tbody>
                                </table>
                            </div>
                            <hr class="my-0"/>
                                <div class="coupon-wrap p-6-t">
                                    <input type="text" name="" id="" class="px-5-tw py-[18px] bg-[#F0F2F3] rounded-lg border-none focus:outline-none coupon-input coupon-btn w-full block focus:ring-2 ring-[#029FAE]" placeholder="Mã giảm giá"/>
                                        <button type="submit" class="bg-[#007580] hover:bg-[#272343] transition-all duration-300 inline-flex font-semibold text-gray-white coupon-btn px-6 py-[17px] rounded-lg">Áp dụng Mã Giảm Giá</button>
                                        <button class="bg-off-white text-[#272343] coupon-btn font-semibold py-[17px] px-6 rounded-lg"><a href={"/checkout-shopping"}>Đặt hàng</a></button>
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
export default Cart ;