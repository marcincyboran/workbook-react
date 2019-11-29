import React from 'react';
import './Offer.scss';
import PropTypes, { InferProps } from 'prop-types';
import { Link } from 'react-router-dom';
import classes from 'react-style-classes';
import Helpers from '../../helpers/shared';
import SvgSprite from '../UI/SvgSprite/SvgSprite';
import Tag from '../UI/Typography/Tag/Tag';
import Heading from '../UI/Typography/Heading/Heading';
import defaultPlaceholder from '../../assets/imgs/placeholder_default.png';

// "_id": "5d7a514b5d2c12c7449be047",
// "owner": "5d7a514b5d2c12c7449be043",
// "title": "Zlecę remont pokoju 24m2",
// "shortText": "Poszukuję osoby do wykonania remontu generalnego pokoju 24m2, gładzie, podwieszany sufit, wylewka, panele, wymiana okien i drzwi.",
// "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolorem necessitatibus totam modi suscipit mollitia ducimus minus a vel velit, excepturi sunt tempore architecto quasi consequuntur sequi autem beatae cum nostrum adipisci consequatur ipsam et at? Amet reprehenderit perspiciatis itaque consequuntur recusandae excepturi corporis minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolorem necessitatibus totam modi suscipit mollitia ducimus minus a vel velit, excepturi sunt tempore architecto quasi consequuntur sequi autem beatae cum nostrum adipisci consequatur ipsam et at? Amet reprehenderit perspiciatis itaque consequuntur recusandae excepturi corporis minima veritatis aspernatur explicabo voluptate accusantium quibusdam, praesentium placeat consectetur porro obcaecati, at ullam temporibus nisi! Labore explicabo obcaecati voluptas sequi error reprehenderit deleniti totam. ",
// "address": "Matejki 17, 59-920 Bogatynia",
// "category": "inside",
// "photos": [
//     {
//         "src": "https://www.jillianharris.com/wp-content/uploads/2017/08/Jillian-Harris-Things-You-Need-to-Know-Before-a-Home-Renovation-1.jpg",
//         "alt": "Renovation"
//     }
// ],
// "butget": 2000,
// "tags": ["remont", "podłoga", "pilne", "wykończenie", "sufit"]

// TODO Create and import Offert type instead of any
const OfferProps = {
    offerData: PropTypes.objectOf(PropTypes.any).isRequired,
};
type OfferPropsType = InferProps<typeof OfferProps>;

const Offer: React.FC<OfferPropsType> = ({ offerData }) => {
    console.log(offerData);
    const tags = offerData.tags.map((tag: string) => <Tag key={tag}>{tag}</Tag>);

    let imgSrc = defaultPlaceholder;
    let imgAlt = 'Offer image pleaceholder';
    if (offerData.photos.length > 0) {
        imgSrc = offerData.photos[0].src;
        imgAlt = offerData.photos[0].alt;
    }

    return (
        <article className={classes('offer', offerData.premium && 'offer--premium')}>
            <div className="offer__top">
                <figure className="offer__image-box">
                    <img src={imgSrc} alt={imgAlt} className="offer__image" />
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
