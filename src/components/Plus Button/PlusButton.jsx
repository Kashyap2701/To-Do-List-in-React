import { GrAdd } from "react-icons/gr";
import style from './PlusButton.module.css';


function PlusButton({handler}) {
  return (
    <div className={style['add-icon']}  onClick={handler} >
       <GrAdd />
    </div>
  )
}

export default PlusButton; 