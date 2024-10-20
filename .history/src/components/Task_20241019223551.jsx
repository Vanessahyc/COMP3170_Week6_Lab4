const initialTaskList = [
    { 
      id: 1, 
      task: 'Buy groceries', 
      completed: false 
    },
    { 
      id: 2, 
      task: 'Walk the dog', 
      completed: false 
    },
    { id: 3, 
      task: 'Read a book', 
      completed: false 
    }
  ]
  
export default function Task() {

    const [preTaskList, setPreTaskList] = useState(initialTaskList);

    const [newTask, setNewTask] = useState({
      taskName: ''
    });

    const taskList = preTaskList.map((newTask) => (
        <div className="task">
            <input type="checkbox"/>
            <p>{}</p>
            <button>Remove</button>
        </div>
    ));
  

    return(
        <>
        </>
    );
}