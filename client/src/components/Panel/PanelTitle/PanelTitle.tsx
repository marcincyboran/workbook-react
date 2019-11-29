import React from 'react';
import './PanelTitle.scss';
import Heading from '../../UI/Typography/Heading/Heading';

const Panel: React.FC<{}> = ({ children }) => {
    return (
        <Heading tag="h2" type="primary" mod="primary, bold" className="panel__title">
            {children}
        </Heading>
    );
};

export default Panel;
