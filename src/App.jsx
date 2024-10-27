import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import TaskList from './components/TaskList';
import { initialTasksList } from './data/initialTasksList'; 


function App() {
  const [preTaskList, setPreTaskList] = useState(initialTasksList);

  const [newTask, setNewTask] = useState('');

  const [filter, setFilter] = useState('all');

  const handleInputChange = (e) => {setNewTask(e.target.value);};

  const handleSave = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      const newTaskDefault = {id: preTaskList.length ? preTaskList[preTaskList.length - 1].id + 1 : 1, task: newTask, completed: false};
      setPreTaskList([...preTaskList, newTaskDefault]);
      setNewTask('');
    }
  };

  const handleRemove = (taskId) => {
    setPreTaskList(prevTasksStatus => prevTasksStatus.filter(task => task.id !== taskId));
  };

  const handleToggleCheckbox = (taskId) => {
    setPreTaskList(prevTasksStatus => prevTasksStatus.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task ));
  };

  const filteredTasks = preTaskList.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  })

  return (
    <>
      <header>
        <h1>Daily Planner</h1>
      </header>
      <form onSubmit={handleSave}>
        <input type='text' className='input_box' placeholder='New task...' value={newTask} onChange={handleInputChange}/>
        <button type='submit'className='save_btn'>Save</button>
      </form>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
      </div>
      <TaskList taskRemain={filteredTasks} onRemove={handleRemove} onToggle={handleToggleCheckbox} />
    </>
  )
}

export default App
