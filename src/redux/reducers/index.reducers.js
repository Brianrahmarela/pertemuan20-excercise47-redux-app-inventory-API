import {combineReducers} from 'redux';
// import todo from '../reducers/todos.reducers';
import getTodo from './todo.reducers';

const rootReducers = combineReducers({getTodo});

export default rootReducers;