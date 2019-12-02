import React from 'react';
import './PanelInfo.scss';
import PropsTypes, { InferProps } from 'prop-types';
import classes from 'react-style-classes';

const PanelInfoProps = {
    type: PropsTypes.string,
};
type PanelInfoPropsType = InferProps<typeof PanelInfoProps>;

const PanelInfo: React.FC<PanelInfoPropsType> = ({ children, type }) => {
    return <span className={classes('panel__info', type)}>{children}</span>;
};

export default PanelInfo;
