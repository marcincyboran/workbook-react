import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import Helpers from '../../helpers/shared';
import SvgSprite from '../UI/SvgSprite/SvgSprite';
import Tag from '../UI/Typography/Tag/Tag';

// TODO Create and import Offert type instead of any
const OfferProps = {
    offerData: PropTypes.objectOf(PropTypes.any).isRequired,
};
type OfferPropsType = InferProps<typeof OfferProps>;

const Offer: React.FC<OfferPropsType> = ({ offerData }) => {
    const tags = offerData.tags.map((tag: string) => <Tag key={tag}>{tag}</Tag>);

    return (
        <article className="list__item">
            <div className="list__top">
                <p className="list__date">{Helpers.formatDate(offerData.date)}</p>
                <figure className="list__image-box">
                    <img
                        src="http://buildercorp.pl/wp-content/uploads/2017/05/BX.jpg"
                        alt="Budimex"
                        className="list__image"
                    />
                </figure>
                <div className="list__content">
                    <h2 className="heading-secondary u-mb-big">
                        <a className="list__offer-link" href="#redirect">
                            {offerData.title}
                        </a>
                    </h2>
                    <a
                        href={`https://www.google.com/maps?q=${offerData.location}`}
                        target="_blank"
                        className="list__location"
                    >
                        <SvgSprite icon="location-pin" color="primary" />
                        <span>{offerData.location}</span>
                    </a>
                    <p className="list__category-box">{tags}</p>
                    <label className="list__details-toggle" htmlFor={`offer-id-${offerData.id}`}>
                        <SvgSprite icon="info-with-circle" />
                    </label>
                </div>
            </div>
            <input className="list__details-switcher" type="checkbox" id={`offer-id-${offerData.id}`} />
            <div className="list__bottom">
                <p>{offerData.text}</p>
            </div>
        </article>
    );
};

export default Offer;
