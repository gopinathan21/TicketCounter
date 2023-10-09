import React, { useEffect, useState } from "react";
import View from "./components/View";
import "./App.css";
import Tags from "./components/Tags.js";
import Mail from "./components/Mail";

function App() {
  const [heading, setHeading] = useState("");
  const [tagData, setTagData] = useState([]);
  const [ticketData, setTicketData] = useState([]);
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem("ticketObject");

    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${
      today.getMonth() + 1
    }-${today.getDate()}`;
    setCurrentDate(formattedDate);
    if (storedData) {
      setTicketData(JSON.parse(storedData));
    }

    const tagObject = localStorage.getItem("tagObject");
    if (tagObject) {
      setTagData(JSON.parse(tagObject));
    }
  }, []);

  const updateTagData = (data) => {
    setTagData(data);
    console.log(data, "data");
    localStorage.setItem("tagObject", JSON.stringify(data));
  };


  const updateTicketData = (newData) => {
    setTicketData(newData);
    localStorage.setItem("ticketObject", JSON.stringify(newData));
  };

  const resetData = () => {
    localStorage.removeItem("ticketObject");
    localStorage.removeItem("tagObject");
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
      <Tags tagData={tagData} updateTagData={updateTagData} />
      <Mail
        tagData={tagData}
        ticketData={ticketData}
        currentDate={currentDate}
      />
    </div>
  );
}

export default App;
