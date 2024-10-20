import { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import { initialTasksList } from './data/initialTasksList';

function App() {
  const [preTaskList, setPreTaskList] = useState(initialTasksList);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      const newTaskDefault = {
        id: preTaskList.length ? preTaskList[preTaskList.length - 1].id + 1 : 1,
        task: newTask,
        completed: false
      };
      setPreTaskList([...preTaskList, newTaskDefault]); // Correct reference here
      setNewTask(''); // Reset input field after save
    }
  };

  const handleRemove = (taskId) => {
    setPreTaskList((prevTasksStatus) => prevTasksStatus.filter((task) => task.id !== taskId));
  };

  const handleToggleCheckbox = (taskId) => {
    setPreTaskList((prevTasksStatus) =>
      prevTasksStatus.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task))
    );
  };

  return (
    <>
      <header>
        <h1>Daily Planner</h1>
      </header>
      <form onSubmit={handleSave}>
        <input
          type="text"
          className="input_box"
          placeholder="New task..."
          value={newTask} // Bind input value
          onChange={handleInputChange}
        />
        <button type="submit" className="save_btn">Save</button>
      </form>
      <TaskList preTaskList={preTaskList} onRemove={handleRemove} onToggle={handleToggleCheckbox} />
    </>
  );
}

export default App;
