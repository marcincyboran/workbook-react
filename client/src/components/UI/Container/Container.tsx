import React from 'react';
import './Container.scss';
import classes from 'react-style-classes';
import PropTypes, { InferProps } from 'prop-types';

const ContainerProp = {
    addClass: PropTypes.string,
};
type ContainerPropsTypes = InferProps<typeof ContainerProp>;

const Container: React.FC<ContainerPropsTypes> = ({ children, addClass }) => {
    return <div className={classes('container', addClass)}>{children}</div>;
};

export default Container;
