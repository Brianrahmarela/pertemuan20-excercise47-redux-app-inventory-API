import axios from 'axios';

export const GET_TODO_REQUEST = "GET_TODO_REQUEST"
export const GET_TODO_SUCCESS= "GET_TODO_SUCCESS"
export const GET_TODO_FAILED = "GET_TODO_FAILED"

export const getTodoRequest = () => {
  return{
    type: GET_TODO_REQUEST,
  }
}
export const getTodoSuccess = (result) => {
  return{
    type: GET_TODO_SUCCESS,
    result
  }
}
export const getTodoError = (error) => {
  return{
    type: GET_TODO_FAILED,
    error,
  }
}

export const getTodo = () => {
  return function (dispatch){
    dispatch(getTodoRequest())
    axios
      .get('https://603cb663f4333a0017b6833f.mockapi.io/todolist')
      .then(result => dispatch(getTodoSuccess(result.data)))
      .catch(error => dispatch(getTodoError(error)))
  }
}