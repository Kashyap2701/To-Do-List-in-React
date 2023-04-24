import CheckedTodo from "./CheckedTodo";
import UncheckTodo from "./UncheckTodo";
import style from './TodoList.module.css';

function TodoList() {
  return (
    <div className={style['todo-list']}>
        <CheckedTodo/>
        <CheckedTodo/>
        <CheckedTodo/>
        <CheckedTodo/>
        <CheckedTodo/>
        <UncheckTodo/>
        <UncheckTodo/>
        <UncheckTodo/>
        <UncheckTodo/>
        <UncheckTodo/>
        <UncheckTodo/>
    </div>
  )
}

export default TodoList;