import React from 'react';
import './Search.scss';

const Search: React.FC = props => {
    return (
        <form action="#" className="search">
            <input type="text" className="search__input search__input-query" name="search" id="search-query" />
            <div className="search__pipe">&nbsp;</div>
            <input type="text" className="search__input search__input-location" name="search" id="search-location" />
            <button type="submit" className="search__submit">
                <svg className="search__submit-icon">
                    <use xlinkHref={process.env.PUBLIC_URL + '/svgs/sprite.svg#icon-magnifying-glass'} />
                </svg>
                <span>Szukaj</span>
            </button>
        </form>
    );
};

export default Search;
