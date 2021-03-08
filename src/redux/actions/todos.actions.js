export const ADDTODOS = 'ADDTODOS';

export const addTodos = (data) => {
  return{
    type: ADDTODOS,
    data: {id: 1, todo : data}
  }
}