import React from 'react';
import './PanelRowRight.scss';

const PanelRowRight: React.FC<{}> = ({ children }) => {
    return <div className="panel__row-right">{children}</div>;
};

export default PanelRowRight;
