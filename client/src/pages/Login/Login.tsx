import React, { useEffect, useState } from 'react';
import './Login.scss';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { RouteComponentProps } from 'react-router-dom';
import { allActions } from '../../redux/store';
import Helpers from '../../helpers/shared';
import http from '../../helpers/axios';

import Form from '../../components/Form/Form';
import FormGroup from '../../components/Form/FormGroup/FormGroup';
import FieldText from '../../components/Form/FieldText/FieldText';
import FormSubmit from '../../components/Form/FormSubmit/FormSubmit';
import List from '../../components/UI/List/List';
import Button from '../../components/UI/Button/Button';
import Logo from '../../components/UI/Logo/Logo';
import Heading from '../../components/UI/Typography/Heading/Heading';
import Paragraph from '../../components/UI/Typography/Paragraph/Paragraph';

const LoginPage: React.FC<RouteComponentProps> = ({ history }) => {
    const [errorMessage, setError] = useState('');
    useEffect(() => {
        allActions.setDocumentTitle('Login');
    }, []);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Please use a valid e-mail address')
                .min(5, 'Must be min 5 characters long')
                .max(30, 'Must be max 30 characters long')
                .required('This field is required'),
            password: Yup.string()
                .min(8, 'Must be min 8 characters long.')
                .max(30, 'Must be max 30 characters long')
                .required('This field is required'),
        }),
        onSubmit: async values => {
            formik.resetForm();
            setError('');
            try {
                const res = await http.post('auth/login', values);
                Helpers.userFromResponse(res);
                history.push('/');
            } catch (err) {
                Helpers.clearUser();
                if (err.response.status === 401) return setError('Invalid email or password.');
                setError('Something went wrong, try again');
            }
        },
    });

    return (
        <section className="login">
            <div className="login__left">
                <Heading tag="h2" type="primary" mod="primary" className="login__title">
                    Dla CIEBIE
                </Heading>
                <Paragraph mod="big" className="login__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius dignissimos?
                </Paragraph>
                <List addClass="login__list" items={['Znajdź wykonawcę', 'Dodawaj oferty', 'Oceniaj usługi']} />
                <Button link="/register" color="secondary" icon="magnifying-glass">
                    Zarejestruj
                </Button>
            </div>
            <div className="login__center">
                <Logo link="#" type="white" />
                <Form className="login__form" handleSubmit={formik.handleSubmit} useCustomError>
                    <FormGroup type="full">
                        <FieldText
                            type="email"
                            getFieldProps={formik.getFieldProps('email')}
                            errors={formik.errors.email as string}
                            touched={formik.touched.email as boolean}
                            placeholder="Email"
                        />
                    </FormGroup>
                    <FormGroup type="full">
                        <FieldText
                            type="password"
                            getFieldProps={formik.getFieldProps('password')}
                            errors={formik.errors.password as string}
                            touched={formik.touched.password as boolean}
                            placeholder="Hasło"
                        />
                    </FormGroup>
                    <FormSubmit color="white" icon>
                        Zaloguj
                    </FormSubmit>
                </Form>
                <span className={`login__error-message ${errorMessage ? 'in' : ''}`}>{errorMessage}</span>
            </div>
            <div className="login__right">
                <Heading tag="h2" type="primary" mod="primary" className="login__title">
                    Dla FIRM
                </Heading>
                <Paragraph mod="big" className="login__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicmos impedit numquam necessitatibus voluptatibus
                    eligendi laboriosam?
                </Paragraph>
                <List
                    addClass="login__list"
                    items={['Przedstaw firmę', 'Dodawaj oferty', 'Przedstawiaj projkety']}
                    type="reversed"
                />
                <Button link="/register" color="secondary" icon="magnifying-glass">
                    Zarejestruj
                </Button>
            </div>
        </section>
    );
};

export default LoginPage;
