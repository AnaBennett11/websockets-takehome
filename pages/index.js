import React, { useState } from "react";
import WebSocketComponent from "./WebSocketComponent";


const Home = () => {
  const [eventCount, setEventCount] = useState(0);
  const [eventRate, setEventRate] = useState(0);

  const incrementEventCount = () => {
    setEventCount((prevCount) => prevCount + 1);
  };

  const calculateEventRate = () => {
   
    const rate = eventCount / 60;
    setEventRate(rate.toFixed(2));
  };

  return (
    <div className="homeContainer">
      <div className="sidebar">
        <p>Event Count:{eventCount} </p>
        <p>Event Rate (per minute):{eventRate} </p>
      </div>
      <div className="main">
        <WebSocketComponent
          incrementEventCount={incrementEventCount}
          calculateEventRate={calculateEventRate}
        />
      </div>
    </div>
  );
};

export default Home;
