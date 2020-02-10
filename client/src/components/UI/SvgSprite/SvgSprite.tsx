import React from 'react';
import './SvgSprite.scss';
import sprite from './../../../assets/svgs/sprite.svg';
import classes from 'react-style-classes';

type SvgSpriteProps = {
    icon: string;
    color?: 'primary' | 'secondary' | 'tertiary' | 'blank' | 'dark';
    className?: string;
    rotate?: '90' | '180' | '270';
    size?: 'small' | 'big';
    title?: string;
    onClick?: (x: any) => any;
};

const SvgSprite: React.FC<SvgSpriteProps> = ({ icon, className, color, rotate, title, size }) => {
    const iconClasses = className
        ? className
        : classes('icon', color && `icon--${color}`, rotate && `icon--rotate${rotate}`, size && `icon--${size}`);

    return (
        <svg className={iconClasses}>
            <use xlinkHref={`${sprite}#icon-${icon}`} xlinkTitle={title} />
        </svg>
    );
};

export default SvgSprite;
