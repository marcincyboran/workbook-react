import React from 'react';
import './Company.scss';
import { Link } from 'react-router-dom';
import PropTypes, { InferProps } from 'prop-types';
import Tag from '../UI/Typography/Tag/Tag';
import Heading from '../UI/Typography/Heading/Heading';
import Rating from '../Rating/Rating';
import CompanyPlaceholder from '../../assets/imgs/placeholder_company.png';
import SvgSprite from '../UI/SvgSprite/SvgSprite';

// TODO Create and import Offert type instead of any
const CompanyProps = {
    companyData: PropTypes.objectOf(PropTypes.any).isRequired,
};
type CompanyPropsType = InferProps<typeof CompanyProps>;

const Company: React.FC<CompanyPropsType> = ({ companyData }) => {
    const tags = companyData.tags.map((tag: string) => <Tag key={tag}>{tag}</Tag>);

    return (
        <article className="company" data-id="${company.id}">
            <div className="company__top">
                <div className="company__left">
                    <figure>
                        <img
                            src={companyData.logo ? companyData.logo : CompanyPlaceholder}
                            alt={`${companyData.name} logo`}
                            className="company__image"
                        />
                    </figure>
                    <div className="company__rating">
                        <Rating likes={companyData.likes} votes={companyData.votes} />
                        <span className="company__likes">({companyData.likes})</span>
                    </div>
                </div>
                <div className="company__right">
                    <div className="company__info">
                        <a
                            href={`https://www.google.com/maps?q=${companyData.location}`}
                            target="_blank"
                            className="company__location"
                        >
                            <SvgSprite icon="location-pin" color="primary" />
                            <span>{companyData.location}</span>
                        </a>
                        <Heading tag="h2" type="secondary" className="company__title">
                            <Link to={`/companies/${companyData.id}`} className="company__link">
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
