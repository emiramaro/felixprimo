import React from 'react';
import { Link } from 'react-router-dom';
import './Team.css';
import placeholderImage from '../assets/images/stitch.jpg'; // Adjust the path as necessary

function Team() {
  const pis = [
    { name: 'Elliot K. Fishman, MD', role: 'Principal Investigator', image: placeholderImage, id: 'jane-doe' },
    { name: 'Satomi Kawamoto, MD', role: 'Principal Investigator', image: placeholderImage, id: 'john-smit' },
    { name: 'Linda Chu, MD', role: 'Principal Investigator', image: placeholderImage, id: 'satomi' },
  ];

  const members = [
    { name: 'Alejandro Blanco, MD', role: 'Post-doc Research Fellow', image: placeholderImage, id: 'member-1' },
    { name: 'Felipe Ramirez, MD', role: 'Post-doc Research Fellow', image: placeholderImage, id: 'member-2' },
    { name: 'Florent Tixier, PhD', role: 'Sr. Radiomics and AI Engineer', image: placeholderImage, id: 'member-3' },
    { name: 'Mohammed Yasrab, MD', role: 'Post-doc Research Fellow', image: placeholderImage, id: 'member-4' },
    { name: 'Charles Crawford, BS', role: 'Research Assistant', image: placeholderImage, id: 'member-5' },
    { name: 'Hajra Arshad, MD', role: 'Post-doc Research Fellow', image: placeholderImage, id: 'member-6' },
    { name: 'Emir Syailendra, MD, MS', role: 'Post-doc Research Fellow', image: placeholderImage, id: 'member-7' },
    { name: 'Taha Ahmed, MD', role: 'Post-doc Research Fellow', image: placeholderImage, id: 'member-8', alumni: true },
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