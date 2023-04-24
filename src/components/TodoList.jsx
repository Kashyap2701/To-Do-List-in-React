import CheckedTodo from "./CheckedTodo";
import UncheckTodo from "./UncheckTodo";
import TodoBackground from '../assets/to-do-list-background.jpg'
import style from './TodoList.module.css';

function TodoList() {
  return (
    <div className={style['todo-list']}>
        <img className={style['todo-backgrond']} src={TodoBackground} alt="" />
    </div>
  )
}

export default TodoList;