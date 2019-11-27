import React, { useState, useEffect } from 'react';
import './Offers.scss';
import http from '../../helpers/axios';
import Offer from '../../components/Offer/Offer';

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

    useEffect(() => {}, [data]);

    console.log('Render');
    console.log('State - ', data);

    return (
        <>
            <p>Offers Page</p>
            {data.length > 0
                ? data.map((offerElement: any) => <Offer key={offerElement.id} offerData={offerElement} />)
                : 'spiner'}
        </>
    );
};

export default OffersPage;
