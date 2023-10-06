import React, { useEffect, useState } from "react";
import View from "./components/View";
import './App.css'

function App() {
  const [heading, setHeading] = useState("");
  const [ticketData, setTicketData] = useState([]);
  const [currentDate, setCurrentDate] = useState(""); 
  

  useEffect(() => {
    const storedData = localStorage.getItem("ticketObject");

    if (storedData) {
      setTicketData(JSON.parse(storedData));
    }

    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${
      today.getMonth() + 1
    }-${today.getDate()}`;
    setCurrentDate(formattedDate);
  }, []);

  const updateTicketData = (newData) => {
    setTicketData(newData);
    localStorage.setItem("ticketObject", JSON.stringify(newData));
  };
 
  const resetData =()=>{
    localStorage.removeItem('ticketObject')
    window.location.reload();
  };

  const handleInput = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      const newTicket = { heading, count: 0 };
      const newTicketData = [...ticketData, newTicket];
      setTicketData(newTicketData);
      localStorage.setItem("ticketObject", JSON.stringify(newTicketData));
      setHeading("");
    }
  };

  return (
    <div className="container">
      <div>
        <p>Today's Date: {currentDate}</p>
        <button onClick={resetData}>Reset</button>
      </div>
      <input
        type="text"
        placeholder="Enter a heading and press Enter"
        value={heading}
        onChange={(e) => setHeading(e.target.value)}
        onKeyPress={handleInput}
      />
      <View ticketData={ticketData} updateTicketData={updateTicketData} />
    </div>
  );
}

export default App;
