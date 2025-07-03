import React from 'react';
import './About.css';
import profileImg from '../assets/images/profile.jpg'; // Replace with your image

const About = () => {
  const skills = [
    { name: 'java', level: 90 },
    { name: 'Spring Boot', level: 85 },
    { name: 'MongoDB', level: 80 },
    { name: 'React.js', level: 75 },
    { name: 'DSA', level: 85 },
    { name: 'Git & GitHub', level: 85 }
  ];

  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">About Me</h2>
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img
              src={profileImg}
              alt="Profile"
              className="img-fluid rounded-circle profile-img mb-3"
            />
          </div>
          <div className="col-md-8">
            <p className="mb-4">
             I’m a backend-focused developer with strong experience in Java, Spring Boot, MongoDB, and SQL. I enjoy designing robust server-side logic, APIs, and database systems that power scalable web applications. While I have working knowledge of frontend technologies like HTML, CSS, JavaScript, and React, my passion lies in solving backend challenges and building secure, high-performance systems.
            </p>

            {skills.map((skill, index) => (
              <div key={index} className="mb-3">
                <strong>{skill.name}</strong>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${skill.level}%` }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {skill.level}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
