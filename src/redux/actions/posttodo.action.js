import axios from 'axios';

export const POST_TODO_REQUEST = "POST_TODO_REQUEST"
export const POST_TODO_SUCCESS= "POST_TODO_SUCCESS"
export const POST_TODO_FAILED = "POST_TODO_FAILED"

export const postTodoRequest = () => {
  return{
    type: POST_TODO_REQUEST,
  }
}
export const postTodoSuccess = (result) => {
  return{
    type: POST_TODO_SUCCESS,
    result,
  }
}
export const postTodoError = (error) => {
  return{
    type: POST_TODO_FAILED,
    error,
  }
}

export const postTodo = (newTodo) => {
  return function (dispatch){
    dispatch(postTodoRequest())
    axios
      .post('https://603cb663f4333a0017b6833f.mockapi.io/todolist',{todo : newTodo})
      .then(result => dispatch(postTodoSuccess(result.data)))
      .catch(error => dispatch(postTodoError(error)))
  }
}