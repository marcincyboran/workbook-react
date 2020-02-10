import React from 'react';
import './FilterMore.scss';
import classes from 'react-style-classes';

interface FilterMoreProps {
    show: boolean;
}

const FilterMore: React.FC<FilterMoreProps> = ({ show, children }) => {
    const boxClass = classes('filter__more', show && 'filter__more--show');
    return <div className={boxClass}>{children}</div>;
};

export default FilterMore;
