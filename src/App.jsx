import { useEffect, useState } from 'react'
import './App.css'
import DisplayDate from './components/DisplayDate'
import PlusButton from './components/PlusButton'
import TodoList from './components/TodoList'

function App() {

  const [isPlusButton,setPlusButton] = useState(true);
  const [task,setTask] = useState('');
  

  const PlusButtonHandler = ()=>{
    setPlusButton(false);
  }

  const inputHandler = (e)=>{
    if(e.key=='Enter'){
      console.log(task);
      setTask('');
    }
    else if(e.key=='Escape'){
      console.log(e.key);
      setPlusButton(true);
    }
  }

  return (
    <>
      <div className='App'>
        <div className='container'>
            <DisplayDate/>
            <TodoList/>
            { isPlusButton 
              ? <PlusButton handler={PlusButtonHandler}/>
              : <input type="text" placeholder="Add your Task" value={task} onChange={(e)=>setTask(e.target.value)} onKeyDown={inputHandler} autoFocus/>
            }
        </div>
      </div>
    </>
  )
}

export default App
