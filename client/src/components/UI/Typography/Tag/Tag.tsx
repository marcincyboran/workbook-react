import React from 'react';
import './Tag.scss';
import classes from 'react-style-classes';

type TagProps = {
    simple?: boolean;
    size?: 'small' | 'big';
};

const Tag: React.FC<TagProps> = ({ children, simple, size }) => {
    return <span className={classes('tag', simple && 'tag--simple', size && `tag--${size}`)}>{children}</span>;
};

export default Tag;
