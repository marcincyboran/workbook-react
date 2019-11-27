import React from 'react';
import './Form.scss';
import PropTypes, { InferProps } from 'prop-types';
import classes from 'react-style-classes';

const FormProps = {
    className: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
    useCustomError: PropTypes.bool,
};
type FormPropsTypes = InferProps<typeof FormProps>;

const Form: React.FC<FormPropsTypes> = ({ children, className, handleSubmit, errorMessage, useCustomError }) => {
    const formClasses = classes('form', className);

    return (
        <form className={formClasses} onSubmit={handleSubmit}>
            {children}
            {!useCustomError ? (
                <span className={`form__error-message ${errorMessage ? 'in' : ''}`}>{errorMessage}</span>
            ) : null}
        </form>
    );
};

export default Form;
