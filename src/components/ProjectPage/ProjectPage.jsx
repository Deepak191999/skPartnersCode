import React from 'react'

import Footer from '../Footer/Footer'
import Project from './Project'
import { NavLink } from 'react-router-dom'


const ProjectPage = () => {
  return (
    <>
      <nav aria-label="breadcrumb" className="bg-light p-3 rounded fs-4 ps-4 mb-4">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <NavLink className="text-decoration-none text-secondary" to="/">
              Home
            </NavLink>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <NavLink className="text-decoration-none text-primary" to="/projects">
              Projects
            </NavLink>
          </li>
        </ol>
      </nav>
      
      <Project/>
      <Footer/>
    </>
  )
}

export default ProjectPage