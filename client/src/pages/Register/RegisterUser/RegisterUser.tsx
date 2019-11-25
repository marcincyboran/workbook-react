import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Form from './../../../components/Form/Form';
import FormGroup from './../../../components/Form/FormGroup/FormGroup';
import FieldText from './../../../components/Form/FieldText/FieldText';
import FieldCheckbox from './../../../components/Form/FieldCheckbox/FieldCheckbox';
import Heading from './../../../components/UI/Typography/Heading/Heading';
import FormSubmit from './../../../components/Form/FormSubmit/FormSubmit';

const RegisterUser: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            tel: '',
            password: '',
            location: '',
            rodo: false,
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(3, 'Must be min 3 characters long')
                .required('Required'),
            lastName: Yup.string()
                .min(3, 'Must be min 3 characters long')
                .required('Required'),
            email: Yup.string()
                .email('Please use a valid e-mail')
                .min(3, 'Must be min 3 characters long')
                .required('Required'),
            tel: Yup.string()
                .min(3, 'Must be min 3 characters long')
                .required('Required'),
            password: Yup.string()
                .min(3, 'Must be min 3 characters long')
                .required('Required'),
            location: Yup.string()
                .min(3, 'Must be min 3 characters long')
                .required('Required'),
            rodo: Yup.mixed().required('Zgoda wymagana'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Form className="login__form" handleSubmit={formik.handleSubmit}>
            <Heading tag="h2" type="primary" className="register__form-heading">
                Formularz rejestracyjny dla użytkowników
            </Heading>
            <FormGroup>
                <FieldText
                    label="Imię"
                    type="text"
                    getFieldProps={formik.getFieldProps('firstName')}
                    errors={formik.errors.firstName as string}
                    touched={formik.touched.firstName as boolean}
                    required
                />
                <FieldText
                    label="Nazwisko"
                    type="text"
                    getFieldProps={formik.getFieldProps('lastName')}
                    errors={formik.errors.lastName as string}
                    touched={formik.touched.lastName as boolean}
                    required
                />
            </FormGroup>
            <FormGroup>
                <FieldText
                    label="E-mail"
                    type="email"
                    getFieldProps={formik.getFieldProps('email')}
                    errors={formik.errors.email as string}
                    touched={formik.touched.email as boolean}
                    required
                />
                <FieldText
                    label="Tel"
                    type="text"
                    getFieldProps={formik.getFieldProps('tel')}
                    errors={formik.errors.tel as string}
                    touched={formik.touched.tel as boolean}
                    required
                />
            </FormGroup>
            <FormGroup>
                <FieldText
                    label="Hasło"
                    type="password"
                    getFieldProps={formik.getFieldProps('password')}
                    errors={formik.errors.password as string}
                    touched={formik.touched.password as boolean}
                    required
                />
                <FieldText
                    label="Miasto"
                    type="text"
                    getFieldProps={formik.getFieldProps('location')}
                    errors={formik.errors.location as string}
                    touched={formik.touched.location as boolean}
                    required
                />
            </FormGroup>
            <FormGroup type="checkbox">
                <FieldCheckbox getFieldProps={formik.getFieldProps('rodo')}>
                    Wyrażam zgodę na przetwarzanie moich danych osobowych podanych w formularzu oraz akcjeptuję
                    regulamin.
                </FieldCheckbox>
            </FormGroup>
            <FormSubmit color="secondary">Zarejsetruj</FormSubmit>
        </Form>
    );
};

export default RegisterUser;
