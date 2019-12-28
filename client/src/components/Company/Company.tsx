import React from 'react';
import './Company.scss';
import { Link } from 'react-router-dom';
import Tag from '../UI/Typography/Tag/Tag';
import Heading from '../UI/Typography/Heading/Heading';
import Rating from '../Rating/Rating';
import CompanyPlaceholder from '../../assets/imgs/placeholder_company.png';
import SvgSprite from '../UI/SvgSprite/SvgSprite';
import { CompanyType } from '../../helpers/types';
import LoaderImg from '../UI/LoaderImg/LoaderImg';
import LazyLoad from 'react-lazyload';

type CompanyProps = {
    companyData: CompanyType;
};

const Company: React.FC<CompanyProps> = ({ companyData }) => {
    const tags = companyData.tags.map((tag, i) => <Tag key={tag + i}>{tag}</Tag>);

    return (
        <article className="company">
            <div className="company__top">
                <div className="company__left">
                    <figure>
                        <LazyLoad once={true} placeholder={<LoaderImg />}>
                            <img
                                src={companyData.logo ? companyData.logo : CompanyPlaceholder}
                                alt={`${companyData.name} logo`}
                                className="company__image"
                            />
                        </LazyLoad>
                    </figure>
                    <div className="company__rating">
                        <div>
                            <Rating likes={companyData.likes} votes={companyData.votes} />
                        </div>
                        <span className="company__likes">({companyData.likes})</span>
                    </div>
                </div>
                <div className="company__right">
                    <div className="company__info">
                        <a
                            href={`https://www.google.com/maps?q=${companyData.address}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="company__location"
                        >
                            <SvgSprite icon="location-pin" color="primary" />
                            <span>{companyData.address}</span>
                        </a>
                        <Heading tag="h2" type="secondary" className="company__title">
                            <Link to={`/companies/${companyData._id}`} className="company__link">
                                {companyData.name}
                            </Link>
                        </Heading>
                        <p className="company__description">{companyData.text}</p>
                    </div>
                    <p className="company__tags">{tags}</p>
                </div>
            </div>
        </article>
    );
};

export default Company;
