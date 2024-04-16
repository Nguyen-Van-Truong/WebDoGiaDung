import {Link} from "react-router-dom";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setIsMenu, setUserMin, toggleMenuOpen} from "../../redux/Action";


const Menu_Response = () => {
    const dispatch = useDispatch();
    const menuOpen = useSelector((state) => state.appUser.menuOpen);
    const isUserMin = useSelector((state) => state.appUser.isUserMin);
    const isMenu = useSelector((state) => state.appUser.isMenu);
    const isCategory = useSelector((state) => state.appUser.isCategory);
    const handClickUserMin = () => {
        dispatch(setUserMin(!isUserMin))
    }
    const handleCloseClick = () => {
        dispatch(toggleMenuOpen());
        dispatch(setIsMenu(!isMenu));
    };
    const handClickMenu = () => {
        dispatch(setIsMenu(!isMenu));
        dispatch(setUserMin(isUserMin));
        dispatch((setCategory(!isCategory)));
        console.log("trang thai" + !isCategory)
    };
    const handCategory = () => {
        dispatch(setIsMenu(!isMenu));
        dispatch((setCategory(!isCategory)));
        console.log("trang thai 1" + !isCategory)
    };
    const clickAll = () => {

        dispatch(setIsMenu(!isMenu));
        dispatch(setUserMin(isUserMin));
        dispatch((setCategory(!isCategory)));
    }
    return (
        <div>
            <div className={menuOpen ? 'nav-menu open' : 'nav-menu'}>
                {menuOpen && (
                    <div className="flex justify-between  items-center px-3 py-4 mb-4">
                        <div>
                            <a href="#">
                                <img src="../assets/images/all-img/logo-sm.png" alt=""/>
                            </a>
                        </div>
                        <ul className="flex items-center gap-3">
                            <li>
                                <a href="#" className="inline-flex gap-2 bg-white rounded-lg p-[11px] relative">
                            <span>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.52087 2.97916L4.42754 3.30916L5.31029 13.8261C5.3442 14.2399 5.5329 14.6258 5.83873 14.9066C6.14457 15.1875 6.54506 15.3427 6.96029 15.3413H16.9611C17.3587 15.3418 17.7431 15.1986 18.0436 14.9383C18.344 14.6779 18.5404 14.3178 18.5965 13.9242L19.4673 7.91266C19.4905 7.75279 19.482 7.58991 19.4422 7.43333C19.4024 7.27675 19.3322 7.12955 19.2354 7.00015C19.1387 6.87074 19.0175 6.76167 18.8786 6.67917C18.7397 6.59667 18.5859 6.54235 18.426 6.51933C18.3673 6.51291 4.73371 6.50833 4.73371 6.50833"
                                        stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                    <path d="M12.948 9.89542H15.4899" stroke="#272343" stroke-width="1.5"
                                          stroke-linecap="round" stroke-linejoin="round"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M6.55786 18.5194C6.62508 18.5165 6.69219 18.5273 6.75515 18.551C6.81811 18.5748 6.87562 18.611 6.9242 18.6575C6.97279 18.7041 7.01145 18.76 7.03787 18.8219C7.06428 18.8837 7.0779 18.9503 7.0779 19.0176C7.0779 19.0849 7.06428 19.1515 7.03787 19.2134C7.01145 19.2753 6.97279 19.3312 6.9242 19.3777C6.87562 19.4243 6.81811 19.4605 6.75515 19.4842C6.69219 19.508 6.62508 19.5187 6.55786 19.5158C6.42942 19.5103 6.30808 19.4554 6.21914 19.3626C6.13021 19.2698 6.08057 19.1462 6.08057 19.0176C6.08057 18.8891 6.13021 18.7655 6.21914 18.6726C6.30808 18.5798 6.42942 18.5249 6.55786 18.5194Z"
                                          fill="#272343" stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                          d="M16.8988 18.5194C17.0312 18.5194 17.1583 18.5721 17.252 18.6657C17.3457 18.7594 17.3983 18.8865 17.3983 19.019C17.3983 19.1515 17.3457 19.2786 17.252 19.3723C17.1583 19.4659 17.0312 19.5186 16.8988 19.5186C16.7663 19.5186 16.6392 19.4659 16.5455 19.3723C16.4518 19.2786 16.3992 19.1515 16.3992 19.019C16.3992 18.8865 16.4518 18.7594 16.5455 18.6657C16.6392 18.5721 16.7663 18.5194 16.8988 18.5194Z"
                                          fill="#272343" stroke="#272343" stroke-width="1.5" stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                </svg>
                            </span>
                                    <span
                                        className="bg-dark-accents absolute -top-1 right-0 text-white rounded-full px-2 py-1.5 inline-flex justify-center items-center text-[10px] leading-[100%]">2</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="bg-white text-gray-black flex hover:text-[#007580] rounded-lg p-[11px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" className="feather feather-bell">
                                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                                        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                                    </svg>

                                </a>
                            </li>
                            <li className="relative">
                                <button
                                    className="bg-white text-gray-black hover:text-[#007580] rounded-lg p-[11px] user-profile"
                                    onClick={handClickUserMin}>
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M10.9862 14.0672C7.44053 14.0672 4.4137 14.6034 4.4137 16.7503C4.4137 18.8971 7.42128 19.4526 10.9862 19.4526C14.5309 19.4526 17.5587 18.9154 17.5587 16.7695C17.5587 14.6236 14.5502 14.0672 10.9862 14.0672V14.0672Z"
                                              stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                              stroke-linejoin="round"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M10.9862 11.0055C11.8195 11.0055 12.634 10.7584 13.3268 10.2955C14.0197 9.83255 14.5597 9.17457 14.8785 8.40475C15.1974 7.63492 15.2808 6.78783 15.1183 5.97058C14.9557 5.15334 14.5545 4.40266 13.9653 3.81346C13.3761 3.22426 12.6254 2.82301 11.8081 2.66045C10.9909 2.49789 10.1438 2.58132 9.37397 2.9002C8.60415 3.21907 7.94617 3.75906 7.48324 4.45188C7.02031 5.14471 6.77322 5.95925 6.77322 6.7925C6.76932 7.90581 7.20779 8.97508 7.99218 9.76515C8.77657 10.5552 9.84266 11.0014 10.956 11.0055H10.9862Z"
                                              stroke="currentColor" stroke-width="1.429" stroke-linecap="round"
                                              stroke-linejoin="round"/>
                                    </svg>
                                </button>
                                <div className="profile-content">

                                    {(isUserMin &&
                                        <ul style={{display: isUserMin ? 'block' : 'none'}}>
                                            <li>
                                                <Link to="/login" onClick={clickAll}>Đăng nhập</Link>
                                            </li>
                                            <li>
                                                <Link to={"/register"} onClick={clickAll}>Đăng kí</Link>
                                            </li>

                                        </ul>
                                    )}

                                </div>
                            </li>
                            <li>
                        <span
                            className="hamburger-btn-close bg-[#F7F7F9] text-black w-[44px] h-[44px] rounded-full flex items-center justify-center"
                            id="hamburger-btn-close" onClick={handleCloseClick}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 1L1 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round"></path>
                                <path d="M1 1L11 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round"></path>
                            </svg>
                        </span>
                            </li>
                        </ul>
                    </div>
                )}

                <div className="px-3 mb-4">
                    <div className="lg:max-w-[413px] w-full">
                        <div className="relative">
                            <input type="text" placeholder="search here..."
                                   className="block w-full bg-grayscales-500 focus:outline-none border-0 px-4 py-3 rounded-lg"/>
                            <span className="absolute right-4 top-3">
                            <svg width="23" height="22" viewBox="0 0 23 22" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.5833 17.4167C14.6334 17.4167 17.9167 14.1334 17.9167 10.0833C17.9167 6.03325 14.6334 2.75 10.5833 2.75C6.53325 2.75 3.25 6.03325 3.25 10.0833C3.25 14.1334 6.53325 17.4167 10.5833 17.4167Z"
                                    stroke="#272343" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M19.75 19.25L15.7625 15.2625" stroke="#272343" stroke-width="1.5"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        </div>
                    </div>
                </div>

                <div>
                    <nav className="tabs flex flex-row">
                        <button data-target="panel-1" onClick={handClickMenu}
                                className={isMenu ? 'tab rounded-none w-1/2 text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500 active' : 'tab rounded-none w-1/2 text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500'}>
                            Menu
                        </button>
                        <button data-target="panel-2" onClick={handCategory}
                                className={isCategory ? 'tab rounded-none w-1/2 text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500 active' : 'tab rounded-none w-1/2 text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500'}>
                            Danh mục
                        </button>
                    </nav>
                </div>

                <div id="panels">
                    {(isMenu &&
                        <div className={isMenu ? 'panel-1 tab-content active' : 'panel-1 tab-content active'}>
                            <ul className="flex flex-col items-center">
                                <li className="w-full block">
                                    <a href="" className="border-b border-[#029FAE] block px-3 py-2">Trang chủ</a>
                                </li>
                                <li className="w-full block">
                                    <a href="" className="border-b border-[#029FAE] block px-3 py-2">Shop</a>
                                </li>
                                <li className="w-full block">
                                    <a href="" className="border-b border-[#029FAE] block px-3 py-2">Sản phẩm</a>
                                </li>

                            </ul>
                        </div>
                    )}
                    {(isCategory &&
                        <div className={isCategory ? 'panel-2 tab-content active' : 'panel-2 tab-content py-5'}>
                            <ul>
                                <li>
                                    <a href="#" className="border-b border-[#029FAE] block px-3 py-2">Bàn ghế</a>
                                </li>
                                <li>
                                    <a href="#" className="border-b border-[#029FAE] block px-3 py-2">Bếp điện
                                        từ</a>
                                </li>
                                <li>
                                    <a href="#" className="border-b border-[#029FAE] block px-3 py-2">Nồi cơm</a>
                                </li>
                                <li>
                                    <a href="#" className="border-b border-[#029FAE] block px-3 py-2">Tủ lạnh</a>
                                </li>
                                <li>
                                    <a href="#" className="border-b border-[#029FAE] block px-3 py-2">Quạt</a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className={menuOpen ? 'overlay open' : 'overlay'} id="overlay"></div>
        </div>
    )
}
export default Menu_Response;