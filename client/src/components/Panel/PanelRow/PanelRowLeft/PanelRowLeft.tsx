import React from 'react';
import './PanelRowLeft.scss';

const PanelRowLeft: React.FC = ({ children }) => {
    return <div className="panel__row-left">{children}</div>;
};

export default PanelRowLeft;
