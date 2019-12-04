import React, { useEffect, useState } from 'react';
import './AccountOffers.scss';
import { useRouteMatch } from 'react-router-dom';
import { OfferType } from '../../../helpers/types';
import http from '../../../helpers/axios';

import Button from '../../../components/UI/Button/Button';
import Paragraph from '../../../components/UI/Typography/Paragraph/Paragraph';
import PanelTitle from '../../../components/Panel/PanelTitle/PanelTitle';
import PanelRow from '../../../components/Panel/PanelRow/PanelRow';
import PanelOffers from '../../../components/Panel/PanelOffers/PanelOffers';

type AccountOffersProps = { userID: string };

// TODO store offers in redux

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

    const onDeleteOffer = async (offerId: string) => {
        if (!window.confirm('Do you really want to delete this offer?')) return;
        const res = await http.delete(`/offers/${offerId}`);

        if (res.status === 200) setList(list.filter(offer => offer._id !== offerId));
    };

    const onEditOffer = (offerId: string): void => {
        console.log(`Edit offer ${offerId} TODO...`);
    };

    return (
        <>
            <PanelTitle>Lista ofert:</PanelTitle>
            {list.length > 0 ? (
                <PanelOffers offers={list} onDelete={onDeleteOffer} onEdit={onEditOffer} />
            ) : (
                <Paragraph> You have no offers yet </Paragraph>
            )}
            <PanelRow align="right">
                <Button link={`${match.url}/create`} icon="plus" color="primary">
                    Add an offer
                </Button>
            </PanelRow>
        </>
    );
};

export default AccountOffers;
