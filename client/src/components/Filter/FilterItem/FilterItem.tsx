import React from 'react';
import './FilterItem.scss';

interface FilterItemProps {
    onClickHandler: () => void;
}

const FilterItem: React.FC<FilterItemProps> = ({ onClickHandler, children }) => {
    return (
        <div onClick={onClickHandler} className="filter__item">
            {children}
        </div>
    );
};

export default FilterItem;
