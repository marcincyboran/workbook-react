import React from 'react';
import './Backdrop.scss';

type BackdropProps = {
    onClose: () => void;
};

const Backdrop: React.FC<BackdropProps> = ({ onClose }) => {
    return <div className="backdrop" onClick={onClose}></div>;
};

export default Backdrop;
