import React from 'react';
import './FormSubmit.scss';
import PropTypes, { InferProps } from 'prop-types';
import SvgSprite from './../../UI/SvgSprite/SvgSprite';
import classes from 'react-style-classes';
import Helpers from './../../../helpers/shared';

const props = {
    color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'white']).isRequired,
    custom: PropTypes.oneOf(['icon', 'big']),
    icon: PropTypes.bool,
};
type propsType = InferProps<typeof props>;

const FormSubmit: React.FC<propsType> = ({ children, color, custom, icon }) => {
    const buttonClasses = classes(
        'button',
        color && `button--${color}`,
        custom && Helpers.genModsFromProp('button', custom),
        icon && 'button--icon'
    );

    return (
        <div className="form__submit-wrapper">
            <button className={buttonClasses}>
                <span>{children}</span>
                {icon && <SvgSprite icon="chevron-down" rotate="270" />}
            </button>
        </div>
    );
};

export default FormSubmit;
