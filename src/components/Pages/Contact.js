import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import Footer from "../Footer";
import errorIcon from "../../assets/icons/error.png";
import sendIcon from "../../assets/icons/send.png";


export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [messageSent, setMessageSent] = useState("");

  const handleInputChange = (e) => {
    
    const { target } = e;
    const inputType = target.name;
    const input = target.value;

    
    if (inputType === "name") {
      setName(input);
    } else if (inputType === "email") {
      setEmail(input);
    } else {
      setMessage(input);
    }
  };
  //refactored from old homework
  const handleFormSubmit = (e) => {
    
    e.preventDefault();

    if (!name || !email || !message) {
      setMessageSent("");
      setErrorMessage("Enter information into all fields");
      return;
    }
    
    if (!validateEmail(email)) {
      setMessageSent("");
      setErrorMessage("Enter a valid email address");
      return;
    }

    
    setName("");
    setEmail("");
    setMessage("");
    setErrorMessage("");
    setMessageSent(`Hello ${name}! Your message is on its way`);
  };

  return (
    <div>
      <div>
        <h2 className="title">Send a Message!</h2>
        <div className="email-div">
          <p>
            Contact me at{" "}
            <a className="email" href="mailto:russelldnn@gmail.com">
              {" "}
              russelldnn@gmail.com{" "}
            </a>{" "}
            or through the below form.
          </p>
        </div>

        <form className="form" action="https://formsubmit.co/russelldnn@gmail.com" method="POST" >
          
          <div className="input-div">
            <label htmlFor="name">Name</label>
            <input
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="Your Name Here"
            />
          </div>

          
          <div className="input-div">
            <label htmlFor="email">Email</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="Your Email Here"
            />
          </div>

          
          <div className="input-div">
            <label htmlFor="message">Message</label>
            <textarea
              value={message}
              name="message"
              lable="Message"
              onChange={handleInputChange}
              type="text"
              placeholder="Your Message Here"
            />
          </div>

          
          <div className="send">
            <button
              className="send-btn"
              type="button"
              onClick={handleFormSubmit}
              onChange={handleInputChange}
            >
              Send
            </button>
          </div>

          
          {errorMessage && (
            <div>
              <p className="error-text">
                <img
                  alt="alert"
                  style={{ display: "inline" }}
                  src={errorIcon}
                  className="error-icon"
                />
                {errorMessage}
              </p>
            </div>
          )}

          
          {messageSent && (
            <div>
              <p className="send-text">
                {messageSent}{" "}
                <img
                  alt="send"
                  style={{ display: "inline" }}
                  src={sendIcon}
                  className="send-icon"
                />
              </p>
            </div>
          )}
        </form>
      </div>
      <Footer />
    </div>
  );
}