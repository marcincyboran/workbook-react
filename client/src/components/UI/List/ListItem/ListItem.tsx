import React from 'react';
import './ListItem.scss';
import SvgSprite from './../../SvgSprite/SvgSprite';
import classes from 'react-style-classes';

type ListItemProps = {
    type?: string;
    customIcon?: string;
    iconColor?: 'primary' | 'secondary' | 'tertiary';
};

const ListItem: React.FC<ListItemProps> = ({ children, type, customIcon, iconColor = 'primary' }) => {
    const itemClasses = classes('u-list__item', type && `u-list__item--${type}`, customIcon && 'u-list__item--custom');

    return (
        <li className={itemClasses}>
            <SvgSprite icon={customIcon ? customIcon : 'chevron-down'} color={iconColor} size="small" />
            {children}
        </li>
    );
};

export default ListItem;
