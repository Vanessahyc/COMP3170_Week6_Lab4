export default function TaskList({taskRemain, onRemove, onToggle}) {
    const tasksNum = taskRemain.filter(task => !task.completed).length;
    const taskList = taskRemain.map((tasksItem) => (
        <li key={tasksItem.id} className="task">
            <input type="checkbox" checked={tasksItem.completed} onChange={() => onToggle(tasksItem.id)}/>
            <p className={`task-topic ${tasksItem.completed ? 'checked' : ''}`}>{tasksItem.task}</p>
            <button onClick={() => onRemove(tasksItem.id)}>Remove</button>
        </li>
    ));
  

    return(
        <>
          <h2>You have {tasksNum} tasks remaining</h2>
          <ul>
            {taskList}
          </ul>
        </>
    );
}