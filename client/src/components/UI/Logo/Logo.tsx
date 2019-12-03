import React from 'react';
import './Logo.scss';
import { Link } from 'react-router-dom';
// import classes from 'react-style-classes';

type LogoProps = {
    link: string;
    type: 'white' | 'color';
    large?: boolean;
};

const Logo: React.FC<LogoProps> = ({ link, type, large }) => {
    const linkClasses: String[] = ['logo'];
    const dotClasses: String[] = ['logo__dot'];

    [linkClasses, dotClasses].forEach(el => el.push(`logo--${type}`));
    if (type === 'color') dotClasses.push('logo--primary');
    if (large) linkClasses.push('logo--large');

    return (
        <Link to={link} className={linkClasses.join(' ')}>
            Work<span className={dotClasses.join(' ')}>.</span>Book
        </Link>
    );
};

export default Logo;

// TODO classes
