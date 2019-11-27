import React from 'react';
import './Modal.scss';
import PropTypes, { InferProps } from 'prop-types';
import Backdrop from '../Backdrop/Backdrop';
import classes from 'react-style-classes';

const ModalProps = {
    show: PropTypes.bool.isRequired,
    onCloseHandler: PropTypes.func.isRequired,
};
type ModalPropsType = InferProps<typeof ModalProps>;

const Modal: React.FC<ModalPropsType> = ({ children, show, onCloseHandler }) => {
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
