import React, { useState, useEffect } from 'react';
import './Offers.scss';
import http from '../../helpers/axios';
import { OfferType } from '../../helpers/types';
import Offer from '../../components/Offer/Offer';
import Heading from '../../components/UI/Typography/Heading/Heading';
import Loader from '../../components/UI/Loader/Loader';
import Filter from '../../components/Filter/Filter';

interface FilterObject {
    city: string;
    category: string;
    cost: number;
}

// TODO change formik behavior, bc now it rerender component each time single value changes
const OffersPage: React.FC = () => {
    const [data, setData] = useState<OfferType[]>([]);

    const fetchOffers = async (options?: FilterObject) => {
        let endpoint = '/offers';
        // if (options) {}

        try {
            // Query example with mongo operator ?tags[in]=ściana,pilne
            const res = await http(endpoint);
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
            <Filter />
            <Heading tag="h2" type="primary" className="offers__heading">
                Offers List
            </Heading>
            {data.length > 0 ? (
                data.map(offerElement => <Offer key={offerElement._id} offerData={offerElement} />)
            ) : (
                <Loader />
            )}
        </>
    );
};

export default OffersPage;
