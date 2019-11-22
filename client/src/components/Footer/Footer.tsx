import React from 'react';
import './Footer.scss';
import Social from './Social/Social';
import Logo from '../UI/Logo/Logo';
import Container from './../UI/Container/Container';

const Footer: React.FC<{}> = () => {
    return (
        <footer className="footer">
            <Container addClass="footer__container">
                <div className="footer__copyrights">
                    <span>Created by Marcin Cyboran</span>
                    <span>Project based on Pracuj.pl</span>
                </div>
                <Logo link="/test" type="white" large />
                <div className="footer__socials">
                    <Social type="facebook" link="#facebook" />
                    <Social type="twitter" link="#twitter" disabled />
                    <Social type="youtube" link="#youtube" disabled />
                    <Social type="linkedin" link="#linkedin" />
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
