import React from 'react';
import './Header.scss';
import HeaderTop from './HeaderTop/HeaderTop';
import HeaderBottom from './HeaderBottom/HeaderBottom';
import { ParallaxProvider } from 'react-scroll-parallax';

const Header: React.FC<{}> = () => {
    return (
        <header className="header">
            <HeaderTop />
            <ParallaxProvider>
                <HeaderBottom />
            </ParallaxProvider>
        </header>
    );
};

export default Header;
