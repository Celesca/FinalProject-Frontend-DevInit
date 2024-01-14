import Swal from "sweetalert2";
import styles from "@/styles/Todo.module.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "@/components/List";
import { Button, Modal, Form } from "react-bootstrap";

export default function Todo() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [checkEditItem, setCheckEditItem] = useState(false);
  const [editId, setEditId] = useState(null);
  const [showInsertModal, setShowInsertModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const openInsertModal = () => {
    setShowInsertModal(true);
    setShowEditModal(false);
    setEditId(null);
    setName("");
  };

  const closeInsertModal = () => {
    setShowInsertModal(false);
    setName("");
  };

  const openEditModal = (id) => {
    setShowEditModal(true);
    setShowInsertModal(false);
    setEditId(id);
    const searchItem = list.find((item) => item.id === id);
    setName(searchItem.title);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
    setEditId(null);
    setName("");
  };

  const submitData = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      showAlert(
        "error",
        "กรุณากรอกข้อมูลให้ครบ",
        "ไม่สามารถกรอกเพียงอักษรว่างได้"
      );
    } else if (editId && name) {
      const updatedList = list.map((item) => {
        if (item.id === editId) {
          return { ...item, title: name };
        }
        return item;
      });
      setList(updatedList);
      localStorage.setItem("todo-data", JSON.stringify(updatedList));
      setName("");
      showAlert(
        "success",
        "แก้ไขข้อมูลเสร็จสิ้น",
        "แก้ไขข้อมูลรายการในระบบเรียบร้อย"
      );
      setCheckEditItem(false);
      setEditId(null);
      closeEditModal(); // Close the edit modal after editing
    } else {
      const newItem = {
        id: uuidv4(),
        title: name,
      };
      setList([...list, newItem]);
      localStorage.setItem("todo-data", JSON.stringify([...list, newItem]));
      setName("");
      showAlert(
        "success",
        "บันทึกข้อมูลเสร็จสิ้น",
        "ทำการบันทึกข้อมูลเข้าสู่ระบบเรียบร้อย"
      );
      closeInsertModal(); // Close the insert modal after adding
    }
  };

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

  const showAlert = (eventIcon, eventTitle, eventText) => {
    Swal.fire({
      title: eventTitle,
      icon: eventIcon,
      text: eventText,
      confirmButtonText: "ตกลง",
    });
  };

  const searchItem = () => {
    const trimmedSearchText = searchText.trim();
    if (!trimmedSearchText) {
      const loadData = localStorage.getItem("todo-data");
      setList(JSON.parse(loadData) || []);
    } else {
      const filteredList = list.filter((item) =>
        item.title.toLowerCase().includes(trimmedSearchText.toLowerCase())
      );
      setList(filteredList);
    }
  };

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
            <div className="col-6 mb-3 mt-2 text-center">
              <Button
                className={`${styles.add_button} btn btn-lg btn-primary`}
                onClick={openInsertModal}
              >
                เพิ่มข้อมูล
              </Button>
            </div>

            <div className="col-12 col-md-10 col-lg-8">
              <form
                className={`card card-sm form-group ${styles.search_form}`}
                onSubmit={(e) => {
                  e.preventDefault();
                  searchItem();
                }}
              >
                <div className="card-body row align-items-center">
                  <div className="col">
                    <input
                      className={`form-control form-control-lg ${styles.text_input}`}
                      type="text"
                      placeholder="ค้นหา..."
                      onChange={(e) => setSearchText(e.target.value)}
                      value={searchText}
                    />
                  </div>

                  <div className="col-auto">
                    <button
                      className={`btn btn-lg btn-primary ${styles.submit_btn}`}
                      type="submit"
                    >
                      ค้นหา
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <section className="container d-flex flex-column justify-content-center list-container">
          {filteredData.length > 0
            ? filteredData.map((data, index) => (
                <List
                  key={index}
                  {...data}
                  removeItem={removeItem}
                  openEditModal={openEditModal}
                />
              ))
            : list.map((data, index) => (
                <List
                  key={index}
                  {...data}
                  removeItem={removeItem}
                  openEditModal={openEditModal}
                />
              ))}
        </section>

        {/* Insert Modal */}
        <Modal show={showInsertModal} onHide={closeInsertModal}>
          <Modal.Header closeButton>
            <Modal.Title>เพิ่มข้อมูล</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>ชื่อรายการ</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="กรอกชื่อรายการ"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeInsertModal}>
              ยกเลิก
            </Button>
            <Button variant="primary" onClick={submitData}>
              เพิ่มข้อมูล
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Edit Modal */}
        <Modal show={showEditModal} onHide={closeEditModal}>
          <Modal.Header closeButton>
            <Modal.Title>แก้ไขข้อมูล</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>ชื่อรายการ</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="กรอกชื่อรายการ"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeEditModal}>
              ยกเลิก
            </Button>
            <Button variant="primary" onClick={submitData}>
              บันทึกการแก้ไข
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    </>
  );
}
