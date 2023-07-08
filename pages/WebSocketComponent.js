import React, { useEffect, useState } from "react";
import WebSocket from "isomorphic-ws";

const WebSocketComponent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const socket = new WebSocket("ws://beeps.gg/stream");
    socket.onmessage = (event) => {
      const eventData = JSON.parse(event.data);
      setEvents((prevEvents) => [eventData, ...prevEvents]);
    };
    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      {events.map((event) => (
        <div key={event.id}>
          <p>{event.message}</p>
          {/* Display other event details as desired */}
        </div>
      ))}
    </div>
  );
};

export default WebSocketComponent;
