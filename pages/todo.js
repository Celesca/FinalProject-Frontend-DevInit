import Swal from "sweetalert2";
import styles from "@/styles/Todo.module.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "@/components/List";

export default function Todo() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  const [checkEditItem, setCheckEditItem] = useState(false);
  const [editId, setEditId] = useState(null);

  const submitData = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      // แสดง Alert
      showAlert(
        "error",
        "กรุณากรอกข้อมูลให้ครบ",
        "ไม่สามารถกรอกเพียงอักษรว่างได้"
      );
    } else if (checkEditItem && name) {
      // กระบวนการอัพเดทข้อมูล รายการที่ต้องการแก้ไข
      const result = list.map((item) => {
        if (item.id === editId) {
          // ไอเทมก้อนใหม่ที่มีการอัพเดท
          return { ...item, title: name }; // เปลี่ยนแค่ชื่อ
        }
        return item;
      });
      setList(result);
      localStorage.setItem("todo-data", JSON.stringify(result));
      setName("");
      showAlert(
        "success",
        "แก้ไขข้อมูลเสร็จสิ้น",
        "แก้ไขข้อมูลรายการในระบบเรียบร้อย"
      );
      setCheckEditItem(false);
      setEditId(null);
    } else {
      const newItem = {
        id: uuidv4(),
        title: name,
      };
      setList([...list, newItem]); // เพิ่มข้อมูลเข้าไปใน list
      localStorage.setItem("todo-data", JSON.stringify([...list, newItem]));
      setName(""); // clear ข้อมูล
      showAlert(
        "success",
        "บันทึกข้อมูลเสร็จสิ้น",
        "ทำการบันทึกข้อมูลเข้าสู่ระบบเรียบร้อย"
      );
    }
  };

  // Function Remove

  const removeItem = (id) => {
    if (checkEditItem) {
      showAlert(
        "error",
        "กรุณาแก้ไขข้อมูลให้เสร็จ",
        "ไม่สามารถทำการลบข้อมูลได้หากแก้ไขอยู่"
      );
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });

          // begin to remove
          const result = list.filter((item) => item.id !== id);
          setList(result);
          localStorage.setItem("todo-data", JSON.stringify(result));
          showAlert(
            "success",
            "ลบข้อมูลเสร็จสิ้น",
            "ทำการลบข้อมูลรายการเรียบร้อย"
          );
        }
      });
    }
  };

  const editItem = (id) => {
    setCheckEditItem(true);
    setEditId(id); // ทำให้จำไว้ว่า ไอดีไหนที่เราจะแก้
    const searchItem = list.find((item) => item.id === id);
    setName(searchItem.title);
  };

  const showAlert = (eventIcon, eventTitle, eventText) => {
    Swal.fire({
      title: eventTitle,
      icon: eventIcon,
      text: eventText,
      confirmButtonText: "ตกลง",
    });
  };

  // // Load the data
  useEffect(() => {
    const loadData = localStorage.getItem("todo-data");
    setList(JSON.parse(loadData) || []);
  }, []);

  return (
    <>
      <section className={`container-fluid ${styles.todo_container}`}>
        <h1 className="text-center display-2 mb-4">To-do List</h1>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <form
                className={`card card-sm form-group ${styles.search_form}`}
                onSubmit={submitData}
              >
                <div className="card-body row align-items-center">
                  <div className="col">
                    <input
                      className={`form-control form-control-lg ${styles.text_input}`}
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </div>

                  <div className="col-auto">
                    <button
                      className={`btn btn-lg ${checkEditItem ? "btn-success" : "btn-primary"} ${styles.submit_btn}`}
                      type="submit"
                    >
                      {checkEditItem ? "แก้ไขข้อมูล" : "เพิ่มข้อมูล"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <section className="container d-flex flex-column justify-content-center list-container">
          {list.map((data, index) => {
            return (
              <List
                key={index}
                {...data}
                removeItem={removeItem}
                editItem={editItem}
              />
            );
          })}
        </section>
      </section>
    </>
  );
}
