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
import {deleteCart} from "../api/HistoryCartApi";
import Header_Top from "./menu/Header_Top";
import {useTranslation} from "react-i18next";
import ChatbotBubble from "./component/ChatbotBubble";
import {getFullImageUrl} from "../config";
const  Cart = () => {

    const  cartList = useSelector(state => state.cart.ListCart);
    const  user_id =useSelector(state => state.appUser.user_id);
    const [localCartList, setLocalCartList] = useState([]);
    const dispatch = useDispatch();
    const  price =useSelector(state => state.details.price);
    const { t } = useTranslation();

    useEffect(() => {
        setLocalCartList(cartList);
    }, [cartList]);

    /**
     * giam san pham
     * @param cart
     * @returns {(function(): void)|*}
     */
    const handleMinusClick = (cart) => async () => {
        const newQuantity = cart.quantity - 1 > 0 ? cart.quantity - 1 : 1;
        await dispatch(setUpdateCart(cart.cart_item_id, newQuantity));

        const priceCart = cart.price;
        // Kiểm tra nếu giá trị sau khi trừ không thấp hơn giá trị price
        const newPrice = (priceCart - price) > price ? (priceCart - price) : price;
        await dispatch(updateCart(cart.cart_item_id, newQuantity, newPrice));
        await dispatch(count(user_id));
        await dispatch(getListCart(user_id));
    };
    /**
     * tang san pham
     * @param cart
     * @returns {(function(): void)|*}
     */
    const handlePlusClick = (cart) => async () => {
        const newQuantity = cart.quantity + 1;
        const newPrice = cart.price + price;
        console.log('handlePlusClick - cart:', cart);
        console.log('handlePlusClick - newQuantity:', newQuantity);
        console.log('handlePlusClick - newPrice:', newPrice);

        await dispatch(setUpdateCart(cart.cart_item_id, newQuantity));
        await dispatch(updateCart(cart.cart_item_id, newQuantity, newPrice));
        await dispatch(count(user_id));
        await dispatch(getListCart(user_id));
    };
    /**
     * xoa sp
     * @param id
     */

    const delete_Cart = async (id) => {
        await dispatch(deleteCart(id));
        setLocalCartList(localCartList.filter(item => item.id_cart !== id));
        await dispatch(getListCart(user_id));
        await dispatch(count(user_id));
    };

    useEffect(() => {

    }, [handlePlusClick, handleMinusClick]);
    return (

        <div>

            <Header_Top/>
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
                                            {t('product')}
                                        </th>
                                        <th className="pb-6 border-b border-[#E1E3E6] text-left text-xs font-semibold text-[#272343] uppercase tracking-wider w-[240px]">
                                            {t('productName')}
                                        </th>
                                        <th class="pb-6 border-b border-[#E1E3E6] text-left text-xs font-semibold text-[#272343] uppercase tracking-wider w-[104px]">
                                            {t('price')}
                                        </th>
                                        <th class="pb-6 border-b border-[#E1E3E6] text-left text-xs font-semibold text-[#272343] uppercase tracking-wider w-[164px]">
                                            {t('quantity')}
                                        </th>
                                        <th class="pb-6 border-b border-[#E1E3E6] text-left text-xs font-semibold text-[#272343] uppercase tracking-wider w-[96px]">
                                            {t('total')}
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
                                                        <img className="w-full h-full rounded-lg" src={getFullImageUrl(cart.url)} alt="" />
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
                                                <button type="button m_l9" onClick={() => delete_Cart(cart.id_cart)}
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
                                        <button type="submit" class="bg-[#007580] hover:bg-[#272343] transition-all duration-300 inline-flex font-semibold text-gray-white coupon-btn px-6 py-[17px] rounded-lg">{t('applyDiscountCode')}</button>
                                        <button class="bg-off-white text-[#272343] coupon-btn font-semibold py-[17px] px-6 rounded-lg"><a href={"/checkout-shopping"}>{t('checkout')}</a></button>
                                </div>
                        </div>


                    </div>
                </div>
            </section>

            {/*footer*/}
            <Footer/>
            <MiniChat/>
            <ChatbotBubble/>

        </div>
    );
}
export default Cart ;
