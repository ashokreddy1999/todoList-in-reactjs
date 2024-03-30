import React,{useState} from 'react'
import TodoList from './TodoList'

const App = () => {
  const[task,setTask]=useState("")
  const [todos,setTodos]=useState([])
  const handler=e=>{
    setTask(e.target.value)
  }
  const submitHandler=e=>{
    e.preventDefault();
    const newTodos=[...todos,task];
    setTodos(newTodos);
    setTask("");
   
  }
  const deleteHandler =(indexvalue)=>{
    const newTodos=todos.filter((todo,index)=> index !== indexvalue);
    setTodos(newTodos);
  }
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Todo Management Application</h5>
            <form onSubmit={submitHandler}>
              <input type="text" name="task" value={task} onChange={handler} /> &nbsp;&nbsp;
              <input type="submit" value="Add" name="Add"/>
            </form>
            <TodoList todolist={todos} deleteHandler={deleteHandler}/>
          </div>
        </div>
      </center>
     
    </div>
  )
}

export default App
