import React, { useState } from 'react';
import './Filter.scss';
import CONSTANTS from '../../helpers/constants';
import FilterRow from './FilterRow/FilterRow';
import FilterItem from './FilterItem/FilterItem';
import FieldText from '../Form/FieldText/FieldText';
import SvgSprite from '../UI/SvgSprite/SvgSprite';
import FilterMore from './FilterMore/FilterMore';
import FilterApply from './FilterApply/FilterApply';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import classes from 'react-style-classes';

interface FilterProps {}

const Filter: React.FC<FilterProps> = () => {
    const [showFilters, setShowFilters] = useState(true);

    const formik = useFormik({
        initialValues: {
            city: '',
            category: '',
            costMin: '',
            costMax: '',
        },
        validationSchema: Yup.object({
            category: Yup.string()
                .min(3, 'Must be min 3 characters long.')
                .max(30, 'Must be max 30 characters long'),
            city: Yup.string()
                .min(3, 'Must be min 3 characters long.')
                .max(30, 'Must be max 30 characters long'),
            costMin: Yup.number().min(1, 'Must be min 1 PLN'),
            costMax: Yup.number().max(1000000, 'Must be max 1 000 000 PLN'),
        }),
        onSubmit: values => {
            console.log('Settings applied');
            console.log(values);
        },
    });

    const showHideHandler = () => {
        setShowFilters(prev => !prev);
    };

    const setField = (fieldName: string, value: string) => {
        formik.setFieldValue(fieldName, value, false);
        console.log(formik.values);
        // if (!showFilters) fetchOffers({ city: value });
    };

    const formClasses = classes('filter', showFilters && 'filter--more');

    return (
        <form onSubmit={formik.handleSubmit} className={formClasses}>
            <FilterRow title="Lokalizacja">
                {CONSTANTS.CITIES.map((city: string) => (
                    <FilterItem key={city} onClickHandler={setField.bind(null, 'city', city)}>
                        {city}
                    </FilterItem>
                ))}
                <FieldText type="text" getFieldProps={formik.getFieldProps('city')} placeholder={'Inne'} />
                <span className="filter__icon-box" onClick={showHideHandler}>
                    <SvgSprite icon="equalizer" className="filter__icon" />
                </span>
            </FilterRow>
            <FilterMore show={showFilters}>
                <FilterRow title="Kategoria">
                    {CONSTANTS.CATEGORIES.map((cat: string) => (
                        <FilterItem key={cat} onClickHandler={setField.bind(null, 'category', cat)}>
                            {cat}
                        </FilterItem>
                    ))}
                    <FieldText type="text" getFieldProps={formik.getFieldProps('category')} placeholder={'Inna'} />
                </FilterRow>
                <FilterRow title="Cena">
                    <div className="filter__cost-box">
                        <FieldText type="number" getFieldProps={formik.getFieldProps('costMin')} placeholder={'OD'} />
                        <span> ─ </span>
                        <FieldText type="number" getFieldProps={formik.getFieldProps('costMax')} placeholder={'DO'} />
                    </div>

                    <FilterApply />
                </FilterRow>
            </FilterMore>
        </form>
    );
};

export default Filter;
