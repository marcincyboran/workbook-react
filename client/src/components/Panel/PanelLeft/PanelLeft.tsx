import React from 'react';
import './PanelLeft.scss';

const PanelLeft: React.FC = ({ children }) => {
    return <div className="panel__left">{children}</div>;
};

export default PanelLeft;
