import axios from 'axios';

export const PUT_TODO_REQUEST = "PUT_TODO_REQUEST";
export const PUT_TODO_SUCCESS = "PUT_TODO_SUCCESS";
export const PUT_TODO_FAILED = "PUT_TODO_FAILED";

export const putTodoRequest = () => {
    return {
        type : PUT_TODO_REQUEST,
    };
};

export const putTodoSuccess = (result) => {
    return {
        type : PUT_TODO_SUCCESS,
        result,
    };
};

export const putTodoError = (err) => {
    return {
        type : PUT_TODO_FAILED,
        err,
    };
};

export const putTodo = (id, newTodo) => {
    console.log(id);
    console.log(newTodo);
    return function (dispatch) {
        dispatch(putTodoRequest());

        axios
        .put("https://603cb663f4333a0017b6833f.mockapi.io/todolist/"+id, {
            todo : newTodo
        })
        .then(result => dispatch(putTodoSuccess(result.data)))
        .catch(err => dispatch(putTodoError(err)))
    };
};