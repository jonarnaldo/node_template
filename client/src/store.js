import { createStore, combineReducers } from 'redux';
import { about } from './reducers/index';


const reducers = combineReducers({ about })

const store = createStore(reducers);

export default store;
