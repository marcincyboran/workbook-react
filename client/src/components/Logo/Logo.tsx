import React from 'react';
import './Logo.scss';

interface LogoProps {
    link: string;
    type: 'white' | 'color';
    large?: boolean;
}

const Logo: React.FC<LogoProps> = ({ link, type, large }) => {
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
