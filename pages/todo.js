import Swal from 'sweetalert2';
import styles from '@/styles/Todo.module.css'
import { useState } from 'react';
import { v4 as uuidv4} from 'uuid';
import List from '@/components/List';
 
export default function Todo() {

    const [name,setName] = useState("")
    const [list,setList] = useState([])
  
    const [checkEditItem , setCheckEditItem] = useState(false)
    const [editId , setEditId] = useState(null)

    const submitData=(e)=> {
        e.preventDefault()
        if(!(name.trim()) ) {
          // แสดง Alert
          showAlert("error", "กรุณากรอกข้อมูลให้ครบ", "ไม่สามารถกรอกเพียงอักษรว่างได้")
        } 
        else if (checkEditItem && name) {
          // กระบวนการอัพเดทข้อมูล รายการที่ต้องการแก้ไข
          const result = list.map((item)=> {
            if (item.id === editId) {
              // ไอเทมก้อนใหม่ที่มีการอัพเดท
              return {...item,title:name} // เปลี่ยนแค่ชื่อ
            }
            return item
          })
          setList(result)
          setName('')
          showAlert("success" , "แก้ไขข้อมูลเสร็จสิ้น" , "แก้ไขข้อมูลรายการในระบบเรียบร้อย")
          setCheckEditItem(false)
          setEditId(null)
        }
    
    
        else {
          const newItem = {
            id:uuidv4(), 
            title: name
          }
          setList([...list,newItem]) // เพิ่มข้อมูลเข้าไปใน list
          setName('') // clear ข้อมูล
          showAlert("success" , "บันทึกข้อมูลเสร็จสิ้น" , "ทำการบันทึกข้อมูลเข้าสู่ระบบเรียบร้อย")
        }
    
      }

    // Function Remove

    const removeItem = (id) => {
        const result = list.filter((item)=> item.id !== id)
        setList(result)
        showAlert("error", "ลบข้อมูลเสร็จสิ้น","ทำการลบข้อมูลรายการเรียบร้อย")
    }

    const editItem = (id) => {
        setCheckEditItem(true);
        setEditId(id) // ทำให้จำไว้ว่า ไอดีไหนที่เราจะแก้
        const searchItem = list.find((item)=>item.id === id)
        setName(searchItem.title)
    }

    const showAlert =(eventIcon,eventTitle,eventText) => {
        Swal.fire({
        title: eventTitle,
        icon: eventIcon,
        text: eventText,
        confirmButtonText: "ตกลง"
    })
}
    return (
        <>
            <section className={`container-fluid ${styles.todo_container}`}>
                <h1>To-do List</h1>
                <form className="form-group" onSubmit={submitData}>
                    <div className="form-control">
                      <input type="text" className={`${styles.text_input}`}
                      onChange={(e)=>setName(e.target.value)}
                      value={name}
                      />
                      <button type="submit" className={`${styles.submit_btn}`}>
                          {checkEditItem ? "แก้ไขข้อมูล" : "เพิ่มข้อมูล"}
                      </button>
                    </div>
                </form>

                <section className="list-container">
                    {list.map((data,index)=>{
                    return <List key={index} {...data} removeItem={removeItem} editItem={editItem}/>})}
                </section>

            </section>
        </>
    )
}