import { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import JournalCard from '@/components/JournalCard';
import styles from '@/styles/Journal.module.css';
import Swal from 'sweetalert2';

const DailyJournalPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [journalEntries, setJournalEntries] = useState([]);
  const [newEntry, setNewEntry] = useState({ date: '', header: '', description: '', uuid: '' });
  const [validationError, setValidationError] = useState('');

  const handleShowModal = () => {
    setValidationError('');
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setNewEntry({ date: '', header: '', description: '', uuid: '' });
    setValidationError('');
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry((prevEntry) => ({ ...prevEntry, [name]: value }));
  };

  const handleAddEntry = () => {
    if (!newEntry.date || !newEntry.header.trim()) {
      setValidationError('โปรดเลือกวันที่และเพิ่มหัวข้อ');
      return;
    }
  
    // setting the uuid for the submit
    const newEntryWithUuid = { ...newEntry, uuid: uuidv4() };
  
    setJournalEntries((prevEntries) => {
      const updatedEntries = [...prevEntries, newEntryWithUuid];
      localStorage.setItem('journal-data', JSON.stringify(updatedEntries));
      showAlert("success", "เพิ่มข้อมูลเรียบร้อย" , "ทำการบันทึกลงฐานข้อมูลเซิฟเวอร์เรียบร้อย")
      return updatedEntries;
    });
  
    setNewEntry({ date: '', header: '', description: '', uuid: '' });
    handleCloseModal();
  };

  const handleRemoveEntry = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });

        // begin to remove
          setJournalEntries((prevEntries) => {
            const updatedEntries = prevEntries.filter((journal) => journal.uuid !== id);
            localStorage.setItem('journal-data', JSON.stringify(updatedEntries));
            return updatedEntries;
        })
      }
    });
    
  }



  const showAlert =(eventIcon,eventTitle,eventText) => {
      Swal.fire({
      title: eventTitle,
      icon: eventIcon,
      text: eventText,
      confirmButtonText: "ตกลง"
  })
  }


  // Load the storage

  useEffect(() => {
    const loadData = localStorage.getItem("journal-data");
    if (loadData) {
        setJournalEntries(JSON.parse(loadData));
    }

  }, [])

  return (
    <div className={`${styles.journal_container}`}>
    <div className={`container `}>
        <h1 className="text-center display-2">Daily Journal</h1>
      <div className="my-3 d-flex justify-content-center ">
        <Button className={`${styles.add_button} btn btn-lg btn-primary`} onClick={handleShowModal}>
          เพิ่มบันทึก
        </Button>
      </div>

      {/* Modal for adding a new entry */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>เพิ่มบันทึกประจำวัน</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Date Input */}
            <Form.Group className="mb-3" controlId="formDate">
              <Form.Label>วันที่บันทึก</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={newEntry.date}
                onChange={handleInputChange}
                isInvalid={validationError && !newEntry.date}
              />
              <Form.Control.Feedback type="invalid">โปรดเลือกวันที่บันทึก</Form.Control.Feedback>
            </Form.Group>

            {/* Header Input */}
            <Form.Group className="mb-3" controlId="formHeader">
              <Form.Label>หัวข้อ</Form.Label>
              <Form.Control
                type="text"
                name="header"
                value={newEntry.header}
                onChange={handleInputChange}
                isInvalid={validationError && !newEntry.header.trim()}
              />
              <Form.Control.Feedback type="invalid">โปรดกรอกหัวข้อบันทึก</Form.Control.Feedback>
            </Form.Group>

            {/* Description Input */}
            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>รายละเอียด</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={newEntry.description}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            ยกเลิก
          </Button>
          <Button variant="primary" onClick={handleAddEntry}>
            บันทึก
          </Button>
        </Modal.Footer>
      </Modal>

      {/* List of Journal Entries */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {journalEntries.map((entry, index) => {
            return <JournalCard key={index} {...entry} handleRemoveEntry={handleRemoveEntry}>
            </JournalCard>
        }

        )}
      </div>
    </div>
    </div>
  );
  
};

export default DailyJournalPage;