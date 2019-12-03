import React from 'react';
import './Form.scss';
import classes from 'react-style-classes';

type FormProps = {
    handleSubmit: () => void;
    className?: string;
    errorMessage?: string;
    useCustomError?: boolean;
};

const Form: React.FC<FormProps> = ({ children, className, handleSubmit, errorMessage, useCustomError }) => {
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
