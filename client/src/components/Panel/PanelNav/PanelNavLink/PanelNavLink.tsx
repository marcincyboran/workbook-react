import React from 'react';
import './PanelNavLink.scss';
import PropTypes, { InferProps } from 'prop-types';
import classes from 'react-style-classes';
import { NavLink } from 'react-router-dom';
import SvgSprite from '../../../UI/SvgSprite/SvgSprite';

const NavLinkProps = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.string,
    disabled: PropTypes.bool,
    exact: PropTypes.bool,
};
type NavLinkPropsType = InferProps<typeof NavLinkProps>;

const PanelNavLink: React.FC<NavLinkPropsType> = ({ children, disabled, to, icon, exact }) => {
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
