import React from 'react';
import './FormGroup.scss';
import PropTypes, { InferProps } from 'prop-types';
import classes from 'react-style-classes';

const FormGroupProps = {
    type: PropTypes.oneOf(['submit', 'full']),
    className: PropTypes.string,
};
type FormGroupPropsTypes = InferProps<typeof FormGroupProps>;

const FormGroup: React.FC<FormGroupPropsTypes> = ({ children, type, className }) => {
    const formGroupClasses = classes('form__group', type && `form__group--${type}`, className);

    return <div className={formGroupClasses}>{children}</div>;
};

export default FormGroup;
