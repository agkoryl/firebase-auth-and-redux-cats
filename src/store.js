import {createStore, combineReducers} from 'redux';

import uiReducer from './ui/reducer'

const rootReducer = combineReducers({
    ui: uiReducer 
})

const store = createStore(rootReducer);

export default store;