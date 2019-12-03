import React from 'react';
import classes from 'react-style-classes';
import './Social.scss';
import SvgSprite from './../../UI/SvgSprite/SvgSprite';

type SocialProps = {
    link: string;
    type: 'facebook' | 'twitter' | 'youtube' | 'linkedin';
    disabled?: boolean;
};

const Social: React.FC<SocialProps> = ({ link, type, disabled = false }) => {
    const linkHref: string = !disabled ? link : '#';
    const linkClasses: string = classes('f-social', `f-social--${type}`, disabled && 'f-social--noactive');

    return (
        <a href={linkHref} className={linkClasses} title={`Odwiedź nas - ${type}`}>
            <SvgSprite icon={type} className="f-social__icon" />
        </a>
    );
};

export default Social;
