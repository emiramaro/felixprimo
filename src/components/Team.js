import React from 'react';
import { Link } from 'react-router-dom';
import './Team.css';
import placeholderImage from '../assets/images/stitch.jpg'; // Adjust the path as necessary
import elliot from '../assets/images/elliot-fishman.avif'
import linda from '../assets/images/linda-chu.jpg'
import satomi from '../assets/images/satomi-kawamoto.jpg'
import steph from '../assets/images/steph-blackwood.jpg'

function Team() {
  const pis = [
    { name: 'Elliot K. Fishman, MD', role: 'Principal Investigator', image: elliot, id: 'elliot-fishman' },
    { name: 'Linda Chu, MD', role: 'Principal Investigator', image: linda, id: 'linda-chu' },
    { name: 'Satomi Kawamoto, MD', role: 'Principal Investigator', image: satomi, id: 'satomi-kawamoto' }
  ];

  const members = [
    { name: 'Stephanie Blackwood', role: 'Sr. Administrator', image: steph, id: 'steph-blackwood' },
    { name: 'Scott Graves', role: 'Dedicated Segmentator', image: placeholderImage, id: 'scott-graves' },
    { name: 'Alejandro Blanco, MD', role: 'Research Associate', image: placeholderImage, id: 'ale-blanco' },
    { name: 'Florent Tixier, PhD', role: 'Sr. Radiomics and AI Engineer', image: placeholderImage, id: 'flo-tixier' },
    { name: 'Felipe Ramirez, MD', role: 'Post-doc Research Fellow', image: placeholderImage, id: 'felipe-ramirez' },
    { name: 'Mohammed Yasrab, MD', role: 'Post-doc Research Fellow', image: placeholderImage, id: 'moh-yasrab' },
    { name: 'Charles Crawford, BS', role: 'Research Assistant', image: placeholderImage, id: 'charles-crawford' },
    { name: 'Hajra Arshad, MD', role: 'Post-doc Research Fellow', image: placeholderImage, id: 'hajra-arshad' },
    { name: 'Emir Syailendra, MD, MS', role: 'Post-doc Research Fellow', image: placeholderImage, id: 'emir-syailendra' },
    { name: 'Taha Ahmed, MD', role: 'Post-doc Research Fellow', image: placeholderImage, id: 'taha-ahmed', alumni: true },
  ];

  return (
    <section id="team" className="section">
      <div className="container">
        <h2 className="section-title text-center">Our Team</h2>
      </div>
      
      <div className="container">
        <h3 className="section-subtitle text-center">Principal Investigators</h3>
        <div className="row">
          {pis.map((pi) => (
            <div className="col-md-4" key={pi.id}>
              <div className="team-member">
                <Link to={`/profile/${pi.id}`}>
                  <img src={pi.image} alt={pi.name} className="img-fluid rounded-circle" />
                </Link>
                <h3>{pi.name}</h3>
                <p>{pi.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-5">
        <h3 className="section-subtitle text-center">Research Team</h3>
        <div className="row">
          {members.map((member) => (
            <div className="col-md-4" key={member.id}>
              <div className={`team-member ${member.alumni ? 'alumni' : ''}`}>
                <Link to={`/profile/${member.id}`}>
                  <img src={member.image} alt={member.name} className="img-fluid rounded-circle" />
                </Link>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;