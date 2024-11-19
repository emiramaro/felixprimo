import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Landing.css';
import LandingImage from '../assets/images/landing.jpg'; // Adjust the path as necessary
import PancreasVideo from '../assets/videos/pancreas.mp4'; // Adjust the path as necessary

function Landing() {
  return (
    <section id="landing" className="landing-section">
      <Carousel>
        {/* <Carousel.Item>
          <img src={LandingImage} alt="Landing" className="d-block w-100" />
        </Carousel.Item> */}
        <Carousel.Item>
          <video className="d-block w-100" controls loop autoPlay muted>
            <source src={PancreasVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Carousel.Item>
      </Carousel>
      <div className="quotes top-right">
        <p>"Advancing research in pancreatic cancer."</p>
        <p>"Innovative research and collaboration."</p>
        <p>"Improving diagnosis and treatment."</p>
      </div>
    </section>
  );
}

export default Landing;