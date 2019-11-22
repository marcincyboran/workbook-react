import React from 'react';
import './List.scss';
import PropTypes, { InferProps } from 'prop-types';
import ListItem from './ListItem/ListItem';
import classes from 'react-style-classes';

const ListProps = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    type: PropTypes.oneOf(['reversed']),
    addClass: PropTypes.string,
};
type ListPropsTypes = InferProps<typeof ListProps>;

const List: React.FC<ListPropsTypes> = ({ items, type, addClass }) => {
    const listClasses = classes('u-list', type && `u-list--${type}`, addClass);
    const listItems = items.map((el: any) => (
        <ListItem key={el} type="normal">
            {el}
        </ListItem>
    ));

    return <ul className={listClasses}>{listItems}</ul>;
};

export default List;
