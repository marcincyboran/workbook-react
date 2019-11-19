import React from 'react';
import './HeaderBottom.scss';
import Search from './Search/Search';
import { ParallaxBanner } from 'react-scroll-parallax';

const HeaderBottom: React.FC<{}> = () => {
    return (
        <section className="header-bottom">
            <div className="parallax">
                <ParallaxBanner className="parallax" layers={[{ image: 'test/header.jpg', amount: 0.5 }]} />
            </div>
            <div className="container">
                <h1 className="header-bottom__heading">
                    <span className="header-bottom__heading-text">Tired of unprofessional renovations?</span>
                    <span className="header-bottom__heading-text">Find & book an expert! </span>
                </h1>
                <Search />
            </div>
        </section>
    );
};

export default HeaderBottom;
