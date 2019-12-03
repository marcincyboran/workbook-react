import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';
import SvgSprite from './../SvgSprite/SvgSprite';
import classes from 'react-style-classes';

type ButtonProps = {
    link: string;
    size?: 'big' | 'small';
    color?: 'primary' | 'secondary' | 'tertiary';
    icon?: string;
    className?: string;
    rotateIcon?: '90' | '180' | '270';
};

const Button: React.FC<ButtonProps> = ({ link, children, size, color, icon, className, rotateIcon }) => {
    const buttonClasses = classes(
        'button',
        className,
        color && `button--${color}`,
        size && `button--${size}`,
        icon && `button--icon`
    );
    return (
        <Link to={link} className={buttonClasses}>
            <span>{children}</span>
            {icon && <SvgSprite icon={icon} rotate={rotateIcon} />}
        </Link>
    );
};

export default Button;
