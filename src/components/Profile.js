import React from 'react';
import { useParams } from 'react-router-dom';
import './Profile.css';

const members = [
  { name: 'Elliot K. Fishman, MD', role: 'Principal Investigator', image: 'https://via.placeholder.com/150', id: 'jane-doe', bio: 'Bio for Elliot K. Fishman, MD' },
  { name: 'Satomi Kawamoto, MD', role: 'Principal Investigator', image: 'https://via.placeholder.com/150', id: 'john-smit', bio: 'Bio for Satomi Kawamoto, MD' },
  { name: 'Linda Chu, MD', role: 'Principal Investigator', image: 'https://via.placeholder.com/150', id: 'satomi', bio: 'Bio for Linda Chu, MD' },
  { name: 'Alejandro Blanco, MD', role: 'Post-doc Research Fellow', image: 'https://via.placeholder.com/150', id: 'member-1', bio: 'Bio for Alejandro Blanco, MD' },
  { name: 'Felipe Ramirez, MD', role: 'Post-doc Research Fellow', image: 'https://via.placeholder.com/150', id: 'member-2', bio: 'Bio for Felipe Ramirez, MD' },
  { name: 'Florent Tixier, PhD', role: 'Sr. Radiomics and AI Engineer', image: 'https://via.placeholder.com/150', id: 'member-3', bio: 'Bio for Florent Tixier, PhD' },
  { name: 'Mohammed Yasrab, MD', role: 'Post-doc Research Fellow', image: 'https://via.placeholder.com/150', id: 'member-4', bio: 'Bio for Mohammed Yasrab, MD' },
  { name: 'Charles Crawford', role: 'Research Assistant', image: 'https://via.placeholder.com/150', id: 'member-5', bio: 'Bio for Hajra Arshad, MD' },
  { name: 'Hajra Arshad, MD', role: 'Post-doc Research Fellow', image: 'https://via.placeholder.com/150', id: 'member-6', bio: 'Bio for Hajra Arshad, MD' },
  { name: 'Emir Syailendra, MD, MS', role: 'Post-doc Research Fellow', image: 'https://via.placeholder.com/150', id: 'member-7', bio: 'Bio for Emir Syailendra, MD, MS' },
];

function Profile() {
  const { id } = useParams();
  const member = members.find((m) => m.id === id);

  if (!member) {
    return <div>Member not found</div>;
  }

  return (
    <section id="profile" className="my-5">
      <div className="container">
        <h2>{member.name}</h2>
        <img src={member.image} alt={member.name} className="img-fluid rounded-circle" />
        <h3>{member.role}</h3>
        <p>{member.bio}</p>
      </div>
    </section>
  );
}

export default Profile;