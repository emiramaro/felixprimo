import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="text-center">About Us</h2>
        <img src="https://via.placeholder.com/600x400" alt="About Us" className="img-fluid mx-auto d-block" />
        <p className="text-center">Our lab is dedicated to advancing research in pancreatic cancer. We strive to improve diagnosis and treatment through innovative research and collaboration.</p>
      </div>
    </section>
  );
}

export default About;