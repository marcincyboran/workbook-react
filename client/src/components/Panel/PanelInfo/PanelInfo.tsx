import React from 'react';
import './PanelInfo.scss';
import classes from 'react-style-classes';

type PanelInfoProps = {
    type?: string;
};

const PanelInfo: React.FC<PanelInfoProps> = ({ children, type }) => {
    return <span className={classes('panel__info', type)}>{children}</span>;
};

export default PanelInfo;
