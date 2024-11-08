import React from 'react';
import './Landing.css';

function Landing() {
  return (
    <section id="landing" className="landing-section">
      <div className="overlay">
        <div className="quotes">
          <p>"Advancing research in pancreatic cancer."</p>
          <p>"Innovative research and collaboration."</p>
          <p>"Improving diagnosis and treatment."</p>
        </div>
      </div>
    </section>
  );
}

export default Landing;