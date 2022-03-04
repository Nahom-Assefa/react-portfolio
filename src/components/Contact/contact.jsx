import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faSmile } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  function handleChange(e) {
    e.preventDefault();

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    } else {
      alert("There are errors please check the form again");
    }

    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    console.log('touchdown');
    setFormState({ ...formState, [e.target.name]: e.target.value });
    console.log('put a string on it and see', formState);
  }

  return (
    <div className="contact">
      <div className="c-bg"></div>
      <h1 className="c-title"> Let's Work Together</h1>
      <div className="c-wrapper">
        <div className="c-left">
          <h3>
            Contact Info <FontAwesomeIcon icon={faSmile}></FontAwesomeIcon>
          </h3>
          <div className="c-info">
            <div className="c-info-item">
              <div className="c-icon">
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
              </div>
              +1 952 451 5678
            </div>

            <div className="c-info-item">
              <div className="c-icon">
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </div>
              nahomassefa95@gmail.com
            </div>

            <div className="c-info-item">
              <div className="c-icon">
                <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
              </div>
              5377 143rd Street West Savage, MN, 55378
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b> Leave a message? </b> Get in touch. Always interested if the
            right project comes along!
          </p>
          {/* <form>
            <input type="text" name="name" placeholder='name' />
            <input type="text" name="subject" placeholder='subject' />
            <input type="text" name="email" placeholder='email' />
            <textarea rows="5" placeholder='Message' name="message" />
            <button>Submit</button>
        </form> */}

          <form>
            <div className="mb-3">
              <label htmlFor="Name1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="Name1"
                onBlur={handleChange}
                defaultValue={name}
                aria-describedby="nameHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email1" className="form-label">
                Email address
              </label>
              <input
                type="text"
                className="form-control"
                id="Email1"
                onBlur={handleChange}
                defaultValue={email}
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Message1" className="form-label">
                Message
              </label>
              <textarea
                type="text"
                className="form-control"
                id="Message1"
                onBlur={handleChange}
                defaultValue={message}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
