import React, { useState } from 'react';
import "./ContactPage.css";
import PageWrapper from "./PageWrapper";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to send data to a server or email.
    setSubmitted(true);
  };

  return (
    <PageWrapper>
    <div className="contact-page">
      <h1>Contact Us</h1>
      <h1>Contact NouvaLab Education</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      ) : (
        <div className="thank-you">
          <h2>Thank you for reaching out! 🎉</h2>
          <p>We’ll get back to you as soon as possible.</p>
        </div>
      )}
    </div>
    </PageWrapper>
  );
}

export default ContactPage;
