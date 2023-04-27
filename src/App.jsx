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
  const [error,setError] = useState(false);

  // whenever todos change store it to local storage
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
    console.log(todos);
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

      if(task.trim()==''){
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2000);
        return;
      }

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
    console.log('fdskfbd');
    const index = todos.findIndex(item=>item.id==todo.id);
    todos[index].status = (todos[index].status=='pending' ? 'completed' : 'pending');
    setTodos([...todos]);
  }

  const deleteHandler = (e,id)=>{
    e.stopPropagation();
    console.log('delete');
    const newTodos = todos.filter(todo=>todo.id!=id);
    console.log(newTodos);
    setTodos([...newTodos]);
  }

  return (
    <>
      <div className='App'>
        <div className='container'>
            <DisplayDate/>
            <TodoList todos={todos} updateTodoStatus={updateTodoStatus} deleteHandler={deleteHandler}/>
            { isPlusButton 
              ? <PlusButton handler={PlusButtonHandler}/>
              : (
                <>
                <div className='input-field'>
                {error && <p className='error'>enter valid input</p> }
                  <input 
                      type="text" 
                      placeholder="Add your Task" 
                      value={task} 
                      onChange={(e)=>setTask(e.target.value)} 
                      onKeyDown={inputHandler} 
                      autoFocus
                      required
                  />
                </div>
                </>
              )
            }
        </div>
      </div>
    </>
  )
}

export default App
