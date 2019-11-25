import React from 'react';
import './NavigationItem.scss';
import PropTypes, { InferProps } from 'prop-types';

const NavigationItemPropsTypes = {
    href: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
};
type NavigationItemProps = InferProps<typeof NavigationItemPropsTypes>;

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
