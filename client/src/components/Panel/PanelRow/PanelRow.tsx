import React from 'react';
import './PanelRow.scss';
import classes from 'react-style-classes';

type PanelRow = {
    align?: 'right' | 'center';
};

const PanelRow: React.FC<PanelRow> = ({ children, align }) => {
    return <div className={classes('panel__row', `panel__row--${align}`)}>{children}</div>;
};

export default PanelRow;
