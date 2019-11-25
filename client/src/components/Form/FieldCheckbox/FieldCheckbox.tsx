import React from 'react';
import './FieldCheckbox.scss';
import PropTypes, { InferProps } from 'prop-types';
import classes from 'react-style-classes';

const FieldCheckboxProps = {
    className: PropTypes.string,
    getFieldProps: PropTypes.objectOf(PropTypes.any).isRequired,
};
type FieldCheckboxPropsTypes = InferProps<typeof FieldCheckboxProps>;

const FieldCheckbox: React.FC<FieldCheckboxPropsTypes> = ({ children, className, getFieldProps }) => {
    const blockClasses = classes('form__block', 'form__block--checkbox', className);

    return (
        <div className={blockClasses}>
            <label className="form__label form__label--checkbox">
                <input type="checkbox" checked={getFieldProps.value} className="form__checkbox" {...getFieldProps} />
                <span className="form__checkmark"></span>
                <span>{children}</span>
            </label>
        </div>
    );
};

export default FieldCheckbox;
