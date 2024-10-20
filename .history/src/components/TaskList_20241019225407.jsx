import { useState } from "react";

export default function TaskList({taskRemain, onRemove, onToggle}) {
    const tasksNum = tasksData.filter(task => !task.completed).length;
    const taskList = taskRemain.map((tasksItem) => (
        <div key={index} className="task">
            <input type="checkbox" checked={tasksItem.completed} onChange={() => onToggle(tasksItem.id)}/>
            <p className={`task-topic ${tasksItem.completed ? 'checked' : ''}`}>{tasksItem.task}</p>
            <button onClick={() => onRemove(tasksItem.id)}>Remove</button>
        </div>
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