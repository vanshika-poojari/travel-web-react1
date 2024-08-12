import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
    <div className="container-fluid">
    <li><Link className="navbar-brand" to="/">Travel-web</Link></li>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
         
           <ul className="list-tag">
              <li><Link className="dropdown-item" to="/">Home</Link></li>
              <li><Link className="dropdown-item" to="/aboutus">About</Link></li>
              <li><Link className="dropdown-item" to="/services">Services</Link></li>
              <li><Link className="dropdown-item" to="/contact">Contact</Link></li>
              <li><Link className="btn" to="/signup">SignUp</Link></li>
              
            </ul>
     
      
        
      </div>
    </div>
  </nav>
  )
}

export default Nav