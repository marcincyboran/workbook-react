import { createStore, bindActionCreators } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducer';

import { systemActions } from './system';
import { searchActions } from './search';

const store = createStore(rootReducer, composeWithDevTools());

const allActions = bindActionCreators(
    {
        ...systemActions,
        ...searchActions,
    },
    store.dispatch
);

export type AppStateType = ReturnType<typeof rootReducer>;
export { store, allActions };
