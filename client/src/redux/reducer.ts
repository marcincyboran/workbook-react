import { combineReducers } from 'redux';
import systemReducer from './system';
import searchReducer from './search';

const rootReducer = combineReducers<any>({
    system: systemReducer,
    search: searchReducer,
});

export default rootReducer;
