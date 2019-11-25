import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import Form from './../../../components/Form/Form';
import FormGroup from './../../../components/Form/FormGroup/FormGroup';
import FieldText from './../../../components/Form/FieldText/FieldText';
import FieldCheckbox from './../../../components/Form/FieldCheckbox/FieldCheckbox';
import Heading from '../../../components/UI/Typography/Heading/Heading';
import FormSubmit from './../../../components/Form/FormSubmit/FormSubmit';

const RegisterCompany: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            tel: '',
            rodo: false,
            rodo2: true,
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
            rodo: Yup.mixed().required('Zgoda wymagana'),
            rodo2: Yup.mixed().required('Zgoda wymagana'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Form className="register__form" handleSubmit={formik.handleSubmit}>
            <Heading tag="h2" type="primary" className="register__form-heading">
                Formularz rejestracyjny dla firm
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
                    label="Nazwisko"
                    type="text"
                    getFieldProps={formik.getFieldProps('email')}
                    errors={formik.errors.email as string}
                    touched={formik.touched.email as boolean}
                    required
                />
                <FieldText
                    label="Imię"
                    type="text"
                    getFieldProps={formik.getFieldProps('tel')}
                    errors={formik.errors.tel as string}
                    touched={formik.touched.tel as boolean}
                    required
                />
            </FormGroup>
            <FormGroup type="checkbox">
                <FieldCheckbox getFieldProps={formik.getFieldProps('rodo')}>
                    Wyrażam zgodę na przetwarzanie moich danych osobowych podanych w formularzu oraz akcjeptuję
                    regulamin.
                </FieldCheckbox>
                <FieldCheckbox getFieldProps={formik.getFieldProps('rodo2')}>
                    Wyrażam zgodę na przetwarzanie moich danych osobowych podanych w formularzu oraz akcjeptuję
                    regulamin.
                </FieldCheckbox>
            </FormGroup>
            <FormSubmit color="tertiary">Zarejsetruj</FormSubmit>
        </Form>
    );
};

export default RegisterCompany;
