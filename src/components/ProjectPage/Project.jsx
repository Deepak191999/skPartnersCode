import React from 'react';
import Card from './ProjectCard.jsx'; // Adjust the import path as necessary
import project1 from '../../img/project-1.jpg';
import project2 from '../../img/project-2.jpg';
import project3 from '../../img/project-3.jpg';
import project4 from '../../img/project-4.jpg';

const Project = () => {
  const projects = [
    {
      image: project1,
      title: "Data Analytics & Insights",
      text: "Transforming raw data into actionable insights for informed decision-making.",
      link: "#"
    },
    {
      image: project2,
      title: "Marketing Content Strategy",
      text: "Developing compelling content that resonates with target audiences to drive engagement.",
      link: "#"
    },
    {
      image: project3,
      title: "Business Target Market",
      text: "Identifying and targeting the right market segments for effective outreach and growth.",
      link: "#"
    },
    {
        image: project4,
        title: "Social Marketing Strategy",
        text: "Creating impactful social media campaigns that drive engagement and brand loyalty.",
        link: "#"
      },
  ];

  return (
    <div className="container-xxl pt-5 border">
      <div className="container">
        <div className="text-center text-md-start pb-5 pb-md-0 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
          <p className="fs-5 fw-medium text-primary">Our Projects</p>
          <h1 className="display-5 mb-5">We've Done Lots of Awesome Projects</h1>
        </div>
        <div className="row  py-4">
          {projects.map((project, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <Card 
                image={project.image} 
                title={project.title} 
                text={project.text} 
                link={project.link} 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
