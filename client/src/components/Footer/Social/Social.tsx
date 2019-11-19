import React from 'react';
import './Social.scss';

type socialProps = {
    link: string;
    type: 'facebook' | 'twitter' | 'youtube' | 'linkedin';
    disabled?: boolean;
};

const Social: React.FC<socialProps> = ({ link, type, disabled }) => {
    return (
        <a href={!disabled ? link : '#'} className={`f-social f-social--${type}`} title={`Odwiedź nas - ${type}`}>
            <svg className={`f-social__icon ${disabled ? 'f-social--noactive' : null}`}>
                <use xlinkHref={process.env.PUBLIC_URL + `/svgs/sprite.svg#icon-${type}`} />
            </svg>
        </a>
    );
};

export default Social;
