import React from 'react';
import './PanelNav.scss';

const PanelNavLink: React.FC = ({ children }) => {
    return <ul className="panel__nav">{children}</ul>;
};

export default PanelNavLink;
