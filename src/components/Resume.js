import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section id="resume" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Resume</h2>

        <div className="text-center mb-4">
          <a
            href="/Sachin_Pattar_Resume.pdf"
            download
            className="btn btn-primary"
          >
            Download Resume
          </a>
        </div>

        <div className="row">
          {/* Projects Section */}
          <div className="col-md-6">
            <h4 className="mb-3">Projects</h4>
            <ul className="timeline">
              <li>
                <h5>Personal Portfolio Website</h5>
                <span className="timeline-date">2025</span>
                <p>
                  Created a responsive personal portfolio using React.js, Bootstrap, and JavaScript.
                  Features include smooth scrolling, download resume, and section-based navigation.
                </p>
              </li>
              <li>
                <h5>Real Estate CRM System</h5>
                <span className="timeline-date">2024</span>
                <p>
                  Built using the MERN stack (MongoDB, Express, React, Node.js), this app helps real estate agents manage clients and property listings.
                </p>
              </li>
            </ul>
          </div>

          {/* Education Section */}
          <div className="col-md-6">
            <h4 className="mb-3">Education</h4>
            <ul className="timeline">
              <li>
                <h5>Bachelor of Engineering in Information Science</h5>
                <span className="timeline-date">2021 – 2026</span>
                <p>
                  BLDEACET, Vijayapura, Affiliated to VTU, Belagavi University<br />
                  Current CGPA: 7.5
                </p>
              </li>
              <li>
                <h5>Diploma in Computer Science and Engineering</h5>
                <span className="timeline-date">2020 – 2023</span>
                <p>
                  Government Polytechnic, Vijayapura<br />
                  CGPA: 8.23
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
