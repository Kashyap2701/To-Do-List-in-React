import './App.css'
import DisplayDate from './components/DisplayDate'
import PlusButton from './components/PlusButton'
import TodoList from './components/TodoList'

function App() {

  return (
    <>
      <div className='App'>
        <div className='container'>
            <DisplayDate/>
            <TodoList/>
            <PlusButton/>
        </div>
      </div>
    </>
  )
}

export default App
