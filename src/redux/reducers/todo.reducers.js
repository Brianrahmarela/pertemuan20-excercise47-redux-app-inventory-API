import {
  GET_TODO_REQUEST, 
  GET_TODO_SUCCESS,
  GET_TODO_FAILED
} from '../actions/gettodo.action';

const initialState = {
  data:[],
  error: null,
  isLoading: false,
};
const getTodo = (state = initialState, action) => {
  switch(action.type){
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
    default:
      return state;
  }
}

export default getTodo;