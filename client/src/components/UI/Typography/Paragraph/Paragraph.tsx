import React from 'react';
import './Paragraph.scss';
import classes from 'react-style-classes';
import Helper from './../../../../helpers/shared';

type ParagraphProps = {
    className?: string;
    mod?: string;
};

const Heading: React.FC<ParagraphProps> = ({ children, mod, className }) => {
    const baseClass = `paragraph`;

    const paragraphClasses = classes(baseClass, mod && Helper.genModsFromProp(baseClass, mod), className);

    return <p className={paragraphClasses}>{children}</p>;
};

export default Heading;
