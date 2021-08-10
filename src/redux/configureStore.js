import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import Cookie from 'js-cookie';
import camelizeKeys from 'utils/camelizeKeys';
import combinedReducer from 'reducers';
import { defaultState as initialAuthState } from 'reducers/auth';
import rootSaga from 'sagas';
import { appConstants } from 'constants/index';

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

const initialState = combinedReducer({}, {});
const rootReducer = (state, action) => {
    if (action.type === HYDRATE) {
        const user = action.payload.auth.user.id ? action.payload.auth.user : state.auth.user;
        const nextState = {
            ...state, // use previous state
            // ...action.payload, // apply delta from hydration
            auth: {
                ...state.auth,
                user: {
                    loginAs: state.auth.user.loginAs,
                    ...user
                },
                // Don't uncomment the below line and line 79. That will break the code in LoginSignup.js and FE won't be able to fetch the
                // userDetails.
                // isUserDetailsFetched: true,
            },
            teacherKlass: {
                ...state.teacherKlass,
            },
        }
        return nextState
    } else if (action.type === appConstants.RESET_STORE) {
        state = {
            ...initialState,
            auth: {
                ...initialState.auth,
                jwtToken: '',
                user: {
                    loginAs: '',
                    isLaptopAvailable: null
                }
            }
        }
    }
    return combinedReducer(state, action)
}

// const initStore = () => {
//     const sagaMiddleware = createSagaMiddleware();
//     const store = createStore(rootReducer, {}, bindMiddleware([sagaMiddleware]));
//     store.sagaTask = sagaMiddleware.run(rootSaga);
//     return store;
// }

const singleton = (function() {
    // private singleton value which gets initialized only once
    let store;
    let initialState = {};
    if (typeof window !== 'undefined') {
        const user = camelizeKeys(JSON.parse(Cookie.get('userData') || '{}'));
        Cookie.remove('userData');
        initialState = {
            auth: {
                ...initialAuthState,
                user: {
                    ...initialAuthState.user,
                    ...user
                },
                // isUserDetailsFetched: true,
            }
        }
    }
    // we export the centralized method for retrieving the singleton value
    return {
        getStore: function() {
            // we initialize the singleton value only once
            if (store === undefined) {
                const sagaMiddleware = createSagaMiddleware();
                store = createStore(rootReducer, initialState, bindMiddleware([sagaMiddleware]));
                store.sagaTask = sagaMiddleware.run(rootSaga);
            }

            // and return the same config value wherever it is asked for
            return store;
        }
    };
})();

const wrapper = createWrapper(singleton.getStore, {
    debug: false
});

const store = singleton.getStore();

export {
    wrapper,
    store
}