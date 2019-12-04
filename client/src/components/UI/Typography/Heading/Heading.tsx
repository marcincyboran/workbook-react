import React from 'react';
import './Heading.scss';
import classes from 'react-style-classes';
import Helper from './../../../../helpers/shared';

type HeadingProps = {
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';
    type: 'primary' | 'secondary' | 'tertiary';
    mod?: string;
    className?: string;
};

const Heading: React.FC<HeadingProps> = ({ children, tag, type, mod, className }) => {
    const baseClass = `heading-${type}`;

    const headingClasses = classes(baseClass, mod && Helper.genModsFromProp(baseClass, mod), className);

    return React.createElement(tag, { className: headingClasses }, children);
};

export default Heading;
