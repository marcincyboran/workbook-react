import React from 'react';
import './PanelOffers.scss';
import { OfferType } from '../../../helpers/types';
import Heading from '../../UI/Typography/Heading/Heading';
import Paragraph from '../../UI/Typography/Paragraph/Paragraph';
import SvgSprite from '../../UI/SvgSprite/SvgSprite';

type PanelOffers = {
    offers: OfferType[];
    onDelete: (offerId: string) => void;
    onEdit: (offerId: string) => void;
};

const PanelOffers: React.FC<PanelOffers> = ({ offers, onDelete, onEdit }) => {
    return (
        <ul className="panel__offer-list">
            {offers.map(offer => (
                <li className="panel__offer-item" key={offer._id}>
                    <div>
                        <Heading tag="h4" type="tertiary" mod="secondary">
                            {' '}
                            {offer.title}{' '}
                        </Heading>
                        <Paragraph> {offer.shortText} </Paragraph>
                    </div>
                    <div>
                        <span onClick={() => onEdit(offer._id)}>
                            <SvgSprite icon="cog" title="Edit" />
                        </span>
                        <span onClick={() => onDelete(offer._id)}>
                            <SvgSprite icon="trash" color="primary" title="Delete" />
                        </span>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default PanelOffers;
