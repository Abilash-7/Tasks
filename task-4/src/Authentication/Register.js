import React from 'react'
import { useState } from 'react';


const Register = () => {
  const [popup,showPopup] = useState("hide");
  const popupStyle = () => {
      showPopup("loginPopup");
      setTimeout(() => showPopup('hide'),1000 )
  }

  return (
    <div className="page">
        <div className="cover p-5">
          <input type="text" placeholder='Enter Your Name' className='form-control text-center mb-3'/>
            <input type="email" placeholder='Enter Email Address' className='form-control text-center mb-3'/>
            <input type="password" placeholder='Set password'className='form-control mb-5 text-center' />
            <button className='btn btn-light' onClick={popupStyle}>Register</button>
        </div>
        <div className={popup}>
            <div className='bg-light text-center popmsg'>
            <h1>Register Successfully !!!</h1>
            </div>
        </div>
    </div>
    )
}

export default Register