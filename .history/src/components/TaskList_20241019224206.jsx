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
  
export default function TaskList() {

    const [preTaskList, setPreTaskList] = useState(initialTaskList);

    const [newTask, setNewTask] = useState({
      task: ''
    });

    const taskList = preTaskList.map((newTask) => (
        <div key={index} className="task">
            <input type="checkbox"/>
            <p>{newTask.task}</p>
            <button>Remove</button>
        </div>
    ));
  

    return(
        <>
        
        </>
    );
}