import React, { SyntheticEvent } from 'react';
import './Search.scss';
import sprite from '../../../../assets/svgs/sprite.svg';

interface searchProps {
    onSubmit: (event: SyntheticEvent) => void;
}

const Search: React.FC<searchProps> = ({ onSubmit }) => {
    return (
        <form className="search">
            <input type="text" className="search__input" name="query" />
            <div className="search__pipe">&nbsp;</div>
            <input type="text" className="search__input" name="location" />
            <button type="submit" className="search__submit">
                <svg className="search__submit-icon">
                    <use xlinkHref={`${sprite}#icon-magnifying-glass`} />
                </svg>
                <span>Szukaj</span>
            </button>
        </form>
    );
};

export default Search;
