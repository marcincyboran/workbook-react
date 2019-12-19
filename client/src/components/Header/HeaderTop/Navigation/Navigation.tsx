import React, { useState } from 'react';
import './Navigation.scss';
import NavigationItem from './NavigationItem/NavigationItem';

type NavigationState = Array<{ link: string; desc: string }>;

// TODO Auth guard and rebuild
const Navigation: React.FC = () => {
    const [links] = useState<NavigationState>([
        { link: '/companies', desc: 'Firmy' },
        { link: '/companies/1', desc: 'Firma 1' },
        { link: '/offers', desc: 'Oferty' },
        { link: '/offers/1', desc: 'Oferta 1' },
        { link: '/login', desc: 'Login' },
        { link: '/register', desc: 'Register' },
        { link: '/account', desc: 'Account' },
    ]);

    const navigationItems = links.map(el => <NavigationItem link={el.link} desc={el.desc} key={el.desc} />);

    return (
        <nav className="top-nav">
            <ul className="top-nav__list">{navigationItems}</ul>
        </nav>
    );
};

export default Navigation;
