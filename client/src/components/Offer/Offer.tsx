import React from 'react';
import './Offer.scss';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import classes from 'react-style-classes';
import Helpers from '../../helpers/shared';
import SvgSprite from '../UI/SvgSprite/SvgSprite';
import Tag from '../UI/Typography/Tag/Tag';
import Heading from '../UI/Typography/Heading/Heading';
import defaultPlaceholder from '../../assets/imgs/placeholder_default.png';
import { OfferType } from '../../helpers/types';
import LoaderImg from '../UI/LoaderImg/LoaderImg';

type OfferProps = {
    offerData: OfferType;
};

const Offer: React.FC<OfferProps> = ({ offerData }) => {
    const tags = offerData.tags.map((tag, i) => (
        <Tag size="small" key={tag + i}>
            {tag}
        </Tag>
    ));

    let imgSrc = defaultPlaceholder;
    let imgAlt = 'Offer image pleaceholder';
    if (offerData.imgs.length > 0) {
        imgSrc = offerData.imgs[0].src;
        imgAlt = offerData.imgs[0].alt;
    }

    return (
        <article className={classes('offer', offerData.premium && 'offer--premium')}>
            <div className="offer__top">
                <figure className="offer__image-box">
                    <LazyLoad once={true} placeholder={<LoaderImg />}>
                        <img src={imgSrc} alt={imgAlt} className="offer__image" />
                    </LazyLoad>
                </figure>
                <div className="offer__content">
                    <div className="offer__content-top">
                        <Heading tag="h2" type="secondary" className="offer__title">
                            <Link to={`/offers/${offerData._id}`} className="offer__link">
                                {offerData.title}
                            </Link>
                        </Heading>
                        <p className="offer__date">{Helpers.formatDate(offerData.createdAt)}</p>
                        {/* <a
                            href={`https://www.google.com/maps/@${offerData.location.coordinates[1]},${offerData.location.coordinates[0]},15z`}
                            target="_blank"
                            className="offer__location"
                        >
                            <SvgSprite icon="location-pin" color="primary" />
                            <span>{offerData.location.city}</span>
                        </a> */}
                        <p className="offer__short">{offerData.shortText}</p>
                    </div>
                    <div className="offer__content-bottom">
                        <p className="offer__tags">{tags}</p>
                        <label className="offer__details-toggle" htmlFor={`offer-id-${offerData._id}`}>
                            <SvgSprite icon="info-with-circle" />
                        </label>
                    </div>
                </div>
            </div>
            <input className="offer__details-switcher" type="checkbox" id={`offer-id-${offerData._id}`} />
            <div className="offer__bottom">
                <p>{offerData.description}</p>
            </div>
        </article>
    );
};

export default Offer;
