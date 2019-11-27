import React from 'react';
import './SvgSprite.scss';
import PropTypes, { InferProps } from 'prop-types';
import sprite from './../../../assets/svgs/sprite.svg';
import classes from 'react-style-classes';

const SvgSpriteProps = {
    icon: PropTypes.string.isRequired,
    color: PropTypes.oneOf(['primary', 'secondary', 'blank']),
    className: PropTypes.string,
    rotate: PropTypes.oneOf(['90', '180', '270']),
};
type SvgSpritePropsTypes = InferProps<typeof SvgSpriteProps>;

const SvgSprite: React.FC<SvgSpritePropsTypes> = ({ icon, className, color, rotate }) => {
    const iconClasses = className
        ? className
        : classes('icon', color && `icon--${color}`, rotate && `icon--rotate${rotate}`);

    return (
        <svg className={iconClasses}>
            <use xlinkHref={`${sprite}#icon-${icon}`} />
        </svg>
    );
};

export default SvgSprite;
