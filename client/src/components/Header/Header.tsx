import React from 'react';
import './Header.scss';
import HeaderTop from './HeaderTop/HeaderTop';
import HeaderBottom from './HeaderBottom/HeaderBottom';

const Header: React.FC<{}> = () => {
    return (
        <header className="header">
            <HeaderTop />
            <HeaderBottom />
        </header>
    );
};

export default Header;
