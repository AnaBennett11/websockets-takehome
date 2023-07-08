import React, { useState } from "react";
import WebSocketComponent from "./WebSocketComponent";

const Home = () => {
  const [eventCount, setEventCount] = useState(0);
  const [eventRate, setEventRate] = useState(0);

  return (
    <div>
      <div className="sidebar">
        <p>Event Count: </p>
        <p>Event Rate (per minute): </p>
      </div>
        <div className="main">
          <WebSocketComponent />
        </div>
    </div>
  );
};

export default Home;
