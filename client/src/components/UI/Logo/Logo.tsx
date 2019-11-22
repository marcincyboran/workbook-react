import React from 'react';
import './Logo.scss';
import PropTypes, { InferProps } from 'prop-types';

const LogoProps = {
    link: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['white', 'color']).isRequired,
    large: PropTypes.bool,
};
type LogoPropsTypes = InferProps<typeof LogoProps>;

const Logo: React.FC<LogoPropsTypes> = ({ link, type, large }) => {
    const linkClasses: String[] = ['logo'];
    const dotClasses: String[] = ['logo', 'logo__dot'];

    [linkClasses, dotClasses].forEach(el => el.push(`logo--${type}`));
    if (type === 'color') dotClasses.push('logo--primary');
    if (large) linkClasses.push('logo--large');

    return (
        <a href={link} className={linkClasses.join(' ')}>
            Work<span className={dotClasses.join(' ')}>.</span>Book
        </a>
    );
};

export default Logo;
