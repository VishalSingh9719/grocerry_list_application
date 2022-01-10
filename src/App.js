import React from 'react'
import ReactDom from 'react-dom'
import './App.css';
//import {useState, useEffect } from 'react';
//import {Addition} from "./components/counter";

import {Todo} from './components/todo.jsx';

function App() {
 // const [counter,setCounter]=useState(1);
  let n=1;
  return (
    <div className="App">
    <Todo />
    </div>
  );
}


export default App;
