import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import TaskList from './components/TaskList'

const initialTaskList = [
  { 
    id: 1, 
    task: 'Task 1', 
    completed: false 
  },
  { 
    id: 2, 
    task: 'Task 2', 
    completed: false 
  },
  { id: 3, 
    task: 'Task 3', 
    completed: false 
  }
]

function App() {
  const [preTaskList, setPreTaskList] = useState(initialTaskList);

  const [newTask, setNewTask] = useState({
    task: ''
  });
  return (
    <>
      <header>
        <h1>Daily Planner</h1>
      </header>
      <form>
        <input type='text' className='input_box' placeholder='New task...'/>
        <button type='submit' className='save_btn'>Save</button>
      </form>
      <TaskList tasksData={tasksData} onRemove={handleRemove} onToggle={handleToggleCheckbox} />
    </>
  )
}

export default App
