import React, { SyntheticEvent } from 'react';
import './Search.scss';
import SvgSprite from './../../../UI/SvgSprite/SvgSprite';

class Search extends React.Component {
    onSubmitHandler = (event: SyntheticEvent) => {
        console.log(event);
    };

    render() {
        return (
            <form className="search">
                <input type="text" className="search__input" name="query" />
                <div className="search__pipe">&nbsp;</div>
                <input type="text" className="search__input" name="location" />
                <button type="submit" className="search__submit">
                    <SvgSprite icon="magnifying-glass" className="search__submit-icon" />
                    <span className="search__submit-text">Szukaj</span>
                </button>
            </form>
        );
    }
}

export default Search;
