import React, { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import Portal from '../../components/Portal/Portal';

const HomePage: React.FC = () => {
    const [show, setShow] = useState(false);

    const hideModal = () => {
        setShow(false);
    };

    const showModal = () => {
        setShow(true);
        console.log(show);
    };

    return (
        <>
            <p>Home Page</p>
            <Portal>
                <Modal onCloseHandler={hideModal} show={show}>
                    Test Modal
                </Modal>
            </Portal>
            <button onClick={showModal}>Show modal</button>
        </>
    );
};

export default HomePage;
