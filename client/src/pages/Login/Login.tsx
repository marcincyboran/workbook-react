import React from 'react';
import './Login.scss';
import List from './../../components/UI/List/List';
import Button from './../../components/UI/Button/Button';
import Logo from './../../components/UI/Logo/Logo';

const LoginPage: React.FC = () => {
    return (
        <section className="login u-mt-fixed">
            <div className="login__left">
                <p className="heading-primary heading-primary--primary u-mb-big">Dla CIEBIE</p>
                <p className="paragraph paragraph--big u-mb-big">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius dignissimos?
                </p>
                <List addClass="u-mb-big" items={['Znajdź wykonawcę', 'Dodawaj oferty', 'Oceniaj usługi']} />
                <Button link="/registration:user" color="secondary" icon="magnifying-glass">
                    Zarejsetruj
                </Button>
            </div>
            <div className="login__center">
                <Logo link="#" type="white" />
                <form className="login__form">
                    <div className="form__group u-mb-huge">
                        <div className="form__block form__block--full  form__block--nomargin">
                            <input type="text" className="form__input" name="e-mail" required placeholder="E-mail" />
                            <svg className="form__valid-icon">
                                <use href="./assets/svgs/sprite.svg#icon-check"></use>
                            </svg>
                            <span className="form__input-error">Błędny adress e-mail</span>
                        </div>
                    </div>
                    <div className="form__group u-mb-huge">
                        <div className="form__block form__block--full  form__block--nomargin">
                            <input type="text" className="form__input" name="pass" required placeholder="Hasło" />
                            <svg className="form__valid-icon">
                                <use href="./assets/svgs/sprite.svg#icon-check"></use>
                            </svg>
                            <span className="form__input-error">Hasło jest niepoprawne</span>
                        </div>
                    </div>
                    <div className="form__group form__group--submit">
                        <Button link="#submit" icon="chevron-down" rotateIcon="270">
                            Zaloguj
                        </Button>
                    </div>
                </form>
            </div>
            <div className="login__right">
                <p className="heading-primary heading-primary--primary u-mb-big ">Dla FIRM</p>
                <p className="paragraph paragraph--big u-mb-big">
                    Lorem ipsum dolor sit amet, consectetur adipisicmos impedit numquam necessitatibus voluptatibus
                    eligendi laboriosam?
                </p>
                <List
                    addClass="u-mb-big"
                    items={['Przedstaw firmę', 'Dodawaj oferty', 'Przedstawiaj projkety']}
                    type="reversed"
                />
                <Button link="/registration:company" color="secondary" icon="magnifying-glass">
                    Zarejsetruj
                </Button>
            </div>
        </section>
    );
};

export default LoginPage;
