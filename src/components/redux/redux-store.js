import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunkMddleware from 'redux-thunk';
import mainContentReducer from './main-content-reducer';

const reducer = combineReducers({
    mainContentPage: mainContentReducer
});

const store = createStore(reducer, applyMiddleware(thunkMddleware));

export default store;