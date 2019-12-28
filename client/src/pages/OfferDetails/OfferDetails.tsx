import React, { useEffect, useState } from 'react';
import './OfferDetails.scss';
import { useParams, useRouteMatch } from 'react-router-dom';
import { OfferType } from '../../helpers/types';
import { Link } from 'react-router-dom';
import CONSTANTS from '../../helpers/constants';
import http from '../../helpers/axios';
import Gallery from '../../components/Gallery/Gallery';
import Loader from '../../components/UI/Loader/Loader';
import List from '../../components/UI/List/List';
import ListItem from '../../components/UI/List/ListItem/ListItem';
import Heading from '../../components/UI/Typography/Heading/Heading';
import Hr from '../../components/UI/Hr/Hr';
import Tag from '../../components/UI/Typography/Tag/Tag';
import Button from '../../components/UI/Button/Button';

const OfferDetailPage: React.FC = () => {
    const { id } = useParams();
    const [data, setData] = useState<OfferType>();
    const match = useRouteMatch();

    const fetchOfferDetails = async () => {
        try {
            const res = await http(`/offers/${id}`);
            console.log(res);
            if (res.data.payload) setData(res.data.payload);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (id) fetchOfferDetails();
    }, [id]);

    return (
        <>
            {data ? (
                <section className="offerDetail">
                    <div className="offerDetail__top">
                        <Heading tag="h2" type="primary" className="offerDetail__top-title">
                            {data.title}
                        </Heading>
                    </div>
                    <Gallery imgs={data.imgs} />
                    <div className="offerDetail__content">
                        <div className="offerDetail__description">
                            <Heading tag="p" type="secondary" className="u-mb-medium">
                                {data.shortText}
                            </Heading>
                            <Hr color="secondary" />
                            <p>
                                Tags:{' '}
                                {data.tags.map((tag, i) => (
                                    <Tag size="small" key={tag + i}>
                                        {tag}
                                    </Tag>
                                ))}
                            </p>
                            <p className="offerDetail__description-text">{data.description}</p>
                            <Button link={`${match.url}/add`} icon="plus" color="primary">
                                Złóż ofertę
                            </Button>
                        </div>
                        <aside className="offerDetail__sidebar">
                            <Heading tag="h3" type="secondary" className="u-mb-medium">
                                Kontakt:
                            </Heading>
                            <List>
                                <ListItem type="normal" customIcon="user">
                                    {data.owner.firstName} {data.owner.lastName}
                                </ListItem>
                                <ListItem type="normal" customIcon="old-phone">
                                    {data.owner.phone}
                                </ListItem>
                                <ListItem type="normal" customIcon="email">
                                    <a href={`mailto:${data.owner.email}`}>{data.owner.email}</a>
                                </ListItem>
                                <ListItem type="normal" customIcon="star">
                                    <Link
                                        to={{
                                            pathname: `/users/${data.owner._id}`,
                                            state: { fromOfferDetail: true },
                                        }}
                                    >
                                        Owner profile
                                    </Link>
                                </ListItem>
                                {/* <ListItem type="normal" customIcon="facebook" >Facebook ??</ListItem> */}
                                {/* <ListItem type="normal" customIcon="linkedin" >Linkedin ??</ListItem> */}
                            </List>
                            <h3 className="heading-secondary u-mb-medium">Lokalizacja:</h3>
                            <List addClass="u-mb-big">
                                <ListItem type="normal" customIcon="location-pin">
                                    <a
                                        href={`https://www.google.com/maps?q=${data.location.city}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {data.location.city}
                                    </a>
                                </ListItem>
                            </List>
                            <iframe
                                title={data.location.city}
                                className="offerDetail__map"
                                src={`https://maps.google.com/maps/embed/v1/place?key=${CONSTANTS.MAP_API}q=${data.location.coordinates[1]},${data.location.coordinates[0]}`}
                                style={{ border: 0 }}
                            />
                        </aside>
                    </div>
                </section>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default OfferDetailPage;
