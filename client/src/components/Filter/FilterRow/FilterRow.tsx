import React from 'react';
import './FilterRow.scss';

interface FilterRow {
    title?: string;
}

const FilterRow: React.FC<FilterRow> = ({ title, children }) => {
    return (
        <div className="filter__row">
            {title && <span className="filter__row--title">{title + ':'}</span>}
            {children}
        </div>
    );
};

export default FilterRow;
