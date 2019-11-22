import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import SvgSprite from './../../SvgSprite/SvgSprite';
import classes from 'react-style-classes';

const ListItemProps = {
    type: PropTypes.string,
};
type ListItemPropsTypes = InferProps<typeof ListItemProps>;

const ListItem: React.FC<ListItemPropsTypes> = ({ children, type }) => {
    const itemClasses = classes('u-list__item', type && `u-list__item--${type}`);

    return (
        <li className={itemClasses}>
            <SvgSprite icon="chevron-down" color="primary" />
            {children}
        </li>
    );
};

export default ListItem;
