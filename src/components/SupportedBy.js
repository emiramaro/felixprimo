import React from 'react';
import './SupportedBy.css';

function SupportedBy() {
  const supporters = [
    { name: 'Lustgarten Foundation', image: 'https://via.placeholder.com/150', id: 'lustgarten' },
    { name: 'Microsoft AI for Good', image: 'https://via.placeholder.com/150', id: 'microsoft-ai' },
    { name: 'Johns Hopkins Medicine', image: 'https://via.placeholder.com/150', id: 'johns-hopkins' },
  ];

  return (
    <section id="supported-by" className="my-5">
      <div className="container">
        <h3 className="section-subtitle">Supported By</h3>
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