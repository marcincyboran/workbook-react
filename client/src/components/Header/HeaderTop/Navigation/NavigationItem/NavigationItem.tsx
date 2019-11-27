import React from 'react';
import './NavigationItem.scss';
import PropTypes, { InferProps } from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavigationItemPropsTypes = {
    link: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
};
type NavigationItemProps = InferProps<typeof NavigationItemPropsTypes>;

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
