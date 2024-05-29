import Header_Menu from "./Header_Menu";
import Header_Bottom from "./Header_Bottom";
import Menu_Response from "./Menu_Response";
import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {changeLanguage} from "../../redux/languageSlice";
import {useDispatch} from "react-redux";

const Header_Top = () => {

    const [isHeaderSticky, setHeaderSticky] = useState(false);
    const dispatch = useDispatch();
    const { i18n } = useTranslation();

    const handleLanguageChange = (lng) => {
        dispatch(changeLanguage(lng));
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
        <header className="font-display">
            <div className={isHeaderSticky ? 'header-sticky' : ''} id="header-sticky">
                <div className="top-header bg-secondary">
                    <div className="container px-3 md:px-5 xl:px-0">
                        <div className="py-3.5 flex justify-center sm:justify-between">

                            <div>
                                <select
                                    onChange={(e) => handleLanguageChange(e.target.value)}
                                    defaultValue={i18n.language}>
                                    <option value="en">English</option>
                                    <option value="vi">Tiếng Việt</option>
                                </select>
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
    )
}
export default Header_Top