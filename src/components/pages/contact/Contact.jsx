import React, { useState } from "react";
import "./Contact.css";
function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="wrapper">
      <div className="contact--container">
        <div className="contact--header">
          <h2>Message me</h2>
        </div>
        <form className="contact--body">
          <input
            type="text"
            name=""
            id=""
            required
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            onBlur={(e) => {
              const nameRegex = new RegExp("^[a-zA-Z ]+$");
              if (nameRegex.test(e.target.value)) {
                setName(e.target.value);
              } else {
                alert("Enter a valid name");
              }
            }}
            value={name}
          />
          <input
            type="email"
            name=""
            id=""
            required
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onBlur={(e) => {
              const emailRegex = new RegExp(
                "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$"
              );
              if (!emailRegex.test(e.target.value)) {
                alert("Enter a valid email");
              }
            }}
            value={email}
          />
          <textarea
            name=""
            id=""
            cols="30"
            maxLength={500}
            rows="10"
            required
            placeholder="Enter a message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            onBlur={(e) => {
              if (e.target.value.length <= 0) {
                alert("Enter message");
              }
            }}
            value={message}
          ></textarea>
          <button className="btn btn--fill" disabled>
            <h2>Send</h2>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;