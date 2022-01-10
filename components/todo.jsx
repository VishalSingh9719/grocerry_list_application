import {useState} from "react";
import {Todoinput} from "./todoinput.jsx";
import {TodoList} from "./todolist.jsx";
import { v4 as uuidv4 } from 'uuid';
const Todo=()=>{
    
const [data,setData]=useState([]);

const handleAdd=(title)=>{
        const payload={
         title,
         status:false,
         id:uuidv4()
        }
      setData([...data,payload])
    }
const itemDelete=(id)=>{
    console.log(id)
    let updatedTodos = [...data].filter((todo) => todo.id !== id);
    setData(updatedTodos);
 
}

    return(

        <div>
          <h1>Grocerry List Management Application</h1>
          <Todoinput onClick={handleAdd} />  
          <h2>Grocerry List</h2>
          {data.map((name)=>(       
              <TodoList itemDelete={itemDelete} key={name.id} {...name}/>
           ) )} 
        </div>
    )
}
export {Todo};