// D:\intellji\ettshop\Truong\eTTShop\frontend\src\admin\component\Sidebar.js
import React from 'react';
import { BrandIcon } from './BrandIcon';
import { SidebarMenu } from './SidebarMenu';

const Sidebar = () => {
    return (
        <div className="sidebar px-4 py-4 py-md-4 me-0">
            <div className="d-flex flex-column h-100">
                <BrandIcon />
                <SidebarMenu />
                <button type="button" className="btn btn-link sidebar-mini-btn text-light">
                    <span className="ms-2"><i className="icofont-bubble-right"/></span>
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
