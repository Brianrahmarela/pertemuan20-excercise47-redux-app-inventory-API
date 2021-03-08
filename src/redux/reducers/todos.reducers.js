import {ADDTODOS} from '../actions/todos.actions';

const initialState = [
  {
    id: 1,
    todo: "coding",
  },
  {
    id: 2,
    todo: "sleep",
  },
]

const todo = (state = initialState, action) => {
  console.log("action", action);
  switch (action.type){
    case ADDTODOS:
      console.log(initialState.length-1 )
      action.newData.id = state[state.length-1].id + 1
      return [
        ...state,
        action.newData        
        // {
        //     id: state[state.length-1].id + 1,
        //     todo: action.newTodo
        // }
   
      ]
    default:
      return state
  }

}

export default todo;