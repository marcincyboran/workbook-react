import React from 'react';
import './Form.scss';
import PropTypes, { InferProps } from 'prop-types';
import classes from 'react-style-classes';

const FormProps = {
    className: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
};
type FormPropsTypes = InferProps<typeof FormProps>;

const Form: React.FC<FormPropsTypes> = ({ children, className, handleSubmit }) => {
    const formClasses = classes('form', className);

    return (
        <form className={formClasses} onSubmit={handleSubmit}>
            {children}
        </form>
    );
};

export default Form;
