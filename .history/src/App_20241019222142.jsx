import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Daily Planner</h1>
      </header>
      <form>
        <input type='text' className='input_box' placeholder='New task...'/>
        <button type='submit' className='save_btn'>Save</button>
      </form>
    </>
  )
}

export default App
