import React from "react";

const TodoList=({itemDelete,id,title})=>{
    

    return(
        <>
        <ul>
         <li>{title} <button onClick={()=>itemDelete(id)}>Delete</button></li>   
        </ul>

        </>
    )
}
export {TodoList};