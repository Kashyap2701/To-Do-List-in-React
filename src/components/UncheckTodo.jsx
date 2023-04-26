import style from './TodoList.module.css';
import unchecked from '../assets/unchecked.png';

function UncheckTodo({todos,updateHandler}) {
  return (
    todos.filter(todo=>todo.status=='pending').map((todo)=>{
      return(
        <div key={todo.id} className={style.todo} onClick={()=>updateHandler(todo)} >
          <p title={todo.length>20 ? todo.task : ''}>{todo.task}</p>
          <div>
            <img width={25} src={unchecked} alt=""/>
          </div>
        </div>
      )
    })
  )
}

export default UncheckTodo;