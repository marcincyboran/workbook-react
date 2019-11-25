import React from 'react';
import './Button.scss';
import PropTypes, { InferProps } from 'prop-types';
import SvgSprite from './../SvgSprite/SvgSprite';
import classes from 'react-style-classes';

const ButtonProps = {
    link: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['big']),
    color: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
    icon: PropTypes.string,
    className: PropTypes.string,
    rotateIcon: PropTypes.oneOf(['90', '180', '270']),
};
type ButtonPropsType = InferProps<typeof ButtonProps>;

const Button: React.FC<ButtonPropsType> = ({ link, children, size, color, icon, className, rotateIcon }) => {
    const buttonClasses = classes(
        'button',
        className,
        color && `button--${color}`,
        size && `button--${size}`,
        icon && `button--icon`
    );
    return (
        <a href={link} className={buttonClasses}>
            <span>{children}</span>
            {icon && <SvgSprite icon={icon as string} rotate={rotateIcon ? rotateIcon : null} />}
        </a>
    );
};

export default Button;
