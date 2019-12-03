import React from 'react';
import './PanelListItem.scss';
import { OfferType } from '../../../../helpers/types';
import Heading from '../../../UI/Typography/Heading/Heading';

type PanelListItem = {
    offer: OfferType;
};

const PanelListItem: React.FC<PanelListItem> = ({ children, offer }) => {
    const onDelete = () => {
        console.log('delete offer with id: ' + offer._id);
    };

    return (
        <li className="panel__list-item">
            <Heading tag="h4" type="secondary">
                {offer.title}
            </Heading>
        </li>
    );
};

export default PanelListItem;
