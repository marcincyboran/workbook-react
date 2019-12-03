import React from 'react';
import './List.scss';
import ListItem from './ListItem/ListItem';
import classes from 'react-style-classes';

type ListProps = {
    items: string[];
    type?: 'reversed' | '';
    addClass?: string;
};

const List: React.FC<ListProps> = ({ items, type, addClass }) => {
    const listClasses = classes('u-list', type && `u-list--${type}`, addClass);
    const listItems = items.map((el: any) => (
        <ListItem key={el} type="normal">
            {el}
        </ListItem>
    ));

    return <ul className={listClasses}>{listItems}</ul>;
};

export default List;
