import React, { useEffect, useState } from 'react';
import './CompanyDetails.scss';
import { useParams, useRouteMatch } from 'react-router-dom';
import { CompanyType } from '../../helpers/types';
import { Link } from 'react-router-dom';
import CONSTANTS from '../../helpers/constants';
import http from '../../helpers/axios';
import Review from '../../components/Review/Review';
import SvgSprite from '../../components/UI/SvgSprite/SvgSprite';
import Gallery from '../../components/Gallery/Gallery';
import Loader from '../../components/UI/Loader/Loader';
import List from '../../components/UI/List/List';
import ListItem from '../../components/UI/List/ListItem/ListItem';
import Heading from '../../components/UI/Typography/Heading/Heading';
import Hr from '../../components/UI/Hr/Hr';
import Tag from '../../components/UI/Typography/Tag/Tag';
import Button from '../../components/UI/Button/Button';

const CompanyDetailPage: React.FC = () => {
    const { id } = useParams();
    const [data, setData] = useState<CompanyType>();
    const match = useRouteMatch();

    const fetchCompanyDetails = async () => {
        try {
            const res = await http(`/companies/${id}`);
            console.log(res);
            if (res.data.payload) setData(res.data.payload);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if (id) fetchCompanyDetails();
    }, [id]);

    return (
        <>
            {data ? (
                <section className="companyDetail">
                    <div className="companyDetail__top">
                        <Heading tag="h2" type="primary" className="companyDetail__top-heading">
                            {data.name}
                        </Heading>
                        <a
                            href={`https://www.google.com/maps?q=${data.address}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="companyDetail__top-location"
                        >
                            <SvgSprite icon="location-pin" />
                            <span>{data.address}</span>
                        </a>
                        <div className="companyDetail__top-rate">
                            <span>{((data.likes / data.votes) * 10).toFixed(1)}</span>
                        </div>
                    </div>
                    <Gallery imgs={data.imgs} items={3} />
                    <div className="companyDetail__content">
                        <div className="companyDetail__description">
                            <Heading tag="h3" type="secondary" className="u-mb-small">
                                Opis:
                            </Heading>
                            <p className="companyDetail__description-text u-mb-big">{data.text}</p>
                            <Heading tag="h3" type="secondary" className="u-mb-small">
                                Usługi:
                            </Heading>
                            <List addClass="u-mb-big">
                                {data.services.map((el, i) => (
                                    <ListItem key={el + i}>{el}</ListItem>
                                ))}
                            </List>
                            <Heading tag="h3" type="secondary" className="u-mb-small">
                                Informacje:
                            </Heading>
                            {/* <div className="adress-details u-mb-big">
                                <address>
                                    <span>{data.details.zipCode} {data.location}</span>
                                    <span>ul. {data.details.address}</span>
                                    <span>{data.details.country}</span>                                
                                </address>
                                <span>{(data.details.nip) ? 'NIP: '+ data.details.nip : ''}</span>
                                <span>{(data.details.regon) ? 'REGON: '+ data.details.regon : ''}</span>                               
                            </div> */}
                            <Heading tag="h3" type="secondary" className="u-mb-small">
                                Strona internetowa:
                            </Heading>
                            {data.site && (
                                <List addClass="u-mb-big">
                                    <ListItem type="normal" customIcon="home">
                                        <a
                                            href={data.site}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="companyDetail__site"
                                        >
                                            {data.site}
                                        </a>
                                    </ListItem>
                                </List>
                            )}
                        </div>
                        <div className="companyDetail__reviews">
                            {data.reviews!.length >= 1 ? (
                                data.reviews.map((review, i) => <Review review={review} key={review.name + i} />)
                            ) : (
                                <p>Firma nie posiada jeszcze ocen</p>
                            )}
                        </div>
                    </div>
                    <div className="companyDetail__bottom">
                        <Button icon="magnifying-glass" color="disabled" link="disabled" size="big">
                            Lista ofert
                        </Button>
                        <Button icon="camera" color="disabled" link="disabled" size="big">
                            Projekty
                        </Button>
                        <Button icon="calendar" color="tertiary" link="1" size="big">
                            Zarezerwuj
                        </Button>
                    </div>
                </section>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default CompanyDetailPage;
