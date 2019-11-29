import React from 'react';
import './Navigation.scss';
import { connect } from 'react-redux';
import { AppStateType } from '../../../../redux/store';
import { allActions } from '../../../../redux/store';
import NavigationItem from './NavigationItem/NavigationItem';

class Navigation extends React.Component<any, any> {
    state = {
        links: [
            { link: '/companies', desc: 'Firmy' },
            { link: '/company', desc: 'Firma' },
            { link: '/offers', desc: 'Oferty' },
            { link: '/offer', desc: 'Oferta' },
            { link: '/login', desc: 'Login' },
            { link: '/register', desc: 'Register' },
            { link: '/account', desc: 'Account' },
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
            <NavigationItem link={el.link} desc={el.desc} key={el.desc} />
        ));

        return (
            <nav className="top-nav" onClick={() => allActions.setDocumentTitle('Test')}>
                <ul className="top-nav__list">{navigationItems}</ul>
            </nav>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    title: state.system.title,
});

export default connect(mapStateToProps)(Navigation);
