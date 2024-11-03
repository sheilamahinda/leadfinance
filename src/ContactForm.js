import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1>We'd love to hear from you</h1>
      </div>
      <div className="contact-right">
        <h2>Contact us</h2>
        <form>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="Enter your first name" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Enter your last name" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="Enter your phone number" />
            </div>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit →
          </button>
        </form>
        <p className="contact-info">EMAIL US: enquiry@glassmoon.co</p>
      </div>
    </div>
  );
};

export default ContactForm;
