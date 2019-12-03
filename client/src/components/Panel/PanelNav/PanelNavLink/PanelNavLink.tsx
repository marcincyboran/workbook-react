import React from 'react';
import './PanelNavLink.scss';
import classes from 'react-style-classes';
import { NavLink } from 'react-router-dom';
import SvgSprite from '../../../UI/SvgSprite/SvgSprite';

type NavLinkProps = {
    to: string;
    icon?: string;
    disabled?: boolean;
    exact?: boolean;
};

const PanelNavLink: React.FC<NavLinkProps> = ({ children, disabled, to, icon, exact }) => {
    const linkClasses = classes('panel__nav-item', disabled && 'disabled');

    return (
        <li className={linkClasses}>
            <NavLink className="panel__nav-link" to={to} activeClassName="active" exact={exact ? exact : false}>
                <span>{children}</span>
                {icon && <SvgSprite icon={icon} className="" />}
            </NavLink>
        </li>
    );
};

export default PanelNavLink;
