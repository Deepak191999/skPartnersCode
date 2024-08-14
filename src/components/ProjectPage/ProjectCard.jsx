import React from 'react'

const ProjectCard = ({ image, title, text }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
          <img src={image} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            {/* <a href={link} className="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
      );
}

export default ProjectCard