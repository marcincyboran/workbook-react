import React from 'react';
import SvgSprite from './../../SvgSprite/SvgSprite';
import classes from 'react-style-classes';

type ListItemProps = {
    type?: string;
};

const ListItem: React.FC<ListItemProps> = ({ children, type }) => {
    const itemClasses = classes('u-list__item', type && `u-list__item--${type}`);

    return (
        <li className={itemClasses}>
            <SvgSprite icon="chevron-down" color="primary" />
            {children}
        </li>
    );
};

export default ListItem;
