import React from 'react';
import classes from 'react-style-classes';
import SvgSprite from './../../UI/SvgSprite/SvgSprite';

type FieldTextProps = {
    getFieldProps: { [key: string]: any };
    label: string;
    type: 'text' | 'password' | 'email' | 'textarea' | 'number';
    errors: string;
    touched: boolean;
    placeholder?: string;
    required?: boolean;
    textarea?: boolean;
};

const FieldText: React.FC<FieldTextProps> = ({
    type,
    label,
    getFieldProps,
    errors,
    touched,
    required,
    placeholder,
}) => {
    const labelClasses = classes('form__label', required && 'form__label--required');
    const blockClasses = classes('form__block', errors && touched && 'error', !errors && touched && 'valid');

    return type === 'textarea' ? (
        <div className={blockClasses}>
            {label && (
                <label className={labelClasses} htmlFor={getFieldProps.name}>
                    {label}
                </label>
            )}
            <textarea
                className="form__input form__input--textarea"
                id={getFieldProps.name}
                name={getFieldProps.name}
                {...getFieldProps}
                placeholder={placeholder ? placeholder : ''}
            />
            <SvgSprite className="form__valid-icon" icon="check" />
            <span className="form__input-error">{errors}</span>
        </div>
    ) : (
        <div className={blockClasses}>
            {label && (
                <label className={labelClasses} htmlFor={getFieldProps.name}>
                    {label}
                </label>
            )}
            <input
                className="form__input"
                id={getFieldProps.name}
                name={getFieldProps.name}
                type={type}
                {...getFieldProps}
                placeholder={placeholder ? placeholder : ''}
            />
            <SvgSprite className="form__valid-icon" icon="check" />
            <span className="form__input-error">{errors}</span>
        </div>
    );
};

export default FieldText;
