import React, { useState } from 'react';
import './Register.scss';
import classes from 'react-style-classes';
import RegisterCompany from './RegisterCompany/RegisterCompany';
import RegisterUser from './RegisterUser/RegisterUser';

const RegisterPage: React.FC = () => {
    const [activeForm, setaAtiveForm] = useState('user');
    const onFormSwitch = (form: string) => setaAtiveForm(form);

    return (
        <div className="container">
            <section className="register">
                <div className="register__nav">
                    <span
                        className={classes(
                            'register__nav-button',
                            activeForm === 'user' && 'register__nav-button--active'
                        )}
                        onClick={() => onFormSwitch('user')}
                    >
                        Użytkownik
                    </span>
                    <span
                        className={classes(
                            'register__nav-button',
                            activeForm === 'company' && 'register__nav-button--active'
                        )}
                        onClick={() => onFormSwitch('company')}
                    >
                        Firma
                    </span>
                </div>
                <div
                    className={classes(
                        'register__content',
                        `register__content--active-${activeForm === 'user' ? 'user' : 'company'}`
                    )}
                >
                    <div className="register__block register__block--user">
                        <div className="register__bg-img register__bg-img--user">&nbsp;</div>
                        <RegisterUser />
                    </div>
                    <div className="register__block register__block--company">
                        <RegisterCompany />
                        <div className="register__bg-img register__bg-img--company">&nbsp;</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RegisterPage;
