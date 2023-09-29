import React from 'react'

const Login = () => {
  return (
    <div className="conatainer d-flex justify-content-center">
      <div className="box bg-dark text-center text-white"  style={{width:'20rem',height:'25rem',marginTop:'5rem'}}>
        <h3 className="title mt-2 p-5">Login</h3>
        <div className="input p-3 m-2">
          <input type="text" placeholder='Enter Username' className='form-control mb-3'/>
          <input type="password" placeholder='Enter Password' className='form-control mb-3'/>
        </div>
        <button className='btn btn-success'>Submit</button>
        </div>
    </div>
  )
}

export default Login