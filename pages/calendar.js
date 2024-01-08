import styles from "@/styles/Calendar.module.css";
import CalendarComponent from "@/components/Calendar";
import { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useEventContext } from "@/contexts/EventContext";

export default function Calendar() {
  const { events: contextEvents, setEvents } = useEventContext();
  const [localEvents, setLocalEvents] = useState(contextEvents);
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({ date: "", title: "" });

  useEffect(() => {
    setLocalEvents(contextEvents);
  });

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({ ...prevEvent, [name]: value }));
  };

  const handleAddEvent = () => {
    if (!newEvent.date || !newEvent.title.trim()) {
      // Validation: Date and Title are required
      return;
    }

    const updatedLocalEvents = [...localEvents, newEvent];
    setLocalEvents(updatedLocalEvents);
    setEvents(updatedLocalEvents);

    // Close the modal and reset the newEvent state
    handleCloseModal();
    setNewEvent({ date: "", title: "" });
  };

  return (
    <>
      <main className={`${styles.main}`}>
        
        <div className={`container pt-3`}>
        <h1>Calendar</h1>
        
          <div className={`${styles.add_button}`}>
            <Button
              variant="primary"
              className={`mt-2 mb-5`}
              onClick={handleShowModal}
            >
              เพิ่มอีเว้นท์
            </Button>
          </div>
          <div className={`${styles.calendar_body}`}>
            <CalendarComponent
              events={localEvents}
            />
          </div>
        </div>

        {/* Modal for adding a new event */}
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>เพิ่มอีเว้นท์ใหม่</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {/* Date Input */}
              <Form.Group className="mb-3" controlId="formDate">
                <Form.Label>วันที่</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={newEvent.date}
                  onChange={handleInputChange}
                />
              </Form.Group>

              {/* Title Input */}
              <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>ชื่อหัวข้องาน</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={newEvent.title}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAddEvent}>
              Add Event
            </Button>
          </Modal.Footer>
        </Modal>
      </main>
    </>
  );
}
