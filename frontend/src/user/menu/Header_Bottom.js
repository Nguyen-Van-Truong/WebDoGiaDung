import {Link} from "react-router-dom";
import React, {useState} from "react";
import {useDispatch} from "react-redux";

const Header_Bottom = () => {
    const dispatch = useDispatch();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <div className="bottom-header bg-white shadow-[0px_1px_0px_#E1E3E6] relative z-30 hidden lg:block">
            <div className="container px-3_t md:px-5 xl:px-0">
                <div className="py-3.5 flex justify-between items-center">
                    <div className="flex gap-8 items-center">
                        <div className="relative">
                            <button onClick={toggleDropdown}
                                    className="max-h-12 inline-flex items-center justify-center gap-4 py-3.5 px-5 border border-grayscales-700 rounded-md text-gray-black text-sm leading-4 font-medium font-display custom-dropdown">
         <span className="text-gray-black inline-flex">
                                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 2.5H0V0.5H18V2.5Z" fill="currentColor" />
                                        <path d="M18 8.5H0V6.5H18V8.5Z" fill="currentColor" />
                                        <path d="M18 14.5H0V12.5H18V14.5Z" fill="currentColor" />
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

                        <ul className="lg:flex gap-8 items-center hidden main-menu ulOverride ">
                            <li>
                                <Link to={"/"}>Trang chủ</Link>
                            </li>
                            <li>
                                <Link to={"/products"}>Shop</Link>

                            </li>


                        </ul>
                    </div>
                    <div>
                        <p className="ulOverride text-grayscales-900 inline-flex gap-2 items-center text-sm font-display">
                            <span>Contact:</span><span
                            className="text-secondary font-medium">0339171545</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header_Bottom