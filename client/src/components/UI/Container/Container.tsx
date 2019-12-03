import React from 'react';
import './Container.scss';
import classes from 'react-style-classes';

type ContainerProp = {
    addClass?: string;
};

const Container: React.FC<ContainerProp> = ({ children, addClass }) => {
    return <div className={classes('container', addClass)}>{children}</div>;
};

export default Container;
