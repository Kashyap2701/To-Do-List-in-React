import React from 'react';
import style from './TodoList.module.css';
import checked from '../../assets/checked.png'
import unchecked from '../../assets/unchecked.png';
import cancel from "../../assets/cancel.png";

function Todo({todos,updateTodoStatus,deleteHandler}) {
  return (
    todos.map(todo=>{
        return(
            <div key={todo.id} className={style.todo} onClick={()=>updateTodoStatus(todo)}>
                <p className={todo.status=='completed' ? style.completed : null} title={todo.length>10 ? todo.task : ''}>{todo.task}</p>
                <div>
                    <img width={25} src={todo.status=='pending' ? unchecked : checked} alt="status-img"/>
                </div>
                <img onClick={(e)=>deleteHandler(e,todo.id)} className={style['btn-delete']} width={15} src={cancel} alt="status-img"/>
            </div>  
        )
    })
  )
}

export default Todo