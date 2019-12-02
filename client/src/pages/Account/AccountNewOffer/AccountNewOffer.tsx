import React, { useState } from 'react';
import * as Yup from 'yup';
import http from '../../../helpers/axios';
import { Info } from '../../../helpers/types';
import { useFormik } from 'formik';

import PanelTitle from '../../../components/Panel/PanelTitle/PanelTitle';
import Paragraph from '../../../components/UI/Typography/Paragraph/Paragraph';
import PanelRow from '../../../components/Panel/PanelRow/PanelRow';
import PanelRowTitle from '../../../components/Panel/PanelRowTitle/PanelRowTitle';
import PanelInfo from '../../../components/Panel/PanelInfo/PanelInfo';
import PanelRowLeft from '../../../components/Panel/PanelRow/PanelRowLeft/PanelRowLeft';
import PanelRowRight from '../../../components/Panel/PanelRow/PanelRowRight/PanelRowRight';
import FieldText from '../../../components/Form/FieldText/FieldText';
import FormGroup from '../../../components/Form/FormGroup/FormGroup';
import Form from '../../../components/Form/Form';
import FormSubmit from '../../../components/Form/FormSubmit/FormSubmit';

const AccountNewOffer: React.FC = () => {
    const [info, setInfo] = useState<Info>({
        type: '',
        msg: '',
    });

    const formik = useFormik({
        initialValues: {
            title: '',
            shortText: '',
            description: '',
            address: '',
            category: '',
            budget: 0,
            tags: [],
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .min(5, 'Must be min 3 characters long')
                .max(50, 'Must be max of 50 characters long')
                .required('Required'),
            shortText: Yup.string()
                .min(5, 'Must be min 3 characters long')
                .max(250, 'Must be max of 250 characters long')
                .required('Required'),
            description: Yup.string()
                .min(20, 'Must be min 3 characters long')
                .max(2048, 'Must be max of 2048 characters long')
                .required('Required'),
            address: Yup.string()
                .min(5, 'Must be min 3 characters long')
                .max(50, 'Must be max of 50 characters long'),
            category: Yup.mixed().oneOf(['inside', 'outside']),
            budget: Yup.number().min(1, 'Must be min 3 characters long'),
            tags: Yup.array().of(Yup.string()),
        }),
        onSubmit: async (values, formikHelpers) => {
            setInfo({ type: '', msg: '' });
            try {
                formikHelpers.resetForm();
                const res = await http.put('auth/updatedetails', values);
                setInfo({ type: 'info', msg: 'Saved' });
            } catch (err) {
                formikHelpers.setSubmitting(false);
                setInfo({ type: 'error', msg: err.response.data.error || err.statusYexy });
            }
        },
    });

    return (
        <Form handleSubmit={formik.handleSubmit} useCustomError>
            <PanelTitle>Create a new offer:</PanelTitle>
            <PanelInfo type={info.type}>{info.msg}</PanelInfo>
            <PanelRow>
                <PanelRowLeft>
                    <PanelRowTitle>Tytuł oferty</PanelRowTitle>
                    <Paragraph>Imię i nazwisko wyświetlane jest w każdej Twojej ofercie</Paragraph>
                </PanelRowLeft>
                <PanelRowRight>
                    <FormGroup>
                        <FieldText
                            label="Title:"
                            type="text"
                            getFieldProps={formik.getFieldProps('title')}
                            errors={formik.errors.title as string}
                            touched={formik.touched.title as boolean}
                        />
                        <span></span>
                    </FormGroup>
                </PanelRowRight>
            </PanelRow>
            <PanelRow>
                <PanelRowLeft>
                    <PanelRowTitle>Offer short text</PanelRowTitle>
                    <Paragraph>Numer telefonu wyświetlany jest w każdej Twojej ofercie</Paragraph>
                </PanelRowLeft>
                <PanelRowRight>
                    <FormGroup>
                        <FieldText
                            label="Short description:"
                            type="text"
                            getFieldProps={formik.getFieldProps('shortText')}
                            errors={formik.errors.shortText as string}
                            touched={formik.touched.shortText as boolean}
                        />
                    </FormGroup>
                </PanelRowRight>
            </PanelRow>
            <PanelRow>
                <PanelRowLeft>
                    <PanelRowTitle>Offer details</PanelRowTitle>
                    <Paragraph>Adress e-mail wyświetlany jest w każdej Twojej ofercie</Paragraph>
                </PanelRowLeft>
                <PanelRowRight>
                    <FormGroup>
                        <FieldText
                            label="Offer details:"
                            type="textarea"
                            getFieldProps={formik.getFieldProps('description')}
                            errors={formik.errors.description as string}
                            touched={formik.touched.description as boolean}
                        />
                    </FormGroup>
                </PanelRowRight>
            </PanelRow>
            <PanelRow>
                <PanelRowLeft>
                    <PanelRowTitle>Address</PanelRowTitle>
                    <Paragraph>Lokalizacja pomoże z odnalezieni odpowiedniej oferty</Paragraph>
                </PanelRowLeft>
                <PanelRowRight>
                    <FormGroup>
                        <FieldText
                            label="Address:"
                            type="text"
                            getFieldProps={formik.getFieldProps('address')}
                            errors={formik.errors.address as string}
                            touched={formik.touched.address as boolean}
                        />
                        <span></span>
                    </FormGroup>
                </PanelRowRight>
            </PanelRow>
            <FormSubmit color="primary" icon>
                Save
            </FormSubmit>
        </Form>
    );
};

export default AccountNewOffer;
