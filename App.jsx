
import { useState, useEffect, useRef } from 'react'
import './App.css'

//entry point of react app it is library not a framework
//library is used to focus one particular task
function App() {
 
  const [Count, setCount] = useState(0)


  function Increasehandler() {
      return setCount(Count + 1)
  }

  function Decreasehandler(){
     return setCount(Count - 1)
  }

  function resethandler(){
    return setCount(0)
  }
  return (
    <>
      <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10'>
        <div className='text-[#0398d4] font-medium  text-2xl '>Increment And Decrement</div>
        <div className='bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]'>
          <button onClick={Increasehandler} className='border-r-2 text-center w-20 border-[#bfbfbf] text-5xl'>+</button>
          <div className='font-bold gap-12'>{Count}</div>
          <button onClick={Decreasehandler} className='border-l-2 text-center w-20 border-[#bfbfbf] text-5xl'>-</button>
        </div>
        <button onClick={resethandler} className='bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg'>Reset</button>
      </div>
    </>
  )
}

export default App
