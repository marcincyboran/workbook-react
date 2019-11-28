import React, { useState, useEffect } from 'react';
import './Offers.scss';
import http from '../../helpers/axios';
import Offer from '../../components/Offer/Offer';
import Heading from '../../components/UI/Typography/Heading/Heading';
import Loader from '../../components/UI/Loader/Loader';

const OffersPage: React.FC<{}> = () => {
    const [data, setData] = useState([]);
    const fetchOffers = async () => {
        try {
            const res = await http('/offers');
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
            <Heading tag="h2" type="primary" className="offers__heading">
                Offers List
            </Heading>
            {data.length > 0 ? (
                data.map((offerElement: any) => <Offer key={offerElement.id} offerData={offerElement} />)
            ) : (
                <Loader />
            )}
        </>
    );
};

export default OffersPage;
