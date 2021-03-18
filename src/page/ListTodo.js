import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getTodo} from '../redux/actions/gettodo.action';
import {postTodo} from '../redux/actions/posttodo.action'
import {deleteTodo} from '../redux/actions/deletetodo.action'
import {putTodo} from '../redux/actions/puttodo.action'
import {Spinner} from 'react-bootstrap'
import {Button, Form, Modal} from 'react-bootstrap';
import {useState} from 'react';

function ListTodo() {

  const ListTodo = useSelector((state) => state.getTodo.data);
  console.log(ListTodo);

  const dispatch = useDispatch();

  useEffect(() => {
   dispatch((getTodo()));
  }, [dispatch])


  let addTodoHandle = (e) => {
    e.preventDefault();
    dispatch(postTodo(e.target.todoItem.value))
    e.target.todoItem.value = "";
  }

  //MODAL
  const [dataModal, setDataModal] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [todoId, setTodoId] = useState("");

  const handleShow = (id) => {
    setTodoId(id)
    setShowModal(true)
  
  };
  const handleClose = () => setShowModal(false);

  const handleCloseSave = (e) => {
    setShowModal(false);
    console.log(ListTodo);
    dispatch(putTodo(todoId,dataModal))
  }

  const handleChangeModal = (e) => {
    setDataModal(e.target.value);
  }


  console.log(dataModal);

  return (
    <div>
      <h3 style={{marginTop: '50px'}}>Todo App from API:</h3>
        <Form onSubmit={addTodoHandle}>
            <Form.Group >
              <Form.Control name="todoItem" type="text" placeholder="add new item" style={{width: '400px', margin: '20px 0px 10px 0px'}} className="mx-auto" />
              <Button variant="primary" type="submit">Add Data</Button> 
            </Form.Group>
        </Form>
        <br></br>
        <h3>List Data:</h3>

        <div className="mx-auto" style={{backgroundColor: '#F8F8F8',width: '300px',borderRadius: '15px',padding: '20px',boxShadow: '0 1px 1px rgba(0, 0, 0, 0.11),0 2px 2px rgba(0,0,0,0.12),0 4px 4px rgba(0,0,0,0.12)'}}>

          {/* <h3>List Data:</h3> */}
          {ListTodo === undefined ? (
              <Spinner animation="border" />
            ) : (
              ListTodo.map((item, index)=> (
                <div key={index}>
                  <h5 style={{color:'#047bfe', paddingBottom: '5px', marginBottom: '10px'}} key={index} id={item.id}>{item.todo}<br></br>
                  <Button variant="danger" type="submit" style={{marginTop: '7px'}} onClick={()=> dispatch((deleteTodo(item.id)))}>Delete</Button>
                  {/* <Button variant="success" type="submit" style={{marginTop: '7px'}} onClick={()=> dispatch((putTodo(item.id)))}>Edit</Button></h5> */}
                  <Button variant="success" type="submit" style={{marginTop: '7px'}} onClick={() => handleShow(item.id)}>Edit</Button></h5>
                </div>
              ))
              )}
        </div>


        <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Item: </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Control size="lg" type="text" placeholder="update your item" onChange={handleChangeModal}/>
            <br />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default ListTodo;
