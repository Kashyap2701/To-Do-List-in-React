import CheckedTodo from "./CheckedTodo";
import UncheckTodo from "./UncheckTodo";
import TodoBackground from '../assets/to-do-list-background.jpg'
import style from './TodoList.module.css';

function TodoList({todos,updateHandler}) {

  return (
    <div className={style['todo-list']}>
        { todos?.length==0
            ? <img className={style['todo-list-backgrond']} src={TodoBackground} alt="" />
            : (
              <>
              <CheckedTodo todos={todos} updateHandler={updateHandler}/>
              <UncheckTodo todos={todos} updateHandler={updateHandler}/>
              </>
            )
        }
    </div>
  )
}

export default TodoList;