import React from 'react';
import './PanelRowTitle.scss';
import Heading from '../../UI/Typography/Heading/Heading';

const PanelRowTitle: React.FC<{}> = ({ children }) => {
    return (
        <Heading tag="p" type="secondary" mod="secondary" className="panel__row-title">
            {children}
        </Heading>
    );
};

export default PanelRowTitle;
