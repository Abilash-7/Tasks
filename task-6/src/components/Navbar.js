import React from 'react'
import { Link } from 'react-router-dom'
import '../Assets/Style.css'

const Navbar = () => {
  return (
  <nav className="navbar navbar-dark bg-dark bg-light ">
    
      <h1 className="navbar-text text-white ms-5" >TT</h1>
      <button className="navbar-toggler me-5" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end bg-dark" tabindex="-1" id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header mt-5">
          <h3 className="offcanvas-title text-white ms-3" id="offcanvasNavbarLabel">Menu</h3>
          <button type="button" class="btn-close bg-danger me-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body ms-2 mt-3">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className='nav-item mb-4'><Link to='/' className='nav-links'>Home</Link></li>
            <li className='nav-item mb-4'><Link to='/Tour' className='nav-links'>Tour</Link></li>
            <li className='nav-item mb-4'><Link to='/About' className='nav-links'>About</Link></li>
            <li className='nav-item mb-4'><Link to='/Review' className='nav-links'>Reviews</Link></li>
            <li className='nav-item mb-4'><Link to='/Contact' className='nav-links'>Contact</Link></li>
            <li className='nav-item'><Link to='/Reservation' className='nav-links'>Registration</Link></li>
          </ul>
        </div>
      </div>
    
  </nav>
    )
}

export default Navbar