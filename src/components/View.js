import React, { useState } from "react";

const View = (props) => {
  const { ticketData, updateTicketData } = props;
  const [edit , setEdit] = useState(null);
  const handleDecrease = (index) => {
    const updatedData = [...ticketData];
    if (updatedData[index].count > 0) {
      updatedData[index].count -= 1;
      updateTicketData(updatedData);
    }
  };

  const handleIncrease = (index) => {
    const updatedData = [...ticketData];
    updatedData[index].count += 1;
    updateTicketData(updatedData);
  };

  const handleDelete = (index) => {
    const updatedData = ticketData.filter(
      (a) => a.heading !== ticketData[index].heading
    );
    console.log(updatedData);
    updateTicketData(updatedData);
    console.log(ticketData);
  };

  const handleClose =()=>{
    setEdit(null);
  }

  const handleEdit = (index)=>{
    setEdit(index)
  };
  const handleEditValue = (e)=>{
    if(e.key === 'Enter'){
        const updatedData = [...ticketData];
        console.log(updatedData[edit]);
        updatedData[edit].heading = e.target.value;
        updateTicketData(updatedData);
        setEdit(null);
    }
  }
 

  return (
    <div>
      {ticketData.map((ticket, index) => (
        <div key={index}>
          <div>{ticket.heading}</div>
          <div>Count: {ticket.count}</div>{" "}
          <button onClick={() => handleDecrease(index)}> - </button>
          <button onClick={() => handleIncrease(index)}> + </button>
          <button onClick={() => handleDelete(index)}> delete </button>
          <button onClick={()=> handleEdit(index)}>Edit Heading</button>
          { (edit !== null && edit === index )?  (<><input onKeyPress={handleEditValue}></input> <button onClick={handleClose}>Close</button></>) : <></>}
        </div>
      ))}
    </div>
  );
};

export default View;
