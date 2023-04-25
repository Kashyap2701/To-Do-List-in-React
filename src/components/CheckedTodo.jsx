import style from './TodoList.module.css';
import checked from '../assets/checked.png'

function CheckedTodo({todos,updateHandler}) {
  return (
    todos.filter(todo=>todo.status=='completed').map((todo)=>{
      return(
        <div key={todo.id} className={style.todo}>
          <p>{todo.task}</p>
          <div>
            <img width={25} src={checked} alt="" onClick={()=>updateHandler(todo)}/>
          </div>
        </div>
      )
    })
  )
}

export default CheckedTodo;