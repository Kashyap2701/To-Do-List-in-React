import style from './TodoList.module.css';
import checked from '../assets/checked.png'

function CheckedTodo() {
  return (
    <div className={style.todo}>
        <p>Read an Artical</p>
        <div>
            <img width={25} src={checked} alt="" />
        </div>
    </div>
  )
}

export default CheckedTodo;