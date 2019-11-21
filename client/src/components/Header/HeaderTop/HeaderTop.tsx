import React from 'react';
import './HeaderTop.scss';
import Logo from '../../UI/Logo/Logo';
import Navigation from './Navigation/Navigation';

const HeaderTop: React.FC<{}> = () => {
    return (
        <section className="header-top">
            <div className="container header-top__container">
                <Logo link="/" type="color" />
                <Navigation />
            </div>
        </section>
    );
};

export default HeaderTop;
