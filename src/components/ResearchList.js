import React, { useEffect, useState } from 'react';
import Papa from 'papaparse'; // For CSV files
import * as XLSX from 'xlsx'; // For Excel files
import './ResearchList.css';

function ResearchList() {
  const [researchData, setResearchData] = useState([]);

  useEffect(() => {
    // Load CSV file
    fetch('\public\ResearchList.csv')
      .then(response => response.text())
      .then(data => {
        Papa.parse(data, {
          header: true,
          complete: (results) => {
            setResearchData(results.data);
          }
        });
      });

    // Load Excel file
    // fetch('/path/to/your/research.xlsx')
    //   .then(response => response.arrayBuffer())
    //   .then(data => {
    //     const workbook = XLSX.read(data, { type: 'array' });
    //     const sheetName = workbook.SheetNames[0];
    //     const worksheet = workbook.Sheets[sheetName];
    //     const jsonData = XLSX.utils.sheet_to_json(worksheet);
    //     setResearchData(jsonData);
    //   });
  }, []);

  return (
    <section id="research-list" className="section">
      <div className="container">
        <h2 className="text-center">Our Research</h2>
        <ul className="research-list">
          {researchData.map((item, index) => (
            <li key={index}>
              <h3>{item.Title}</h3>
              <p><strong>Authors:</strong> {item.Authors}</p>
              <p><strong>Abstract:</strong> {item.Abstract}</p>
              <p><strong>Publication Date:</strong> {item["Publication Date"]}</p>
              <p><strong>Journal:</strong> {item.Journal}</p>
              <p><strong>DOI:</strong> <a href={item.DOI} target="_blank" rel="noopener noreferrer">{item.DOI}</a></p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ResearchList;