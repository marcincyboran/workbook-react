import React, { useState, useEffect } from 'react';
import './Companies.scss';
import http from '../../helpers/axios';
import Company from '../../components/Company/Company';
import Heading from '../../components/UI/Typography/Heading/Heading';
import Loader from '../../components/UI/Loader/Loader';

const CompaniesPage: React.FC = () => {
    const [data, setData] = useState([]);
    const fetchOffers = async () => {
        try {
            const res = await http('/companies');
            if (res.data.payload) setData(res.data.payload);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchOffers();
    }, []);

    return (
        <>
            <Heading tag="h2" type="primary" className="companies__heading">
                Companies List
            </Heading>
            {data.length > 0 ? (
                data.map((companyElement: any) => <Company key={companyElement.id} companyData={companyElement} />)
            ) : (
                <Loader />
            )}
        </>
    );
};

export default CompaniesPage;
