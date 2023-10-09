import React, { useState } from "react";
import axios from "axios";

function Mail(props) {
  const [mail, setMail] = useState("");
  const { tagData, ticketData, currentDate } = props;

  const subject = `${currentDate} Report`;
  const text = "I am from react";
  const url = "http://localhost:8888/.netlify/functions/api";

  const handleMailInput = (e) => {
    const newMail = `${e.target.value}`;
    setMail(newMail);
  };
  const to = `${mail}@gmail.com`;

  const html = `
  <h3>Hello</h3>
  <p>Tag Information:</p>
  <ul>
    ${tagData.map((tag) => `
      <li>Name: ${tag.name}</li>
      <ul>
        ${tag.links.map((link) => `
          <li>Link: ${link.link}</li>
        `).join("")}
      </ul>
    `).join("")}
  </ul>

  <p>Ticket Information:</p>
  <ul>
    ${ticketData.map((ticket) => `
      <li>Heading: ${ticket.heading}</li>
      <li>Count: ${ticket.count}</li>
    `).join("")}
  </ul>
`;

  const sendMail = () => {
    console.log(tagData.length !== 0 && ticketData.length !== 0)
    if (tagData.length !== 0 && ticketData.length !== 0) {
      if (mail.length > 4) {
        axios
          .post(`${url}/sendmail`, { to, subject, text, html })
          .then((response) => {
            alert("Email sent successfully!");
          })
          .catch((error) => {
            alert("Failed to send email.");
          });
      } else {
        console.log("fl")
        alert("Enter valid mail");
      }
    }
    else{
        console.log("kjbkj")
        alert("Enter each doubts and counts")
    }
  };

  const handleMailButton = () => {
    sendMail();
  };

  const handleMail = (e) => {
    if (e.key === "Enter") {
      sendMail();
    }
  };

  return (
    <>
      <input
        placeholder="enter your appglide mail"
        value={mail}
        onChange={handleMailInput}
        onKeyPress={handleMail}
      />
      <p>@appglide.io</p>
      <button onClick={handleMailButton}> Send report to mail</button>
    </>
  );
}

export default Mail;


