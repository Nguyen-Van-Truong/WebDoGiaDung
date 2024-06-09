import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/ebazar.style.min.css'
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {changeLanguage} from "../../redux/languageSlice";
import '../assets/css/main.css'
import alert from "bootstrap/js/src/alert";
import {check_click_app} from "../../redux/MessageActions";



export const MenuItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const check_click = useSelector(state => state.message.check_click);
    const toggleSubItems = (e) => {
        if (hasSubItems) {
            e.preventDefault(); // Prevent default if it's not a direct link
            setIsOpen(!isOpen); // Toggle the open state
        }
    };

    const handleSubItemClick = (subItem) => {
        if (subItem.link === '/chat') {

        }
    };

    return (
        <li className={`collapsed ${isOpen ? 'open' : ''}`}>
            <a href={item.link || '#'} className="m-link" onClick={toggleSubItems}>
                <i className={`${item.icon} fs-5`}></i> <span>{t(item.title)}</span>
                {hasSubItems && <span className="arrow icofont-rounded-down ms-auto text-end fs-5"></span>}
            </a>
            {hasSubItems && (
                <ul className={`sub-menu ${isOpen ? 'show' : ''}`}>
                    {item.subItems.map((subItem, index) => (
                        <li key={index}>
                            <Link to={subItem.link} className="ms-link" onClick={() => handleSubItemClick(subItem)}>
                                {t(subItem.title)}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};


export const SidebarMenu = () => {
    const dispatch = useDispatch();
    const { i18n } = useTranslation();
    const { t } = useTranslation();
    const handleLanguageChange = (lng) => {
        dispatch(changeLanguage(lng));
    };
    const menuItems = [
        { id: 1, title: 'dashboard', icon: 'icofont-home', link: '/index-admin' },
        {
            id: 2,
            title: 'products',
            icon: 'icofont-truck-loaded',
            subItems: [
                { title: 'productList', link: '/product-list' },
                { title: 'addProduct', link: '/product-add' },
            ],
        },
        {
            id: 3,
            title: 'orders',
            icon: 'icofont-notepad',
            subItems: [{ title: 'orderList', link: '/order-list' }],
        },
        {
            id: 4,
            title: 'customers',
            icon: 'icofont-funky-man',
            subItems: [{ title: 'customerList', link: '/customers' }],
        },
        {
            id: 5,
            title: 'promotions',
            icon: 'icofont-sale-discount',
            subItems: [
                { title: 'discountCodeList', link: '/coupons-list' },
                { title: 'addDiscountCode', link: '/coupon-add' },
            ],
        },
        {
            id: 6,
            title: 'app',
            icon: 'icofont-code-alt',
            subItems: [{ title: 'chatApp', link: '/chat' }],
        },
    ];

    return (
        <div>
            <div className="language-selector  m-lag">
                <label className={"color-lag"}>{t('language')}:</label>
                <select
                    onChange={(e) => handleLanguageChange(e.target.value)}
                    defaultValue={i18n.language}>
                    <option value="en">English</option>
                    <option value="vi">Tiếng Việt</option>
                </select>
            </div>
            <ul className="menu-list flex-grow-1 mt-3">
                {menuItems.map((item) => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </ul>
        </div>
    );
};