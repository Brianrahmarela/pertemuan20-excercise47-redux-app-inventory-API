export const ADDTODOS = 'ADDTODOS';

export const addTodos = (newData) => {
  
  return{
    type: ADDTODOS,
    newData: {id: 1, todo : newData}
  }
}