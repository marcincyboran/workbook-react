import React from 'react';
import './FieldCheckbox.scss';
import classes from 'react-style-classes';

type FieldCheckboxProps = {
    getFieldProps: { [key: string]: any };
    className?: string;
};

const FieldCheckbox: React.FC<FieldCheckboxProps> = ({ children, className, getFieldProps }) => {
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
