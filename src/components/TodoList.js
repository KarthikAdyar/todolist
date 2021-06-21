import { useState } from "react";
import List from "./List";
import '../css/todolist.css'

function TodoList() {

    const [ todoTask , setTodoTask ] = useState();
    const [ items , setItems ] = useState([]);

    const handleChange = (e) => {
        // console.log( "Input value " + e.target.value );
        setTodoTask( e.target.value );
    }

    const addItems = () => {
        setItems( [...items , { item : todoTask , key : Date.now() } ] );
       
        setTodoTask("");
    }
    return(
        <div className="App">
          <div className="display-4">Todo List</div>
          <div className="todolist">
                <input type="text" value={todoTask} onChange={ handleChange } placeholder="Enter value for list"/>
                <button className = "btn btn-primary" onClick = { addItems }>Add</button>
                
          </div>
          <div>
            <List items = { items } setItems = { setItems }/>
          </div>
        </div>
    )
}

export default TodoList;