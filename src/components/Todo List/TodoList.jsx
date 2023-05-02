import TodoBackground from '../../assets/to-do-list-background.jpg'
import style from './TodoList.module.css';
import Todo from "./Todo";

function TodoList({todos,updateTodoStatus,deleteHandler}) {

  return (
    <div className={style['todo-list']}>
        { todos?.length==0
            ? <img className={style['todo-list-backgrond']} src={TodoBackground} alt="" />
            : (
              <Todo todos={todos} updateTodoStatus={updateTodoStatus} deleteHandler={deleteHandler}/>
            )
        }
    </div>
  )
  
}

export default TodoList;