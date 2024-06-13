// src/pages/About.js
import React from 'react';
import NavBar from '../components/NavBar'

const About = () => {
  return (
    <>
    <NavBar />
    <div className="about-container">
      <h1>About Us</h1>
      <p>Welcome to BookFinder, your number one source for all books. We're dedicated to providing you the very best of book search experience, with an emphasis on simplicity, reliability, and user-friendliness.</p>
      <p>Founded in 2024 by Andrew, BookFinder has come a long way from its beginnings in a home office. When John first started out, his passion for books drove him to start his own business.</p>
      <p>We hope you enjoy our service as much as we enjoy offering it to you. If you have any questions or comments, please don't hesitate to contact us.</p>
      <p>Sincerely,</p>
      <p>Andrew, Founder</p>
    </div>
    </>
  );
};

export default About;