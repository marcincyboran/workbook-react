import React from 'react';
import './PanelRight.scss';

const PanelRight: React.FC<{}> = ({ children }) => {
    return <div className="panel__right">{children}</div>;
};

export default PanelRight;
