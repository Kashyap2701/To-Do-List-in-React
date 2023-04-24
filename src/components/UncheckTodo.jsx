import style from './TodoList.module.css';
import unchecked from '../assets/unchecked.png';

function UncheckTodo() {
  return (
    <div className={style.todo}>
        <p>Read an Artical</p>
        <div>
            <img width={25} src={unchecked} alt="" />
        </div>
    </div>
  )
}

export default UncheckTodo