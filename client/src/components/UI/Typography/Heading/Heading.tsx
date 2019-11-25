import React from 'react';
import './Heading.scss';
import classes from 'react-style-classes';
import PropTypes, { InferProps } from 'prop-types';
import Helper from './../../../../helpers/shared';

const HeadingProps = {
    tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']).isRequired,
    type: PropTypes.oneOf(['primary', 'secondary']).isRequired,
    mod: PropTypes.string,
    className: PropTypes.string,
};
type HeadingPropsTypes = InferProps<typeof HeadingProps>;

const Heading: React.FC<HeadingPropsTypes> = ({ children, tag, type, mod, className }) => {
    const baseClass = `heading-${type}`;

    const headingClasses = classes(baseClass, mod && Helper.genModsFromProp(baseClass, mod), className);

    return React.createElement(tag, { className: headingClasses }, children);
};

export default Heading;
