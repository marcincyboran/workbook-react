import React from 'react';
import './Form.scss';
import classes from 'react-style-classes';
import PropTypes, { InferProps } from 'prop-types';

const FormProp = {
    addClass: PropTypes.string,
};
type FormPropsTypes = InferProps<typeof FormProp>;

const Form: React.FC<FormPropsTypes> = ({ children, addClass }) => {
    return <form className={classes('form', addClass)}>{children}</form>;
};

export default Form;
