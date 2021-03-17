import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getTodo} from '../redux/actions/gettodo.action';
import {postTodo} from '../redux/actions/posttodo.action'
import {deleteTodo} from '../redux/actions/deletetodo.action'
import {Spinner} from 'react-bootstrap'
import {Button, Form} from 'react-bootstrap';
// import {useState} from 'react';

function ListTodo() {

  const ListTodo = useSelector((state) => state.getTodo.data);
  console.log(ListTodo);

  const dispatch = useDispatch();

  useEffect(() => {
   dispatch((getTodo()));
  }, [dispatch])

  // const [newTodos, setNewTodos] = useState()
  // function handleChange (e){
  //   setNewTodos (e.target.value)
  // }

  let addTodoHandle = (e) => {
    e.preventDefault();
    dispatch(postTodo(e.target.todoItem.value))
    e.target.todoItem.value = "";
  }
  return (
    <div>
      {/* <h1>List todo</h1> */}
      <h3 style={{marginTop: '50px'}}>Todo App from API:</h3>
        <Form onSubmit={addTodoHandle}>
            <Form.Group >
              <Form.Control name="todoItem" type="text" placeholder="add new item" style={{width: '400px', margin: '20px 0px 10px 0px'}} className="mx-auto" />
              <Button variant="primary" type="submit">Add Data</Button> 
            </Form.Group>
        </Form>
        <div className="mx-auto" style={{backgroundColor: '#F8F8F8',width: '300px',borderRadius: '15px',padding: '20px',boxShadow: '0 1px 1px rgba(0, 0, 0, 0.11),0 2px 2px rgba(0,0,0,0.12),0 4px 4px rgba(0,0,0,0.12)'}}>

          <h1>List Data:</h1>
          {ListTodo === undefined ? (
              <Spinner animation="border" />
            ) : (
              ListTodo.map((item, index)=> (
                <div key={index}>
                  <h5 style={{color:'#047bfe', paddingBottom: '5px', marginBottom: '10px'}} key={index} id={item.id}>{item.todo}<br></br><Button variant="danger" type="submit" style={{marginTop: '7px'}} onClick={()=> dispatch((deleteTodo(item.id)))}>Delete</Button></h5>
                </div>
              ))
            )}
        </div>

    </div>
  );
}

export default ListTodo;
