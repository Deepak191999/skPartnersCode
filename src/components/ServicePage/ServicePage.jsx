import React from 'react'
import Service from './Service'
import Footer from '../Footer/Footer'
import { NavLink } from 'react-router-dom'

const ServicePage = () => {
  return (
   <>
    <nav aria-label="breadcrumb" className="bg-light p-3 rounded fs-4 ps-4">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <NavLink className="text-decoration-none text-secondary" to="/">
              Home
            </NavLink>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <NavLink className="text-decoration-none text-primary" to="/services">
              Services
            </NavLink>
          </li>
        </ol>
      </nav>
   <Service/>
   <Footer/>
   </>
  )
}

export default ServicePage