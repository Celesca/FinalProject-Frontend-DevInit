// Import necessary components and plugins
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const StaticCalendarComponent = ({
  events,
  staticCalendar /* other props... */,
}) => {
  const calendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: "dayGridMonth",
    events: events,
    editable: !staticCalendar, // Disable editing if it's a static calendar
    selectable: !staticCalendar, // Disable date selection if it's a static calendar
    selectMirror: !staticCalendar,
  };

  return <FullCalendar {...calendarOptions} />;
};

export default StaticCalendarComponent;
