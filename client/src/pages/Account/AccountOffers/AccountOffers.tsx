import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import http from '../../../helpers/axios';

import Button from '../../../components/UI/Button/Button';
import Paragraph from '../../../components/UI/Typography/Paragraph/Paragraph';
import PanelTitle from '../../../components/Panel/PanelTitle/PanelTitle';
import PanelRow from '../../../components/Panel/PanelRow/PanelRow';
import { OfferType } from '../../../helpers/types';

type AccountOffersProps = { userID: string };

const AccountOffers: React.FC<AccountOffersProps> = ({ userID = '' }) => {
    const [list, setList] = useState<OfferType[]>([]);
    const match = useRouteMatch();

    const fetchOffers = async () => {
        if (!userID) return;
        try {
            const res = await http(`/offers?owner=${userID}`);
            if (res.data.payload) setList(res.data.payload);
            console.log(res.data.payload);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchOffers();
    }, [userID]);

    return (
        <>
            <PanelTitle>Lista ofert:</PanelTitle>
            {list.length > 0 ? (
                list.map((offerEl: OfferType) => <PanelRow key={offerEl._id}>{offerEl.title}</PanelRow>)
            ) : (
                <Paragraph> You have no offers yet </Paragraph>
            )}

            <PanelRow>
                <Button link={`${match.url}/create`} icon="plus" color="primary">
                    Add an offer
                </Button>
            </PanelRow>
        </>
    );
};

export default AccountOffers;
