import { useState } from "react";
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
  
export default function TaskList({taskRemain, onDelete, onToggle}) {

    const taskList = taskRemain.map((tasksItem) => (
        <div key={index} className="task">
            <input type="checkbox" checked={tasksItem.completed}/>
            <p>{tasksItem.task}</p>
            <button>Remove</button>
        </div>
    ));
  

    return(
        <>
          <h2>You have 2 tasks remaining</h2>
          <ul>
            {taskList}
          </ul>
        </>
    );
}