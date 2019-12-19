import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { User } from '../../../redux/system/duck/types';
import { useFormik } from 'formik';
import { InfoType } from '../../../helpers/types';
import http from '../../../helpers/axios';
import Helpers from '../../../helpers/shared';
import Paragraph from '../../../components/UI/Typography/Paragraph/Paragraph';
import PanelTitle from '../../../components/Panel/PanelTitle/PanelTitle';
import PanelRow from '../../../components/Panel/PanelRow/PanelRow';
import PanelRowTitle from '../../../components/Panel/PanelRowTitle/PanelRowTitle';
import PanelInfo from '../../../components/Panel/PanelInfo/PanelInfo';
import PanelRowLeft from '../../../components/Panel/PanelRow/PanelRowLeft/PanelRowLeft';
import PanelRowRight from '../../../components/Panel/PanelRow/PanelRowRight/PanelRowRight';
import FieldText from '../../../components/Form/FieldText/FieldText';
import FormGroup from '../../../components/Form/FormGroup/FormGroup';
import Form from '../../../components/Form/Form';
import FormSubmit from '../../../components/Form/FormSubmit/FormSubmit';

type AccountProfileProps = { user: User };

const AccountProfile: React.FC<AccountProfileProps> = ({ user }) => {
    const getValue = (prop: any) => (prop ? prop : '');
    const [info, setInfo] = useState<InfoType | null>();

    const formik = useFormik({
        initialValues: {
            firstName: getValue(user.firstName),
            lastName: getValue(user.lastName),
            phone: getValue(user.phone),
            email: getValue(user.email),
            address: getValue(user.address),
            facebook: getValue(user.facebook),
            linkedin: getValue(user.linkedin),
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
            phone: Yup.string().min(3, 'Must be min 3 characters long'),
            facebook: Yup.string().url('Please use a valid url'),
            linkedin: Yup.string().url('Please use a valid url'),
            address: Yup.string()
                .min(3, 'Must be min 3 characters long')
                .required('Required'),
        }),
        onSubmit: async (values, formikHelpers) => {
            setInfo(null);
            try {
                formikHelpers.resetForm();
                const res = await http.put('auth/updatedetails', values);
                Helpers.userFromResponse(res);
                setInfo({ type: 'info', msg: 'Saved' });
            } catch (err) {
                formikHelpers.setSubmitting(true);
                setInfo({ type: 'error', msg: err.response.data.error || err.response.statusText });
            }
        },
    });

    useEffect(() => {
        formik.setValues({
            firstName: getValue(user.firstName),
            lastName: getValue(user.lastName),
            phone: getValue(user.phone),
            email: getValue(user.email),
            address: getValue(user.address),
            facebook: getValue(user.facebook),
            linkedin: getValue(user.linkedin),
        });
    }, [user]);

    return (
        <Form handleSubmit={formik.handleSubmit} useCustomError>
            <PanelTitle>Ustawienia profilu:</PanelTitle>
            {info ? <PanelInfo type={info.type}>{info.msg}</PanelInfo> : null}
            <PanelRow>
                <PanelRowLeft>
                    <PanelRowTitle>Imię i nazwisko</PanelRowTitle>
                    <Paragraph>Imię i nazwisko wyświetlane jest w każdej Twojej ofercie</Paragraph>
                </PanelRowLeft>
                <PanelRowRight>
                    <FormGroup>
                        <FieldText
                            label="Imię:"
                            type="text"
                            getFieldProps={formik.getFieldProps('firstName')}
                            errors={formik.errors.firstName as string}
                            touched={formik.touched.firstName as boolean}
                        />
                        <FieldText
                            label="Nazwisko:"
                            type="text"
                            getFieldProps={formik.getFieldProps('lastName')}
                            errors={formik.errors.lastName as string}
                            touched={formik.touched.lastName as boolean}
                        />
                    </FormGroup>
                </PanelRowRight>
            </PanelRow>
            <PanelRow>
                <PanelRowLeft>
                    <PanelRowTitle>Numer telefonu</PanelRowTitle>
                    <Paragraph>Numer telefonu wyświetlany jest w każdej Twojej ofercie</Paragraph>
                </PanelRowLeft>
                <PanelRowRight>
                    <FormGroup>
                        <FieldText
                            label="Telefon:"
                            type="text"
                            getFieldProps={formik.getFieldProps('phone')}
                            errors={formik.errors.phone as string}
                            touched={formik.touched.phone as boolean}
                        />
                        <span></span>
                    </FormGroup>
                </PanelRowRight>
            </PanelRow>
            <PanelRow>
                <PanelRowLeft>
                    <PanelRowTitle>Adress e-mail</PanelRowTitle>
                    <Paragraph>Adress e-mail wyświetlany jest w każdej Twojej ofercie</Paragraph>
                </PanelRowLeft>
                <PanelRowRight>
                    <FormGroup>
                        <FieldText
                            label="Email:"
                            type="email"
                            getFieldProps={formik.getFieldProps('email')}
                            errors={formik.errors.email as string}
                            touched={formik.touched.email as boolean}
                        />
                        <span></span>
                    </FormGroup>
                </PanelRowRight>
            </PanelRow>
            <PanelRow>
                <PanelRowLeft>
                    <PanelRowTitle>Miejscowość</PanelRowTitle>
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
            <PanelRow>
                <PanelRowLeft>
                    <PanelRowTitle>Portale społecznościowe</PanelRowTitle>
                    <Paragraph>Podanie profilu społecznościowego może ułątwić kontakt</Paragraph>
                </PanelRowLeft>
                <PanelRowRight>
                    <FormGroup>
                        <FieldText
                            label="Facebook:"
                            type="text"
                            getFieldProps={formik.getFieldProps('facebook')}
                            errors={formik.errors.facebook as string}
                            touched={formik.touched.facebook as boolean}
                        />
                        <FieldText
                            label="Linkedin:"
                            type="text"
                            getFieldProps={formik.getFieldProps('linkedin')}
                            errors={formik.errors.linkedin as string}
                            touched={formik.touched.linkedin as boolean}
                        />
                    </FormGroup>
                </PanelRowRight>
            </PanelRow>
            <FormSubmit color="primary" icon>
                Save
            </FormSubmit>
        </Form>
    );
};

export default AccountProfile;
