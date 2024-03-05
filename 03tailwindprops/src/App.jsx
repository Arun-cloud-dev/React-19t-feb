import { useState } from 'react'

import './App.css'
import Card from './component/Card'

let myObj = { 
  name : "Arun",
  age: 25,
  address :{
    city:'Channai',
    state:'TN',
    country:'India'
  }
}

let newArr = [1, 2,3 ,4,5,6,7,8,9]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3'>vite + tailwind</h1>
      <Card username="Arun" myArr={newArr} />
      <Card username='Joe' post= 'Staff Engneer'/>
      <Card />

    </>

  )
}

export default App
