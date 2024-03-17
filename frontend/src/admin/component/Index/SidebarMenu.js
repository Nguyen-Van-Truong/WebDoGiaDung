import React from 'react';
import { MenuItem } from './MenuItem';

export const SidebarMenu = () => {
    const menuItems = [
        { id: 1, title: "Bảng điều khiển", icon: "icofont-home", link: "index.html" },
        {
            id: 2,
            title: "Sản phẩm",
            icon: "icofont-truck-loaded",
            subItems: [
                { title: "Danh sách sản phẩm", link: "product-list.html" },
                { title: "Chỉnh sửa sản phẩm", link: "product-edit.html" },
                { title: "Thêm sản phẩm", link: "product-add.html" }
            ]
        },
        {
            id: 3,
            title: "Đơn hàng",
            icon: "icofont-notepad",
            subItems: [
                { title: "Danh sách đơn hàng", link: "order-list.html" },
                { title: "Chi tiết đơn hàng", link: "order-details.html" },
                { title: "Hoá đơn đặt hàng", link: "order-invoices.html" }
            ]
        },
        {
            id: 4,
            title: "Khách hàng",
            icon: "icofont-funky-man",
            subItems: [
                { title: "Danh sách khách hàng", link: "customers.html" },
                { title: "Chi tiết khách hàng", link: "customer-detail.html" }
            ]
        },
        {
            id: 5,
            title: "Khuyến mãi",
            icon: "icofont-sale-discount",
            subItems: [
                { title: "Danh sách mã giảm giá", link: "coupons-list.html" },
                { title: "Thêm mã sản phẩm", link: "coupon-add.html" }
            ]
        },
        {
            id: 6,
            title: "App",
            icon: "icofont-code-alt",
            subItems: [
                { title: "Chat App", link: "chat.html" }
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
