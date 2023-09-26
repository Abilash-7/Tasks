import React from 'react'

const Login = () => {
  return (
    <div className="container text-center">
        <div className="head">
          <h1 className='pt-5'>Login</h1>
        </div>
        <div className="input m-5 ">
          <input type="email" className='form-control mb-3' placeholder='Enter Your Email'/>
          <input type="password" className='form-control mb-3' placeholder='Enter Password'/>
          <br />
        <button className='btn-dark m-4 p-2 rounded'>Submit</button>
        </div>
      </div>
  )
}

export default Login