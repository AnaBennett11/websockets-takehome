import React, { useState } from "react";


const Home = () => {
  const [eventCount, setEventCount] = useState(0);
  const [eventRate, setEventRate] = useState(0);


return (
    <div>
      <div className="sidebar">
        <p>Event Count: </p>
        <p>Event Rate (per minute): </p>
      </div>
   
    </div>
  );
}

export default Home;