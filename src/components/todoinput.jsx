import {useState} from 'react';


const Todoinput=({onClick})=>{
const [title,setTitle]=useState("");

return(

<div>
    <input 
    value={title}
    onChange={(e)=>setTitle(e.target.value)}
    placeholder='add grocerry item'
    />
    <button onClick={()=>onClick(title)}>Add</button>
</div>

)
}
export {Todoinput};