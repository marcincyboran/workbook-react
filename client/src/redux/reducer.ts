import { combineReducers } from 'redux';
import globalReducer from './global/index';

const rootReducer = combineReducers({
    global: globalReducer,
});

export default rootReducer;
