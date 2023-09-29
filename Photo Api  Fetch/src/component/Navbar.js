import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
  <div>
    <nav className="navbar navbar-expand-lg shadow ">
            <div className="container-fluid text-success">
            <h3 className="navbar-text text-dark ms-3">COLORIFY</h3>
                <button className="navbar-toggler"
                        data-bs-toggle="collapse"
                        data-bs-target="#gfgnavbar">
                    <span className="navbar-toggler-icon">
                    </span>
                </button>
                <div className="collapse navbar-collapse ps-3" 
                     id="gfgnavbar">
                    <h5><Link to='/' className='text-dark nav-item nav-link' style={{textDecoration:'none',marginLeft:'475px'}}>Home</Link></h5>
                    <ul className="navbar-nav" style={{marginLeft:'40%'}}>
                    <Link to="/Login" className='btn text-white btn-dark nav-item nav-link'>Login</Link>
                     <Link to="/Register" className='btn text-white btn-dark ms-3 nav-item nav-link'>Register</Link>
                    </ul>
                </div>
            </div>
        </nav>
  </div>
  )
}

export default Navbar

  // <div className="navbar navbar-expand-lg bg-light navbar-light shadow d-flex justify-content-between fixed-top p-3">
    //     <h3 className="navbar-text text-dark ms-3">COLORIFY</h3>
    //     <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#collapse'><span className='navbar-toggler-icon'></span></button>

    //     <div className="collapse" id='collapse'>
    //     <h5><Link to='/' className='text-dark nav-item nav-link' style={{textDecoration:'none'}}>Home</Link></h5>
    //     <div className="auth me-3">
    //       <Link to="/Login" className='btn btn-dark nav-item nav-link'>Login</Link>
    //       <Link to="/Register" className='btn btn-dark ms-3 nav-item nav-link'>Register</Link>
    //     </div>       
        
    //     </div>
    // </div> */