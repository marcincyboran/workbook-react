import React from 'react';
import './NavigationItem.scss';

type NavigationItemProps = {
    href: string;
    desc: string;
};

const NavigationItem: React.FC<NavigationItemProps> = ({ href, desc }) => {
    return (
        <li className="top-nav__item">
            <a href={href} title={desc} className="top-nav__link">
                {desc}
            </a>
        </li>
    );
};

export default NavigationItem;
