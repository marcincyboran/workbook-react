import React from 'react';
import './PanelList.scss';
import { OfferType } from '../../../helpers/types';
import PanelListItem from './PanelListItem/PanelListItem';

type PanelListProps = {
    offers: OfferType[];
};

const PanelList: React.FC<PanelListProps> = ({ offers }) => {
    return (
        <ul className="panel__list">
            {offers.map(offer => (
                <PanelListItem key={offer._id} offer={offer} />
            ))}
        </ul>
    );
};

export default PanelList;
