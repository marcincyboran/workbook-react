import React, { FormEvent } from 'react';
import './Search.scss';
import SvgSprite from './../../../UI/SvgSprite/SvgSprite';

const Search: React.FC = () => {
    const onSubmitHandler = (e: FormEvent) => {
        e.preventDefault();
        console.log(e);
    };

    return (
        <form className="search" onSubmit={onSubmitHandler}>
            <input type="text" className="search__input" name="query" />
            <div className="search__pipe">&nbsp;</div>
            <input type="text" className="search__input" name="location" />
            <button type="submit" className="search__submit">
                <SvgSprite icon="magnifying-glass" className="search__submit-icon" />
                <span className="search__submit-text">Szukaj</span>
            </button>
        </form>
    );
};

export default Search;
