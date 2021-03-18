import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import rootReducer from '../redux/reducers/index.reducers'

export default createStore(rootReducer, applyMiddleware(thunk));