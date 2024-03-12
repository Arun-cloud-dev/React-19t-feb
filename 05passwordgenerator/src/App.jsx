import { useState } from 'react'

import './App.css'

function App() {
    const [length, setLength ] = useState(8)
    const [numberAllowed, setNumberAllowed] = useState(false)
    const [charlAllowed, setcharAllowed] = useState(false)
    const [password, setPassword] = useState('')


  return (
    <>
      <div className='w-full max-w-md max auto shaddow-md rounded-lg px-4 py-3 bg-gray-800 text-orange-500'>
        <h1 className='text-3xl font-bold mb-2 text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mbv-4'>
            <input 
            type='text'
            value={password}
            className='outline-none w-full py-1 p-3'
            placeholder='Password'
            readOnly
            
            />
            <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
            
        </div>
      </div>
    </>
  )
}

export default App
