import React, { useEffect, useState } from "react";
import WebSocket from "isomorphic-ws";

const WebSocketComponent = ({ incrementEventCount, calculateEventRate }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const socket = new WebSocket("ws://beeps.gg/stream");
    socket.onmessage = (event) => {
      const eventData = JSON.parse(event.data);
      setEvents((prevEvents) => [eventData, ...prevEvents]);
       incrementEventCount(); 
       calculateEventRate();
    };
    return () => {
      socket.close();
    };
  }, []);

   useEffect(() => {
     calculateEventRate(); // Recalculate event rate whenever event count changes
   }, [events, calculateEventRate]);

  return (
    <div>
      {events.map((event) => (
        <div key={event.id}>
          <p>{event.message}</p>
        </div>
      )).sort()}
    </div>
  );
};

export default WebSocketComponent;
