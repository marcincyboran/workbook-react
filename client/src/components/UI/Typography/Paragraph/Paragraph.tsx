import React from 'react';
import './Paragraph.scss';
import classes from 'react-style-classes';
import PropTypes, { InferProps } from 'prop-types';
import Helper from './../../../../helpers/shared';

const ParagraphProps = {
    className: PropTypes.string,
    mod: PropTypes.string,
};
type ParagraphPropsTypes = InferProps<typeof ParagraphProps>;

const Heading: React.FC<ParagraphPropsTypes> = ({ children, mod, className }) => {
    const baseClass = `paragraph`;

    const paragraphClasses = classes(baseClass, mod && Helper.genModsFromProp(baseClass, mod), className);

    return <p className={paragraphClasses}>{children}</p>;
};

export default Heading;
