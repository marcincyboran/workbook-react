import React from 'react';
import './Navigation.scss';
import { connect } from 'react-redux';
import NavigationItem from './NavigationItem/NavigationItem';
import { AppState } from './../../../../redux/store';

class Navigation extends React.Component<any, any> {
    state = {
        links: [
            { href: '/company', desc: 'Firma' },
            { href: '/companies', desc: 'Firmy' },
            { href: '/offers', desc: 'Oferty' },
            { href: '/offer', desc: 'Oferta' },
            { href: '/login', desc: 'Login' },
        ],
    };

    componentDidUpdate() {
        document.title = this.props.title;
    }
    componentDidMount() {
        document.title = this.props.title;
    }

    render() {
        console.log(this.props);
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

const mapStateToProps = (state: AppState) => ({
    title: state.global.title,
});

export default connect(mapStateToProps)(Navigation);
