import React from 'react';
import './AppWrapper.scss';

import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';
import Container from './../components/UI/Container/Container';

const AppWrapper: React.FC = props => {
    return (
        <>
            <Header />
            <Container>
                <main className="main-content">{props.children}</main>
            </Container>
            <Footer />
        </>
    );
};

export default AppWrapper;
