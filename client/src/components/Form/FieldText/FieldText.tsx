import React from 'react';
import './FieldText.scss';
import PropTypes, { InferProps } from 'prop-types';
import classes from 'react-style-classes';

const FieldTextProps = {
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'password', 'email']).isRequired,
    getFieldProps: PropTypes.objectOf(PropTypes.any).isRequired,
    errors: PropTypes.string.isRequired,
    touched: PropTypes.bool.isRequired,
    required: PropTypes.bool,
};
type FieldTextPropsTypes = InferProps<typeof FieldTextProps>;

const FieldText: React.FC<FieldTextPropsTypes> = ({ type, label, getFieldProps, errors, touched, required }) => {
    const labelClasses = classes('form__label', required && 'form__label--required');
    const blockClasses = classes('form__block', errors && touched && 'error', !errors && touched && 'valid');

    return (
        <div className={blockClasses}>
            <label className={labelClasses} htmlFor={getFieldProps.name}>
                {label}
            </label>
            <input
                className="form__input"
                id={getFieldProps.name}
                name={getFieldProps.name}
                type={type}
                {...getFieldProps}
            />
            <span className="form__input-error">{errors}</span>
        </div>
    );
};

export default FieldText;
