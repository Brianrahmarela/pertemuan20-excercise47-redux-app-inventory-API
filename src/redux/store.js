import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
// import todo from '../redux/reducers/todos.reducers'
import rootReducer from '../redux/reducers/index.reducers'
export default createStore(rootReducer, applyMiddleware(thunk));