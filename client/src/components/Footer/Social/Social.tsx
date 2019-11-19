import React from 'react';
import classes from 'react-style-classes';
import './Social.scss';

type socialProps = {
    link: string;
    type: 'facebook' | 'twitter' | 'youtube' | 'linkedin';
    disabled?: boolean;
};

const Social: React.FC<socialProps> = ({ link, type, disabled = false }) => {
    return (
        <a
            href={!disabled ? link : '#'}
            className={classes('f-social', `f-social--${type}`, disabled && 'f-social--noactive')}
            title={`Odwiedź nas - ${type}`}
        >
            <svg className="f-social__icon">
                <use xlinkHref={`svgs/sprite.svg#icon-${type}`} />
            </svg>
        </a>
    );
};

export default Social;
