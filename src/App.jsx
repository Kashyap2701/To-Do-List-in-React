import { useEffect, useState } from 'react'
import './App.css'
import DisplayDate from './components/DisplayDate'
import PlusButton from './components/PlusButton'
import TodoList from './components/TodoList'
import {v4} from 'uuid'

function App() {

  const [isPlusButton,setPlusButton] = useState(true);
  const [task,setTask] = useState('');
  const [todos,setTodos] = useState(JSON.parse(localStorage.getItem('todos'))|| []);
  // const [currentDate,setCurre]

  // whenever todos change store it to local storage
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos]);
  
  useEffect(()=>{
    const currentDate = new Date().toLocaleDateString();
    const lastClearedDate = localStorage.getItem('lastClearedDate');
    if (lastClearedDate !== currentDate) {
      localStorage.clear();
      localStorage.setItem('lastClearedDate', currentDate);
      setTodos([]);
    }
  },[])

  const PlusButtonHandler = ()=>{
    setPlusButton(false);
  }

  // this function handle add task to todolist 
  const inputHandler = (e)=>{

    // when key pressed will be ENTER KEY
    if(e.key=='Enter'){

      if(task.trim()=='')
        return;

      const todo = {
        id:v4(),
        task:task.trim(),
        status:'pending'
      }
      setTodos([...todos,todo]);
      setTask('');
    }
    // when key pressed will be ESCAPE KEY
    else if(e.key=='Escape'){
      setPlusButton(true);
    }
  }

  // this function update the todo status
  const updateTodoStatus = (todo) => {
    const index = todos.findIndex(item=>item.id==todo.id);
    todos[index].status = (todos[index].status=='pending' ? 'completed' : 'pending');
    setTodos([...todos]);
  }

  return (
    <>
      <div className='App'>
        <div className='container'>
            <DisplayDate/>
            <TodoList todos={todos} updateHandler={updateTodoStatus}/>
            { isPlusButton 
              ? <PlusButton handler={PlusButtonHandler}/>
              : <input 
                    type="text" 
                    placeholder="Add your Task" 
                    value={task} 
                    onChange={(e)=>setTask(e.target.value)} 
                    onKeyDown={inputHandler} 
                    autoFocus
                    required
                />
            }
        </div>
      </div>
    </>
  )
}

export default App
