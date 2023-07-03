import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunkMddleware from 'redux-thunk';
import mainContentReducer from './main-content-reducer';
import headerReducer from './header-reducer';
import { reducer as formReducer } from 'redux-form';

const reducer = combineReducers({
    mainContentPage: mainContentReducer,
    header: headerReducer,
    form: formReducer,
});

const store = createStore(reducer, applyMiddleware(thunkMddleware));

export default store;