import React from 'react';
import './FilterApply.scss';

const FilterApply: React.FC = ({ children }) => {
    return (
        <button type="submit" className="filter__apply">
            {children ? children : 'Apply'}
        </button>
    );
};

export default FilterApply;
