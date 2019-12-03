import React from 'react';
import './Modal.scss';
import Backdrop from '../UI/Backdrop/Backdrop';
import classes from 'react-style-classes';

type ModalProps = {
    show: boolean;
    onCloseHandler: () => void;
};

const Modal: React.FC<ModalProps> = ({ children, show, onCloseHandler }) => {
    return (
        <>
            {show && <Backdrop onClose={onCloseHandler} />}
            <div className={classes('modal', show && 'modal--active')}>
                <div className="modal__close" onClick={onCloseHandler}>
                    <span>&times;</span>
                </div>
                <div className="modal__content">{children}</div>
            </div>
        </>
    );
};

// TODO make animation void => block
export default Modal;
