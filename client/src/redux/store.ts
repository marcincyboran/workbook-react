import { createStore, bindActionCreators } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducer';

import { systemActions } from './system';
import { searchActions } from './search';

const store = createStore(rootReducer, composeWithDevTools());

// DEVELOPMENT ONLY
(window as any).store = store;

const allActions = bindActionCreators(
    {
        ...systemActions,
        ...searchActions,
    },
    store.dispatch
);

export type AppState = ReturnType<typeof rootReducer>;
export { store, allActions };
