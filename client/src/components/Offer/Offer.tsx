import React from 'react';
import './Offer.scss';
import PropTypes, { InferProps } from 'prop-types';
import { Link } from 'react-router-dom';
import classes from 'react-style-classes';
import Helpers from '../../helpers/shared';
import SvgSprite from '../UI/SvgSprite/SvgSprite';
import Tag from '../UI/Typography/Tag/Tag';
import Heading from '../UI/Typography/Heading/Heading';

// TODO Create and import Offert type instead of any
const OfferProps = {
    offerData: PropTypes.objectOf(PropTypes.any).isRequired,
};
type OfferPropsType = InferProps<typeof OfferProps>;

const Offer: React.FC<OfferPropsType> = ({ offerData }) => {
    const tags = offerData.tags.map((tag: string) => <Tag key={tag}>{tag}</Tag>);

    return (
        <article className={classes('offer', offerData.premium && 'offer--premium')}>
            <div className="offer__top">
                <p className="offer__date">{Helpers.formatDate(offerData.date)}</p>
                <figure className="offer__image-box">
                    <img
                        src="http://buildercorp.pl/wp-content/uploads/2017/05/BX.jpg"
                        alt="Budimex"
                        className="offer__image"
                    />
                </figure>
                <div className="offer__content">
                    <Heading tag="h2" type="secondary" className="offer__title">
                        <Link to={`/offers/${offerData.id}`} className="offer__link">
                            {offerData.title}
                        </Link>
                    </Heading>
                    <a
                        href={`https://www.google.com/maps?q=${offerData.location}`}
                        target="_blank"
                        className="offer__location"
                    >
                        <SvgSprite icon="location-pin" color="primary" />
                        <span>{offerData.location}</span>
                    </a>
                    <p className="offer__category-box">{tags}</p>
                    <label className="offer__details-toggle" htmlFor={`offer-id-${offerData.id}`}>
                        <SvgSprite icon="info-with-circle" />
                    </label>
                </div>
            </div>
            <input className="offer__details-switcher" type="checkbox" id={`offer-id-${offerData.id}`} />
            <div className="offer__bottom">
                <p>{offerData.text}</p>
            </div>
        </article>
    );
};

export default Offer;
