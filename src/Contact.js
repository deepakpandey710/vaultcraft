import React from "react";
import emailjs from '@emailjs/browser';


function Contact() {
  const onClickButton = (event) => {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const contactNumber = document.getElementById("contactNumber").value;
    const userEmail = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // console.log("Full Name:", fullName);
    // console.log("Contact Number:", contactNumber);
    // console.log("Email:", userEmail);
    // console.log("Message:", message);

    const templateParams = {
      fullName,
      contactNumber,
      userEmail,
      message,
    };

    const serviceId = "service_v0wnuok";
    const templateId = "template_u43lj9k";
    const publicKey = "Ojs0-uDRWLtuB4Z6P";

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        console.log("Email sent successfully:", response);
      },
      (error) => {
        console.error("Error sending email:", error);
      }
    );

  };

  return (
    <section id="contact">
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>

      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div className="form-group">
                <label htmlFor="fullName">Enter Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="form-group pt-3">
                <label htmlFor="contactNumber">Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="contactNumber"
                  placeholder="+91-"
                />
              </div>
              <div className="form-group pt-3">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>

              <div className="form-group pt-3">
                <label htmlFor="message">Type your Message Here</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="col-12 pt-3">
                <button
                  onClick={onClickButton}
                  className="btn btn-outline-primary"
                  type="button"
                >
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
