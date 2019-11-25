import React from 'react';
import './Navigation.scss';
import { connect } from 'react-redux';
import { AppState } from './../../../../redux/store';
import NavigationItem from './NavigationItem/NavigationItem';
import { allActions } from './../../../../redux/store';

class Navigation extends React.Component<any, any> {
    state = {
        links: [
            { href: '/company', desc: 'Firma' },
            { href: '/companies', desc: 'Firmy' },
            { href: '/offers', desc: 'Oferty' },
            { href: '/offer', desc: 'Oferta' },
            { href: '/login', desc: 'Login' },
            { href: '/register', desc: 'Register' },
        ],
    };

    componentDidUpdate() {
        document.title = this.props.title;
    }
    componentDidMount() {
        document.title = this.props.title;
    }

    render() {
        const navigationItems = this.state.links.map(el => (
            <NavigationItem href={el.href} desc={el.desc} key={el.desc} />
        ));

        return (
            <nav className="top-nav" onClick={() => allActions.setDocumentTitle('Test')}>
                <ul className="top-nav__list">{navigationItems}</ul>
            </nav>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    title: state.system.title,
});

export default connect(mapStateToProps)(Navigation);
