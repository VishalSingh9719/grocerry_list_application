import { useState } from "react";

 const Addition=({num})=>{
     let n=JSON.parse(num)
    const [count,setCount]=useState(n);

    const addOne=(value)=>{
        setCount(count+value);
   }
   const double=(value)=>{
    setCount(count*value);
}
    return(
        <>
        <div>
          <h2>counter:{count}</h2>
          <button onClick={()=>addOne(1)}>Increment</button>
          <button onClick={()=>addOne(-1)}>decrement</button>
          <button onClick={()=>double(2)}>double</button>
    </div>
        </>
    )
}
export {Addition};