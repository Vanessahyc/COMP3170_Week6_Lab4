import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import TaskList from './components/TaskList'


function App() {
  const [preTaskList, setPreTaskList] = useState(initialTaskList);

  const [newTask, setNewTask] = useState({
    task: ''
  });

  const handleRemove = (taskId) => {
    setTasksData(prevTasksStatus => prevTasksStatus.filter(task => task.id !== taskId));
  };

  const handleToggleCheckbox = (taskId) => {
    setTasksData(prevTasksStatus => prevTasksStatus.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task ));
  };

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
