import '../components/Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import React, { useState } from "react";
import emailjs from "emailjs-com"; // install with: npm install emailjs-com

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  // Update form state on input change
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit handler: sends email via EmailJS
  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    
    // EmailJS Configuration
    const SERVICE_ID = "service_ic18778";     // YOUR VERIFIED SERVICE ID
    const TEMPLATE_ID = "template_t3m1a8o";    // YOUR VERIFIED TEMPLATE ID
    const PUBLIC_KEY = "6V6kRxVaMYjHuD0jS";   // YOUR VERIFIED PUBLIC KEY

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.email,      // Shows Email ID in the "From Name" field
          user_real_name: form.name,  // Pass the real name to the content
          message: form.message,
          to_email: "yamanurinad18@gmail.com"
        },
        PUBLIC_KEY
      );

      if (result.status === 200) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setError("Failed to send. Please check your EmailJS settings.");
      }
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError("Server error. Please verify your Service ID and Public Key in Contact.js.");
    }
  };

  if (sent) return <div style={{ textAlign: "center", padding: "2rem" }}>✅ Thank you for contacting us!</div>;

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Get in <span className="gradient-text">Touch</span></h2>
        <p>
          I'm always open to discussing new projects, creative ideas, or opportunities 
          to be part of your vision. Feel free to reach out!
        </p>
      </div>

      <div className="contact-content">
        <div className="contact-left">
          <div className="contact-info">
            <p><FaEnvelope /> yamanurinad18@gmail.com</p>
            <p><FaPhone /> +91 9972695581</p>
            <p><FaMapMarkerAlt /> Bangalore, India</p>
          </div>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/yamanuri-nad/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/Yamanuri" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.instagram.com/yamanuri_nad/" target="_blank" rel="noreferrer"><FaInstagram /></a>
          </div>
        </div>

        <div className="contact-right">
          {error && <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="How can I help you today?"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <div style={{ width: "100%", textAlign: "center", marginTop: "6rem", color: "#94a3b8", fontSize: "1rem", fontWeight: "600" }}>
        © {new Date().getFullYear()} Yamanuri Shrishail Nad. All rights reserved.
      </div>
    </div>
  );
}

export default Contact;
