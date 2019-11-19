import React from 'react';
import './HeaderBottom.scss';
import Search from './Search/Search';

const HeaderBottom: React.FC<{}> = () => {
    return (
        <section className="header-bottom">
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
