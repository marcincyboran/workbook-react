import React from 'react';
import './HeaderBottom.scss';
import Search from './Search/Search';
import { ParallaxBanner } from 'react-scroll-parallax';
import headerImg from './../../../assets/imgs/header.jpg';
import Container from './../../UI/Container/Container';

const HeaderBottom: React.FC = () => {
    return (
        <section className="header-bottom">
            <ParallaxBanner
                layers={[{ image: headerImg, amount: 0.5 }]}
                style={{
                    height: '45rem',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    zIndex: '-1',
                }}
            />
            <Container>
                <h1 className="header-bottom__heading">
                    <span className="header-bottom__heading-text">Tired of unprofessional renovations ?</span>
                    <span className="header-bottom__heading-text">Find & book an expert !</span>
                </h1>
                <Search />
            </Container>
        </section>
    );
};

export default HeaderBottom;
