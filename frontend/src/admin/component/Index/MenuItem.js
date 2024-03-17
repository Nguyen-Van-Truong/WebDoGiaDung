import React, { useState } from 'react';

export const MenuItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasSubItems = item.subItems && item.subItems.length > 0;

    const toggleSubMenu = () => {
        if(hasSubItems) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <li className={`collapsed ${isOpen ? 'show' : ''}`}>
            <a className="m-link" onClick={toggleSubMenu}>
                <i className={`${item.icon} fs-5`}/> <span>{item.title}</span>
                {hasSubItems && <span className="arrow icofont-rounded-down ms-auto text-end fs-5"/>}
            </a>
            {hasSubItems && (
                <ul className={`sub-menu collapse ${isOpen ? 'show' : ''}`}>
                    {item.subItems.map((subItem, index) => (
                        <li key={index}>
                            <a className="ms-link" href={subItem.link}>{subItem.title}</a>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};
