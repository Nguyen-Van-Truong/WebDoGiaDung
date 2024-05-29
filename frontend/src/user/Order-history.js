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
import {useDispatch, useSelector} from "react-redux";
import {history} from "../api/HistoryCartApi";
import {formatPrice} from "../format/FormatMoney";
import Header_Top from "./menu/Header_Top";
import {useTranslation} from "react-i18next";

const Order_History= () => {
    const [isHeaderSticky, setHeaderSticky] = useState(false);
   const  list =useSelector(state => state.history.ListHistoryCart);
    const  user_id =useSelector(state => state.appUser.user_id);
    const dispatch = useDispatch();
    const { t } = useTranslation();
    /**
     * chuyen doi ngay gio
     */
    function formatDateTime(dateString) {
        const date = new Date(dateString);
        const options = {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
            hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
        };
        return new Intl.DateTimeFormat('vi-VN', options).format(date);
    }
    useEffect(() => {

     dispatch(history(user_id));

    }, []);
    return (
        <div className="font-display">
    
        <Header_Top/>
          
            <section  style={{backgroundColor: "var(--bg-breadcum)"}}>
                <div className="container">

                    <div className="shopping-cart-wrapper pt-10 pb-20 flex items-start gap-6">

                        <div className="shopping-cart w-full" >
                            <div className="px-6 py-6 overflow-x-auto">
                                <table className="min-w-[1270px] w-full leading-normal">
                                    <thead>
                                    <tr>
                                        <th className="pb-6 border-b border-[#E1E3E6] text-left text-xs font-semibold text-[#272343] uppercase tracking-wider w-[160px]">
                                            {t('orderId')}
                                        </th>
                                        <th className="pb-6 border-b border-[#E1E3E6] text-left text-xs font-semibold text-[#272343] uppercase tracking-wider w-[160px]">
                                            {t('productImage')}
                                        </th>
                                        <th className="pb-6 border-b border-[#E1E3E6] text-left text-xs font-semibold text-[#272343] uppercase tracking-wider w-[200px]">
                                            {t('date')}
                                        </th>
                                        <th className="pb-6 border-b border-[#E1E3E6] text-left text-xs font-semibold text-[#272343] uppercase tracking-wider w-[160px]">
                                            {t('totalProducts')}
                                        </th>
                                        <th className="pb-6 border-b border-[#E1E3E6] text-left text-xs font-semibold text-[#272343] uppercase tracking-wider w-[140px]">
                                            {t('price')}
                                        </th>
                                        <th className="pb-6 border-b border-[#E1E3E6] text-left text-xs font-semibold text-[#272343] uppercase tracking-wider w-[120px]">
                                            {t('status')}
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    {list.map((history) => (
                                        <tr>
                                            <td className="py-6 text-sm">
                                                <span className="text-dark-accent stext-[14px] font-display leading-[120%] ">#{history.id_cart}</span>
                                            </td>
                                            <td>
                                                <div className="w-[70px] h-[70px]">
                                                    <img className="w-full h-full rounded-lg" src={history.url} alt="" />
                                                </div>

                                            </td>
                                            <td className="py-6 text-sm">
                                                <p className="mb-0">{formatDateTime(history.date)}</p>
                                            </td>
                                            <td className="py-6 text-sm">
                                                <p>{history.quantity}</p>
                                            </td>
                                            <td className="py-6 text-sm">
                                                <p>{formatPrice(history.price)} VNĐ</p>
                                            </td>
                                            { history.status === "ACTIVE" &&
                                                <td className="py-6 text-sm">
                                                    <button className="btn-warning px-3 py-2 text-[#F5813F] text-[14px] leading-[120%] font-display">Đang xử lí</button>
                                                </td>

                                            }
                                            { history.status === "INACTIVE" &&
                                                <td className="py-6 text-sm">
                                                    <button className="btn-danger px-3 py-2 text-[#636270]] text-[14px] leading-[120%] font-display">Đã huỷ </button>
                                                </td>

                                            }
                                            { history.status === "CHECKED_OUT" &&
                                                <td className="py-6 text-sm">
                                                    <button className="btn-primary px-3 py-2 text-[#636270]] text-[14px] leading-[120%] font-display"> Đơn hàng đã thanh toán </button>
                                                </td>

                                            }

                                        </tr>
                                    ))}
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