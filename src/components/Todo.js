import {useState} from 'react';
import {connect} from 'react-redux';
import {addTodos} from '../redux/actions/todos.actions'
import {Button, Form} from 'react-bootstrap';

function Todo(props) {
  // console.log(props);
  let [newTodos, setNewTodos] = useState("")
  newTodos = "";

  function handleChange (e){
    console.log(e.target.value)
    setNewTodos (e.target.value)
    // setnewTodos(newTodos.newData.todo: "")
    }
    // setValInpt("")
    // console.log(valInpt);
    // handleChange.value = "";
  
  //MODAL
  // const [dataModal, setDataModal] = useState([]);
  // const [dataShow, setDataShow] = useState("");
  // const [showModal, setShowModal] = useState(false);

  // const handleShow = () => setShowModal(true);
  // const handleClose = () => setShowModal(false);

  // const handleCloseSave = () => {
  //   setShowModal(false);
  //   setDataShow(dataModal);
  // }

  // const handleChangeModal = (e) => {
    // setDataModal(...dataModal);
    // setDataModal(e.target.value);
  //   setDataModal([...dataModal, e.target.value])
  // }
  // console.log(dataShow);
  // let arr = dataModal.map(item => {
  // console.log(item);
  // return item;
  // })

  return (
    <div>
      <h3 style={{marginTop: '100px'}}>Release 1 (Menampilkan Todo menggunakan redux):</h3>
      {props.todos.map(item => (
        <p key={item.id}>{item.todo}</p>  
        ))}

        <h3 style={{marginTop: '50px'}}>Release 2 (Menambahkan Todo):</h3>
        <Form >
            <Form.Group>
              <Form.Control type="text" placeholder="add new item" onChange={handleChange} style={{width: '400px', margin: '20px 0px 10px 0px'}} className="mx-auto"/>
              <Button variant="primary" onClick={() => props.addTodos(newTodos)}>Add Data</Button> 
            </Form.Group>
        </Form>
        <div className="mx-auto" style={{backgroundColor: '#F8F8F8',width: '300px',borderRadius: '15px',padding: '20px',boxShadow: '0 1px 1px rgba(0, 0, 0, 0.11),0 2px 2px rgba(0,0,0,0.12),0 4px 4px rgba(0,0,0,0.12)'}}>

          <h1>List Data:</h1>

          {props.todos.map( (items, index) => {                
              return <h5 style={{color:'#047bfe'}} key={index}>{items.todo}</h5>
            })}
        </div>

        {/* <div>
          <Button variant="primary" onClick={handleShow}>
          Add data</Button>
        <p>{dataShow}</p>

        </div> */}

        {/* <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Control size="lg" type="text" placeholder="Todo" onChange={handleChangeModal}/>
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
      </Modal> */}
    </div>
  )
}

const mapStateToProps = (props) => {
  console.log(props);

  return{
    todos: props,
  }
  
}

const mapDispatchToProps = (dispatch) => {
  return{
    addTodos: (newTodos)=> {
      dispatch(addTodos(newTodos));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
