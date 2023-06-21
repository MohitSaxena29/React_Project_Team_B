import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return ( 
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link to="" className="navbar-brand" >ConfigurableBoard</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
          </li> 
          <li className="nav-item">
            <Link to="/View" className="nav-link" >View</Link>
          </li> 
        </ul>
      </div>
    </div>
  </nav>
  </div>
  )
}
