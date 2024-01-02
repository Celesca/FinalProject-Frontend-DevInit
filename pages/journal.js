import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import JournalCard from '@/components/JournalCard';

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

    setNewEntry((prevEntry) => ({ ...prevEntry, uuid: uuidv4() }))

    setJournalEntries((prevEntries) => [...prevEntries, newEntry]);
    setNewEntry({ date: '', header: '', description: '' , uuid:''});
    handleCloseModal();
  };

  const handleRemoveEntry = (id) => {
    setJournalEntries((prevEntries) => {
        return prevEntries.filter((journal) => journal.uuid !== id)
    });
  };

  return (
    <div className="container mt-5">
      <div className="mb-3">
        <Button variant="primary" onClick={handleShowModal}>
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
            Close
          </Button>
          <Button variant="primary" onClick={handleAddEntry}>
            Save Entry
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
  );
};

export default DailyJournalPage;