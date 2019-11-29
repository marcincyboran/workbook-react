import React from 'react';
import './Panel.scss';

const Panel: React.FC<{}> = ({ children }) => {
    return <section className="panel">{children}</section>;
};

export default Panel;
