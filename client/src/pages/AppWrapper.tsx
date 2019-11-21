import React from 'react';
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';

const AppWrapper: React.FC = props => {
    return (
        <>
            <Header />
            <main style={{ minHeight: 'calc(100vh - 67rem)' }}>{props.children}</main>
            <Footer />
        </>
    );
};

export default AppWrapper;
