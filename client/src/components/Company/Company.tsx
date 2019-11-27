import React from 'react';
import './Company.scss';
import PropTypes, { InferProps } from 'prop-types';
import Helpers from '../../helpers/shared';
import SvgSprite from '../UI/SvgSprite/SvgSprite';
import Tag from '../UI/Typography/Tag/Tag';
import classes from 'react-style-classes';

// TODO Create and import Offert type instead of any
const CompanyProps = {
    companyData: PropTypes.objectOf(PropTypes.any).isRequired,
};
type CompanyPropsType = InferProps<typeof CompanyProps>;

const Company: React.FC<CompanyPropsType> = ({ companyData }) => {
    const tags = companyData.tags.map((tag: string) => <Tag key={tag}>{tag}</Tag>);

    return <p>Company</p>;
};

export default Company;
