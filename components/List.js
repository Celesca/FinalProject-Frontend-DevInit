import { BiEdit , BiTrash} from "react-icons/bi"
import styles from "@/styles/List.module.css"

const List=({id,title,removeItem,editItem})=> {
    return (
        <div className={`${styles.list_item}`}>
            <h3 className="fw-normal">{title}</h3>
            <div className="button-container">
                <BiEdit className={`${styles.button_edit}`}size={30} onClick={()=>editItem(id)}/>
                <BiTrash size={30} className={`${styles.button_trash}`} onClick={()=>removeItem(id)}/>
            </div>
        </div>
        
    )
}

export default List;