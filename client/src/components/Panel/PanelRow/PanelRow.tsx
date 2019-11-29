import React from 'react';
import './PanelRow.scss';

const PanelRow: React.FC<{}> = ({ children }) => {
    return <div className="panel__row">{children}</div>;
};

export default PanelRow;
