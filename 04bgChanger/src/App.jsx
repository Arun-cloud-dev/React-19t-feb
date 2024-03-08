import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap gap-5 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor('red')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black'
          style={{backgroundColor:'red'}} >
            Red
          </button>
          <button onClick={() => setColor('green')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor:'green'}}>
            Green
          </button >
          <button onClick={() => setColor('yellow')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor:'yellow'}}>
            Green
          </button >
          <button onClick={() => setColor('purple')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor:'purple'}}>
            Green
          </button >
        </div>
      </div>
    </div>
  )
}

export default App
