import React from 'react';
import './Projects.css';
import project1 from '../assets/images/project1.jpg';
import project2 from '../assets/images/project2.jpg';
import project3 from '../assets/images/project3.jpg';

const projects = [
  {
    id: 1,
    image: project1,
    title: 'Portfolio Website',
    description: 'A personal portfolio website built using React, showcasing my projects and skills.',
  },
   {
    id: 2,
    image: project2,
    title: 'Organease – Organ Donation Platform',
    description: 'A web app that connects organ donors and patients. Features include image uploads, donor registration, and access control for doctors and recipients.',
  },
  {
    id: 3,
    image: project3,
    title: 'CRM – Customer Relationship Management System',
    description: 'Admin dashboard built with the MERN stack to manage customers, invoices, quotations, payments, tax calculations, and a real-time analytics dashboard.',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-5">Projects</h2>
        <div className="row">
          {projects.map((project) => (
            <div className="col-md-4 mb-4" key={project.id}>
              <div className="card h-100 shadow-sm project-card">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  {/* Optional: Add buttons for live/demo or GitHub */}
                  {/* <a href="#" className="btn btn-primary mt-auto">View Project</a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
