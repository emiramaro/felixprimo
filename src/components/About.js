import React from 'react';
import './About.css';
import aboutImage from '../assets/images/about.png'; // Adjust the path as necessary

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="text-center">About Us</h2>
        <img src={aboutImage} alt="About Us" className="img-fluid mx-auto d-block" />
        <p className="description text-center">Our lab is dedicated to advancing research in pancreatic cancer.</p>
        <p className="description text-center">We strive to improve diagnosis and treatment through innovative research and collaboration.</p>
      </div>
    </section>
  );
}

export default About;