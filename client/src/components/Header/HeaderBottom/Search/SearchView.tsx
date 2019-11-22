import React from 'react';
import './Search.scss';
import PropTypes, { InferProps } from 'prop-types';
import SvgSprite from './../../../UI/SvgSprite/SvgSprite';

const SearchProp = {
    onSubmit: PropTypes.func.isRequired,
};
type ContainerPropsTypes = InferProps<typeof SearchProp>;

const Search: React.FC<ContainerPropsTypes> = ({ onSubmit }) => {
    return (
        <form className="search">
            <input type="text" className="search__input" name="query" />
            <div className="search__pipe">&nbsp;</div>
            <input type="text" className="search__input" name="location" />
            <button type="submit" className="search__submit">
                <SvgSprite icon="magnifying-glass" customClass="search__submit-icon" />
                <span className="search__submit-text">Szukaj</span>
            </button>
        </form>
    );
};

export default Search;
