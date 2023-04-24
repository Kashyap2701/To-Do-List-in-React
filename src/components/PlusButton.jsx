import { GrAdd } from "react-icons/gr";
import style from './PlusButton.module.css';

// stateless Component
function PlusButton() {
  return (
    <div className={style['add-icon']}>
       <GrAdd  />
    </div>
  )
}

export default PlusButton; 