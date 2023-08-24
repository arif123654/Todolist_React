import { useState } from 'react';
import './App.css';
import { Task } from './component/task';

function App() {

  const [todoList, setTodolist] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }; 

  const addTask = () => {

    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id + 1 ,
      taskName: newTask,
      completed: false
    }

    //spread operator
    setTodolist([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodolist(todoList.filter((task) => {
      return task.id !== id
    }))
  }

  const updateTask = (id) => {
    setTodolist(todoList.map((task) => {
      if (task.id === id){
        return {...Task, completed: true}
        
      } else {
          return task
      }
    }))
  }

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTask}> Add Task </button>
      </div>
      <div className="list">
        {todoList.map((task)=> {
          return <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} upDateTask={updateTask} completed = {task.completed}/>
        })
      }
      </div>
    </div>
  );
}

export default App;
