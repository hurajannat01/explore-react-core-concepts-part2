import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends'

function App() {

function handleClick(){
  alert('button Clicked');
}

const handleClick2 = () =>{
  alert('button 2 clicked')
}

let num = 10;
const addToFive = () => {
  alert(num + 5);
}

  return (
    <>
      <h1>Vite + React</h1>
      <h3>React Core Concepts </h3>
      <Users></Users>
       <Friends></Friends>

       <Counter></Counter>
       <Team></Team>
     


      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => {alert('click3')}}>Click3</button>
     {/* conflict */}
      <button onClick={() => addToFive(4)}>Click4</button>
    </>
  )
}

export default App
