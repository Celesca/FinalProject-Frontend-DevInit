import { BiEdit , BiTrash} from "react-icons/bi"
import styles from "@/styles/List.module.css"

const List=({id,title,removeItem,editItem})=> {
    return (
        <div className={`${styles.list_item}`}>
            <p className="title">{title}</p>
            <div className="button-container">
            <BiEdit onClick={()=>editItem(id)}/>
            <BiTrash onClick={()=>removeItem(id)}/>
            </div>
        </div>
        
    )
}

export default List;