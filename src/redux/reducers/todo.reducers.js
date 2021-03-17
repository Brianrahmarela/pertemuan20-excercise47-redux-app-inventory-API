import {
  GET_TODO_REQUEST, 
  GET_TODO_SUCCESS,
  GET_TODO_FAILED
} from '../actions/gettodo.action';

import {
  POST_TODO_REQUEST, 
  POST_TODO_SUCCESS,
  POST_TODO_FAILED
} from "../actions/posttodo.action";

import {
  DELETE_TODO_REQUEST, 
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILED
} from "../actions/deletetodo.action";

const initialState = {
  data:[],
  error: null,
  isLoading: false,
};

const getTodo = (state = initialState, action) => {
  switch(action.type){
    //GET CASE
    case GET_TODO_REQUEST:
      console.log('sudah request data', action);
      return{
        ...state,
        isLoading: true,
      }
    case GET_TODO_SUCCESS:
      console.log('list todo sukses');
      return{
        ...state,
        isLoading: false,
        data: action.result,
      }
    case GET_TODO_FAILED:
      console.log('list todo failed');
      return{
        ...state,
        isLoading: false,
        data: action.error,
      }
    
    //POST CASE
    case POST_TODO_REQUEST:
      return {
          ...state,
          isLoading: true,
      };
  
    case POST_TODO_SUCCESS:
        return {
            ...state,
            data: [
                ...state.data,
                action.result
            ],
            isLoading: false,
        };

    case POST_TODO_FAILED:
        console.log(action.error);
        return {
            ...state,
            error: action.error,
            isLoading: false,
        };
    
    //DELETE CASE
    case DELETE_TODO_REQUEST:
      return {
          ...state,
          isLoading: true,
      };
  
    case DELETE_TODO_SUCCESS:
        let newTodoList = state.data.filter(item => item.id !== action.result.id);
        console.log(newTodoList);
        return {
            ...state,
            data: [...newTodoList],
            isLoading: false,
        };

    case DELETE_TODO_FAILED:
        console.log(action.error);
        return {
            ...state,
            error: action.error,
            isLoading: false,
        };
    default:
      return state;
  }
}

export default getTodo;