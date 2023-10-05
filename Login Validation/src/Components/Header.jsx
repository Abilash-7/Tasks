import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <>
     <div className="sale p-2 text-center">
            <p><span className='bg-dark rounded text-white px-3 py-1 me-3'>Black Week</span>Get 20% with BLACK20</p>
            <div className="navbar d-flex justify-content-between navbar-lg expand bg-light navbar-light w-100 shadow">
                <button className='navbar-toggler ms-3' type='button' data-bs-toggle="offcanvas" data-bs-target="#offcanvas"> <span className='navbar-toggler-icon text-dark'></span></button>
                <h1 className='navbar-text text-dark'><strong>SIGMEN.</strong></h1>
                <div className="shop me-4" style={{fontSize:'1.2rem'}}>
                <i className="fa-solid fa-star" data-bs-toggle="tooltip" data-bs-placement="top" title="Watch Lists"></i>
                <i className="fa-solid fa-cart-shopping ms-4" data-bs-placement="top" title="Add cart"></i>
                <Link to='/' className="fa-solid fa-right-from-bracket text-black ms-4" data-bs-placement="top" title="Log out"></Link>
                </div>
            </div>
           <div className="offcanvas offcanvas-start" id='offcanvas'>
            hello
           </div>


        </div>
    </>
  )
}

export default Header