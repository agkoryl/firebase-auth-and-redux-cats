import {createStore, combineReducers} from 'redux';

import uiReducer from './ui/reducer';
import authReducer from './auth/reducer';

const rootReducer = combineReducers({
    ui: uiReducer, 
    auth: authReducer
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;