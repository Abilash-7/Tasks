import React from 'react'

const Reservtion = () => {
  return (
    <div className="reservation">
      <div className="container text-center">
        <div className="head">
          <h1 className='pt-5'>Register</h1>
        </div>
        <div className="input m-5 ">
          <input type="text" className='form-control mb-3' placeholder='Enter Your Name'/>
          <input type="email" className='form-control mb-3' placeholder='Enter Your Email'/>
          <input type="password" className='form-control mb-3' placeholder='Set Password'/>
          <input type="password" className='form-control mb-3' placeholder='Confirm Password'/>
          <input type="checkbox"/> Remember
          <br />
        <button className='btn-dark m-4 p-2 '>Register</button>
        </div>
      </div>
    </div>
  )
}

export default Reservtion