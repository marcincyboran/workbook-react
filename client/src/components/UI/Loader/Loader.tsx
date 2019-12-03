import React from 'react';
import './Loader.scss';
import Heading from '../Typography/Heading/Heading';

const Loader: React.FC = () => {
    return (
        <div className="loader">
            <Heading tag="p" type="secondary" className="loader__heading">
                Ładowanie...
            </Heading>
            <div className="loader__spinners">
                <div className="loader__spinner">
                    <div className="loader__outer">&nbsp;</div>
                    <div className="loader__inner">&nbsp;</div>
                </div>
                <div className="loader__spinner--reverse">
                    <div className="loader__middle">&nbsp;</div>
                    <div className="loader__center">&nbsp;</div>
                </div>
            </div>
        </div>
    );
};

export default Loader;
