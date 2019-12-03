import React from 'react';
import './FormGroup.scss';
import classes from 'react-style-classes';

type FormGroupProps = {
    type?: 'submit' | 'full' | 'checkbox';
    className?: string;
};

const FormGroup: React.FC<FormGroupProps> = ({ children, type, className }) => {
    const formGroupClasses = classes('form__group', type && `form__group--${type}`, className);

    return <div className={formGroupClasses}>{children}</div>;
};

export default FormGroup;
