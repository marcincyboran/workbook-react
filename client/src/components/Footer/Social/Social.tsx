import React from 'react';
import classes from 'react-style-classes';
import './Social.scss';
import PropsTypes, { InferProps } from 'prop-types';
import SvgSprite from './../../UI/SvgSprite/SvgSprite';

const SocialProps = {
    link: PropsTypes.string.isRequired,
    type: PropsTypes.oneOf(['facebook', 'twitter', 'youtube', 'linkedin']).isRequired,
    disabled: PropsTypes.bool,
};
type SocialPropsTypes = InferProps<typeof SocialProps>;

const Social: React.FC<SocialPropsTypes> = ({ link, type, disabled = false }) => {
    const linkHref: string = !disabled ? link : '#';
    const linkClasses: string = classes('f-social', `f-social--${type}`, disabled && 'f-social--noactive');

    return (
        <a href={linkHref} className={linkClasses} title={`Odwiedź nas - ${type}`}>
            <SvgSprite icon={type} customClass="f-social__icon" />
        </a>
    );
};

export default Social;
