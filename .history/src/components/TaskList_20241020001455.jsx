export default function TaskList({ taskRemain, onRemove, onToggle }) {
  
  const tasksNum = taskRemain.filter(task => !task.completed).length;

  
  const taskList = taskRemain.map((tasksItem) => (
    <div key={tasksItem.id} className="task">
      <div className="task_title">
        <input type="checkbox" checked={tasksItem.completed} onChange={() => onToggle(tasksItem.id)} />
        <h3 >{tasksItem.task}</h3>
      </div>
      <button onClick={() => onRemove(tasksItem.id)}>Remove</button>
    </div>
  ));

  return (
    <>
      <h2>You have {tasksNum} tasks remaining</h2>
      <div className="tasklist_container">
        {taskList}
      </div>
    </>
  );
}