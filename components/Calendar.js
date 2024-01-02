import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const CalendarComponent = ({ events, handleEventClick, handleDateSelect, handleEventDrop }) => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={events}
      editable={true}
      selectable={true}
      selectMirror={true} // Highlight the selected date range
      select={handleDateSelect} // Triggered when a date range is selected
      eventClick={handleEventClick}
      eventDrop={handleEventDrop}
      
    />
  );
};

export default CalendarComponent;