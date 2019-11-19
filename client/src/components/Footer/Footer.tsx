import * as React from 'react';
import './Footer.scss';
import Social from './Social/Social';
import Logo from '../Logo/Logo';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer__copyrights">
                        <span>Created by Marcin Cyboran</span>
                        <span>Project based on Pracuj.pl</span>
                    </div>

                    <div className="footer__logo">
                        <Logo link="/test" type="white" large />
                    </div>

                    <div className="footer__socials">
                        <Social type="facebook" link="#facebook" />
                        <Social type="twitter" link="#twitter" disabled />
                        <Social type="youtube" link="#youtube" disabled />
                        <Social type="linkedin" link="#linkedin" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
