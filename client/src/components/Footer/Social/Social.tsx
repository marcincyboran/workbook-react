import React from 'react';
import classes from 'react-style-classes';
import './Social.scss';
import sprite from './../../../assets/svgs/sprite.svg';

interface socialProps {
    link: string;
    type: 'facebook' | 'twitter' | 'youtube' | 'linkedin';
    disabled?: boolean;
}

const Social: React.FC<socialProps> = ({ link, type, disabled = false }) => {
    const linkHref: string = !disabled ? link : '#';
    const linkClasses: string = classes('f-social', `f-social--${type}`, disabled && 'f-social--noactive');

    return (
        <a href={linkHref} className={linkClasses} title={`Odwiedź nas - ${type}`}>
            <svg className="f-social__icon">
                <use xlinkHref={`${sprite}#icon-${type}`} />
            </svg>
        </a>
    );
};

export default Social;
