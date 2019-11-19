import React from 'react';
import './Navigation.scss';

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
        return (
            <nav className="top-nav">
                <ul className="top-nav__list">
                    {this.state.links.map(el => (
                        <li className="top-nav__item">
                            <a href={el.href} title={el.desc} key={el.href} className="top-nav__link">
                                {el.desc}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

export default Navigation;
