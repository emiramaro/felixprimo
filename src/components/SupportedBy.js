import React from 'react';
import './SupportedBy.css';
import lustgartenImage from '../assets/images/lustgarten.png'; // Adjust the path as necessary
import microsoftImage from '../assets/images/microsoft.jpg'; // Adjust the path as necessary
import jhmImage from '../assets/images/jhm.jpg'; // Adjust the path as necessary

function SupportedBy() {
  const supporters = [
    { name: 'Lustgarten Foundation', image: lustgartenImage, id: 'lustgarten' },
    { name: 'Microsoft AI for Good', image: microsoftImage, id: 'microsoft-ai' },
    { name: 'Johns Hopkins Medicine', image: jhmImage, id: 'johns-hopkins' },
  ];

  return (
    <section id="supported-by" className="my-5">
      <div className="container">
        <h2 className="text-center">Supported By</h2>
        <div className="row">
          {supporters.map((supporter) => (
            <div className="col-md-4" key={supporter.id}>
              <div className="supporter">
                <img src={supporter.image} alt={supporter.name} className="img-fluid" />
                <h3>{supporter.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SupportedBy;