import React from 'react';
import './HeaderTop.scss';
import Logo from '../../UI/Logo/Logo';
import Navigation from './Navigation/Navigation';
import Container from './../../UI/Container/Container';

const HeaderTop: React.FC = () => {
    return (
        <section className="header-top">
            <Container addClass="header-top__container">
                <Logo link="/" type="color" />
                <Navigation />
            </Container>
        </section>
    );
};

export default HeaderTop;
