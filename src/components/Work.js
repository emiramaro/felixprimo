import React, { useState } from 'react';
import './Work.css';

const researchItems = [
  {
    title: "Lopez-Ramirez, Felipe, Sahar Soleimani, Javad R. Azadi, Sheila Sheth, Satomi Kawamoto, Ammar A. Javed, Florent Tixier, Ralph H. Hruban, Elliot K. Fishman, and Linda C. Chu. “Radiomics Machine Learning Algorithm Facilitates Detection of Small Pancreatic Neuroendocrine Tumors on CT.” Diagnostic and Interventional Imaging, September 2024, S2211568424001724. https://doi.org/10.1016/j.diii.2024.08.003."
  },
  {
    title: "Yasrab, M., Rizk, R. C., Chu, L., & Fishman, E. K. (2024). 3D Cinematic rendering for evaluating femoral pseudoaneurysms in injection drug users. Emergency Radiology, 31(4), 595-603. https://doi.org/10.1007/s10140-024-02237-x"
  },
  // Add more research items here
];

// Add placeholders until page 3
while (researchItems.length < 15) {
  researchItems.push({ title: "Placeholder research item" });
}

function Work() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(researchItems.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = researchItems.slice(startIndex, endIndex);

  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="text-center">Research</h2>
        <ul>
          {currentItems.map((item, index) => (
            <li key={index}>
              <p><strong>{item.title}</strong></p>
            </li>
          ))}
        </ul>
        <div className="pagination-buttons">
          <button onClick={handlePrevPage} disabled={currentPage === 0}>Previous</button>
          <span>Page {currentPage + 1} of {totalPages}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages - 1}>Next</button>
        </div>
      </div>
    </section>
  );
}

export default Work;