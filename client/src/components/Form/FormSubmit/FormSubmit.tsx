import React from 'react';
import './FormSubmit.scss';
import SvgSprite from './../../UI/SvgSprite/SvgSprite';
import classes from 'react-style-classes';
import Helpers from './../../../helpers/shared';

type FormSubmitProps = {
    color: 'primary' | 'secondary' | 'tertiary' | 'white';
    custom?: 'icon' | 'big';
    icon?: boolean;
};

const FormSubmit: React.FC<FormSubmitProps> = ({ children, color, custom, icon }) => {
    const buttonClasses = classes(
        'button',
        color && `button--${color}`,
        custom && Helpers.genModsFromProp('button', custom),
        icon && 'button--icon'
    );

    return (
        <div className="form__submit-wrapper">
            <button className={buttonClasses} type="submit">
                <span>{children}</span>
                {icon && <SvgSprite icon="chevron-down" rotate="270" />}
            </button>
        </div>
    );
};

export default FormSubmit;
