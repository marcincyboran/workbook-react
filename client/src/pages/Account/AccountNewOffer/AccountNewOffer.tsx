import React, { useState } from 'react';
import * as Yup from 'yup';
import http from '../../../helpers/axios';
import { InfoType } from '../../../helpers/types';
import { useFormik } from 'formik';
import PropTypes, { InferProps } from 'prop-types';

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
import FieldUpload from '../../../components/Form/FieldUpload/FieldUpload';

const accountProfileProps = {
    user: PropTypes.objectOf(PropTypes.any),
};
type AccountProfilePropsType = InferProps<typeof accountProfileProps>;

const AccountNewOffer: React.FC<AccountProfilePropsType> = ({ user }) => {
    const [info, setInfo] = useState<InfoType>({
        type: '',
        msg: '',
    });

    const formik = useFormik({
        initialValues: {
            title: 'Test title',
            shortText: 'Test short text 1',
            description: 'Test description must have min. of 20 characters...',
            address: user!.address ? user!.address : '',
            budget: '',
            tags: 'test, test',
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
                .min(20, 'Must be min 20 characters long')
                .max(2048, 'Must be max of 2048 characters long')
                .required('Required'),
            address: Yup.string()
                .min(5, 'Must be min 3 characters long')
                .max(50, 'Must be max of 50 characters long'),
            budget: Yup.string(),
            tags: Yup.string(),
        }),
        onSubmit: async (values, formikHelpers) => {
            setInfo({ type: '', msg: '' });
            try {
                formikHelpers.resetForm();
                const res = await http.post('offers', {
                    ...values,
                    budget: parseInt(values.budget),
                    tags: values.tags.replace(' ', '').split(','),
                });
                setInfo({ type: 'info', msg: 'Created' });
            } catch (err) {
                if (err.response) setInfo({ type: 'error', msg: err.response.data.error || err.response.statusText });
                else setInfo({ type: 'error', msg: 'Something went wrong, try again' });
            }
        },
    });

    return (
        <Form handleSubmit={formik.handleSubmit} useCustomError>
            <PanelTitle>Create an offer:</PanelTitle>
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
                            required
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
                            required
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
                            required
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
                            required
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
                    <PanelRowTitle>Tags</PanelRowTitle>
                    <Paragraph>Określenie odpowiednich tagów ułatwi wyszukanie oferty</Paragraph>
                </PanelRowLeft>
                <PanelRowRight>
                    <FormGroup>
                        <FieldText
                            label="Tags"
                            type="text"
                            getFieldProps={formik.getFieldProps('tags')}
                            errors={formik.errors.tags as string}
                            touched={formik.touched.tags as boolean}
                            placeholder="tag1, tag2, tag3"
                        />
                        <span></span>
                    </FormGroup>
                </PanelRowRight>
            </PanelRow>
            <PanelRow>
                <PanelRowLeft>
                    <PanelRowTitle>Photos</PanelRowTitle>
                    <Paragraph>Zdjęcia ułatwią potencjalnym zainteresowanym oszacowanie kosztów</Paragraph>
                </PanelRowLeft>
                <PanelRowRight>
                    <FormGroup>
                        <FieldUpload />
                        {/* <FieldText
                            label="Tags"
                            type="text"
                            getFieldProps={formik.getFieldProps('tags')}
                            errors={formik.errors.tags as string}
                            touched={formik.touched.tags as boolean}
                            placeholder="tag1, tag2, tag3"
                        />
                        <span></span> */}
                    </FormGroup>
                </PanelRowRight>
            </PanelRow>
            <PanelRow>
                <PanelRowLeft>
                    <PanelRowTitle>Budget</PanelRowTitle>
                    <Paragraph>Szacowany budżet ułatwi innym aplikowanie</Paragraph>
                </PanelRowLeft>
                <PanelRowRight>
                    <FormGroup>
                        <FieldText
                            label="Budget: PLN"
                            type="number"
                            getFieldProps={formik.getFieldProps('budget')}
                            errors={formik.errors.budget as string}
                            touched={formik.touched.budget as boolean}
                        />
                        <span></span>
                        <span></span>
                        <span></span>
                    </FormGroup>
                </PanelRowRight>
            </PanelRow>
            <FormSubmit color="primary">Create</FormSubmit>
        </Form>
    );
};

export default AccountNewOffer;
