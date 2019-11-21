import React, { SyntheticEvent } from 'react';
import SearchView from './SearchView';

class Search extends React.Component {
    onSubmitHandler = (event: SyntheticEvent) => {
        console.log(event);
    };

    render() {
        return <SearchView onSubmit={this.onSubmitHandler} />;
    }
}

export default Search;
