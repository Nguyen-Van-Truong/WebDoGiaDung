import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/ebazar.style.min.css'

export const MenuItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasSubItems = item.subItems && item.subItems.length > 0;

    const toggleSubItems = (e) => {
        if (hasSubItems) {
            e.preventDefault(); // Prevent default if it's not a direct link
            setIsOpen(!isOpen); // Toggle the open state
        }
    };

    return (
        <li className={`collapsed ${isOpen ? "open" : ""}`}>
            {/* Use button or div instead of 'a' if 'item.link' is not supposed to navigate directly */}
            <a href={item.link || "#"} className="m-link" onClick={toggleSubItems}>
                <i className={`${item.icon} fs-5`}></i> <span>{item.title}</span>
                {hasSubItems && <span className="arrow icofont-rounded-down ms-auto text-end fs-5"></span>}
            </a>
            {hasSubItems && (
                <ul className={`sub-menu ${isOpen ? "show" : ""}`}>
                    {item.subItems.map((subItem, index) => (
                        <li key={index}>
                            <Link to={subItem.link} className="ms-link">{subItem.title}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export const SidebarMenu = () => {
    const menuItems = [
        { id: 1, title: "Bảng điều khiển", icon: "icofont-home", link: "/index-admin" },
        {
            id: 2,
            title: "Sản phẩm",
            icon: "icofont-truck-loaded",
            subItems: [
                { title: "Danh sách sản phẩm", link: "/product-list" },
                // { title: "Chỉnh sửa sản phẩm", link: "/product-edit" },
                { title: "Thêm sản phẩm", link: "/product-add" }
            ]
        },
        {
            id: 3,
            title: "Đơn hàng",
            icon: "icofont-notepad",
            subItems: [
                { title: "Danh sách đơn hàng", link: "/order-list" },
            ]
        },
        {
            id: 4,
            title: "Khách hàng",
            icon: "icofont-funky-man",
            subItems: [
                { title: "Danh sách khách hàng", link: "/customers" },
            ]
        },
        {
            id: 5,
            title: "Khuyến mãi",
            icon: "icofont-sale-discount",
            subItems: [
                { title: "Danh sách mã giảm giá", link: "/coupons-list" },
                { title: "Thêm mã sản phẩm", link: "/coupon-add" }
            ]
        },
        {
            id: 6,
            title: "App",
            icon: "icofont-code-alt",
            subItems: [
                { title: "Chat App", link: "/chat" }
            ]
        },
    ];

    return (
        <ul className="menu-list flex-grow-1 mt-3">
            {menuItems.map(item => (
                <MenuItem key={item.id} item={item} />
            ))}
        </ul>
    );
};
