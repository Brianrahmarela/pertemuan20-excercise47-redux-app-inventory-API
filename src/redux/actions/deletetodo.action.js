import axios from 'axios';

export const DELETE_TODO_REQUEST = "DELETE_TODO_REQUEST";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_FAILED = "DELETE_TODO_FAILED";

export const deleteTodoRequest = () => {
    return {
        type : DELETE_TODO_REQUEST,
    };
};

export const deleteTodoSuccess = (result) => {
    return {
        type : DELETE_TODO_SUCCESS,
        result,
    };
};

export const deleteTodoError = (error) => {
    return {
        type : DELETE_TODO_FAILED,
        error,
    };
};

export const deleteTodo = (id) => {
  console.log(id);
    return function (dispatch) {
        dispatch(deleteTodoRequest());

        axios
        .delete("https://603cb663f4333a0017b6833f.mockapi.io/todolist/"+id)
        .then(result => dispatch(deleteTodoSuccess(result.data)))
        .catch(error => dispatch(deleteTodoError(error)))
    };
};