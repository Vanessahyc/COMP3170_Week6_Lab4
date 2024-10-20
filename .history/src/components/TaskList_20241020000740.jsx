// export default function TaskList({taskRemain, onRemove, onToggle}) {
//     const tasksNum = taskRemain.filter(task => !task.completed).length;
//     const taskList = taskRemain.map((tasksItem) => (
//         <li key={tasksItem.id} className="task">
//             <input type="checkbox" checked={tasksItem.completed} onChange={() => onToggle(tasksItem.id)}/>
//             <p className={`task-topic ${tasksItem.completed ? 'checked' : ''}`}>{tasksItem.task}</p>
//             <button onClick={() => onRemove(tasksItem.id)}>Remove</button>
//         </li>
//     ));
  

//     return(
//         <>
//           <h2>You have {tasksNum} tasks remaining</h2>
//           <ul>
//             {taskList}
//           </ul>
//         </>
//     );
// }

export default function TaskList({ taskRemain, onRemove, onToggle }) {
  // Calculate remaining tasks that are not completed
  const tasksNum = taskRemain.filter(task => !task.completed).length;

  // Create the list of tasks to display
  const taskList = taskRemain.map((tasksItem) => (
    <div key={tasksItem.id} className="task">
      <input type="checkbox" checked={tasksItem.completed} onChange={() => onToggle(tasksItem.id)} />
      <h3 className={`task-topic ${tasksItem.completed ? 'checked' : ''}`}>{tasksItem.task}</h3>
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