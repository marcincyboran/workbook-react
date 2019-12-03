import React from 'react';
import ReactDOM from 'react-dom';

const Portal: React.FC = ({ children }) => {
    const portalRoot = document.getElementById('portal')!;
    return ReactDOM.createPortal(children, portalRoot);
};

export default Portal;
