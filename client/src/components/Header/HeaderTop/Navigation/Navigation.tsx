import React from 'react';
import './Navigation.scss';
import NavigationItem from './NavigationItem/NavigationItem';
class Navigation extends React.Component<{}, {}> {
    state = {
        links: [
            { href: '/company', desc: 'Firma' },
            { href: '/companies', desc: 'Firmy' },
            { href: '/offers', desc: 'Oferty' },
            { href: '/offer', desc: 'Oferta' },
            { href: '/login', desc: 'Login' },
        ],
    };

    render() {
        const navigationItems = this.state.links.map(el => (
            <NavigationItem href={el.href} desc={el.desc} key={el.desc} />
        ));

        return (
            <nav className="top-nav">
                <ul className="top-nav__list">{navigationItems}</ul>
            </nav>
        );
    }
}

export default Navigation;
