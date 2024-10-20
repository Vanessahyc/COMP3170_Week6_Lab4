import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

const initialTaskList = [
  { 
    id: 1, 
    task: 'Buy groceries', 
    completed: false 
  },
  { 
    id: 2, 
    task: 'Walk the dog', 
    completed: false 
  },
  { id: 3, 
    task: 'Read a book', 
    completed: false 
  }
]

function App() {
  const [preTaskList, setPreTaskList] = useState(initialTaskList);

  const [newTask, setNewTask] = useState({
    taskName: ''
  });

  const taskList = 

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
