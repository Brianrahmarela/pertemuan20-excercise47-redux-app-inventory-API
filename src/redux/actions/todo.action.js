export const ADD_TODO = "ADD";

export const addTodo = (newTodo) => {
  return {
      type: ADD_TODO,
      newTodo
  };
};