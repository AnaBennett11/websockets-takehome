import React, { useEffect, useState } from "react";
import WebSocket from "isomorphic-ws";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


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

  const sortedEvents = [...events].sort((a, b) => b.timestamp - a.timestamp);

  return (
    <Card>
      <CardContent>
        {sortedEvents.map((event) => (
          <div className="messageContainer" key={event.id}>
            <img src={event.user.image_url} />
            <div className="textContainer">
              <Typography variant="h6" component="p" className="boldText">
                {event.user.name}
              </Typography>
              <Typography variant="body1" component="p">
                {event.message}
              </Typography>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default WebSocketComponent;
