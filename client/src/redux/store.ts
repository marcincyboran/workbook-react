import { createStore, bindActionCreators } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';
import { globalActions } from './global/index';

const store = createStore(rootReducer, composeWithDevTools());

// DEVELOPMENT ONLY
(window as any).store = store;

const allActions = bindActionCreators(
    {
        setDocumentTitle: globalActions.setDocumentTitle,
        setUser: globalActions.setUser,
        clearUser: globalActions.clearUser,
    },
    store.dispatch
);

export type AppState = ReturnType<typeof rootReducer>;
export { store, allActions };
