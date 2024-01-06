import React, { createContext, useContext, useState } from 'react';

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([
    { title: 'Borntodev Project Week 3', date: '2024-01-01' },
    { title: 'Borntodev Final Project Presentation', date: '2024-01-08' },
    { title: 'Microsoft .NET Conference', date: '2024-01-24'}
    // Add more events as needed
  ]);

  const addEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };

  const removeEvent = (eventId) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId));
  };

  return (
    <EventContext.Provider value={{ events, setEvents, addEvent, removeEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => {
  return useContext(EventContext);
};