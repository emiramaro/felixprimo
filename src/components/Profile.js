import React from 'react';
import { useParams } from 'react-router-dom';
import './Profile.css';
import placeholderImage from '../assets/images/stitch.jpg'
import elliot from '../assets/images/elliot-fishman.avif'

const members = [
  { name: 'Elliot K. Fishman, MD', 
    role: 'Principal Investigator', 
    image: elliot, 
    id: 'elliot-fishman', 
    bio: `Dr. Elliot K. Fishman is a Professor in the Johns Hopkins Medicine Department Radiology and Radiological Science, Department of Oncology and Department of Surgery. He serves as a member of the Johns Hopkins Kimmel Cancer Center. His clinical and research interests focus on medical imaging with specific emphasis on three-dimensional (3D) imaging and computed tomography (CT).
    Dr. Fishman received his B.S. in 1973 and M.D. in 1977 from the University of Maryland. After a residency at Sinai Hospital in Baltimore, he completed a fellowship in CT at Johns Hopkins in 1980 and joined the Johns Hopkins faculty in 1981 as an Assistant Professor. In 1986, he became Associate Professor and, in 1991, Professor of Radiology and Oncology.
    He is a leader in the development of 3D imaging and rendering, including its impacts on and uses in patient care and management. He was involved from the beginning in the development of 3D imaging through his work with Pixar, which was a spin-off from LucasFilms in San Rafael, California. Over the last 25 years, Dr. Fishman continued to help develop 3D imaging and has been a leader in the development of interactive 3D rendering. His team is consistently at the forefront of research and development of new visualization and post-processing techniques and technologies.
    Dr. Fishman's extensive body of work in CT has resulted in over 1,000 peer-reviewed publications, and he is the author or co-author of 10 textbooks. He is the recipient of three prestigious Aunt Minnie Awards, honoring his outstanding contributions as both an educator and researcher. In 2007, he was named by Medical Imaging Magazine as the Top Radiologist in the Nation. He is a member of editorial boards for more than 35 journals, an active member of several professional radiology associations and is a past-president of the Society of Body CT/MR.`}, 
    { name: 'Satomi Kawamoto, MD', 
    role: 'Principal Investigator', 
    image: placeholderImage, 
    id: 'satomi-kawamoto', 
    bio: 'Bio for Satomi Kawamoto, MD' },
  { name: 'Linda Chu, MD', 
    role: 'Principal Investigator', 
    image: placeholderImage, 
    id: 'linda-chu', 
    bio: `Dr. Linda Chi Hang Chu is an Associate Professor in the Johns Hopkins Medicine Department of Radiology and Radiological Science. Her clinical expertise includes body CT, MRI and US. 
    Her research interests include abdominal imaging, cancer imaging, radiomics, and artificial intelligence. Dr. Chu graduated from the University of Toronto in 2003 and was awarded the Governor General's Silver Medal, 
    the highest academic achievement from the undergraduate program. She earned her medical degree as a member of AOA and phi beta kappa from Johns Hopkins University in Baltimore, MD in 2007. 
    She completed her Diagnostic Radiology residency and body MRI fellowship at Johns Hopkins Hospital. Dr. Chu joined the Johns Hopkins faculty in 2013.`},
  { name: 'Alejandro Blanco, MD', 
    role: 'Post-doc Research Fellow', 
    image: placeholderImage, 
    id: 'ale-blanco', 
    bio: 'Bio for Alejandro Blanco, MD' },
  { name: 'Felipe Ramirez, MD', 
    role: 'Post-doc Research Fellow', 
    image: placeholderImage, 
    id: 'felipe-ramirez', 
    bio: 'Bio for Felipe Ramirez, MD' },
  { name: 'Florent Tixier, PhD', 
    role: 'Sr. Radiomics and AI Engineer', 
    image: placeholderImage, 
    id: 'flo-tixier', 
    bio: 'Bio for Florent Tixier, PhD' },
  { name: 'Mohammed Yasrab, MD', 
    role: 'Post-doc Research Fellow', 
    image: placeholderImage, 
    id: 'moh-yasrab', 
    bio: 'Bio for Mohammed Yasrab, MD' },
  { name: 'Charles Crawford', 
    role: 'Research Assistant', 
    image: placeholderImage, 
    id: 'charles-crawford', 
    bio: 'Bio for Hajra Arshad, MD' },
  { name: 'Hajra Arshad, MD', 
    role: 'Post-doc Research Fellow', 
    image: placeholderImage, 
    id: 'hajra-arshad', 
    bio: 'Bio for Hajra Arshad, MD' },
  { name: 'Emir Syailendra, MD, MS', 
    role: 'Post-doc Research Fellow', 
    image: placeholderImage, 
    id: 'emir-syailendra', 
    bio: 'Bio for Emir Syailendra, MD, MS' },
    { name: 'Taha Ahmed, MD', 
      role: 'Post-doc Research Fellow', 
      image: placeholderImage, 
      id: 'taha-ahmed', 
      bio: 'Bio for Taha Ahmed, MD' },
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
        <div className="row">
          <div className="col-md-4 text-left">
            <h2>{member.name}</h2>
            <img src={member.image} alt={member.name} className="img-fluid rounded" />
          </div>
          <div className="col-md-8 text-center d-flex flex-column justify-content-center">
            <h3>{member.role}</h3>
            <p className="bio-text">{member.bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;