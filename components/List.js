import { IoMdClose } from "react-icons/io";
import { IoPencil } from "react-icons/io5";
import styles from "@/styles/List.module.css";
import { Button } from "react-bootstrap";

const List = ({ id, title, removeItem, editItem }) => {
  return (
    <div className={`${styles.list_item}`}>
      <h3 className="fw-normal">{title}</h3>
      <div className="button-container">
        <Button variant="success" onClick={() => editItem(id)} className="me-2">
          <IoPencil className={`${styles.button_edit}`} />
        </Button>

        <Button variant="danger" onClick={() => removeItem(id)}>
          <IoMdClose className={`${styles.button_trash}`} />
        </Button>
      </div>
    </div>
  );
};

export default List;
