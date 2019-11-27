import React from 'react';
import './Backdrop.scss';
import PropTypes, { InferProps } from 'prop-types';

const BackdropProps = {
    onClose: PropTypes.func.isRequired,
};
type BackdropPropsType = InferProps<typeof BackdropProps>;

const Backdrop: React.FC<BackdropPropsType> = ({ onClose }) => {
    return <div className="backdrop" onClick={onClose}></div>;
};

export default Backdrop;
