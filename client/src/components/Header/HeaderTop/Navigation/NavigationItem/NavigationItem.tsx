import React from 'react';
import './NavigationItem.scss';
import { NavLink } from 'react-router-dom';

type NavigationItemProps = {
    link: string;
    desc: string;
};

const NavigationItem: React.FC<NavigationItemProps> = ({ link, desc }) => {
    return (
        <li className="top-nav__item">
            <NavLink className="top-nav__link" activeClassName="active" to={link} title={desc}>
                {desc}
            </NavLink>
        </li>
    );
};

export default NavigationItem;
