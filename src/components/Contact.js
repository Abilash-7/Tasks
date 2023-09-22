import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
      <div className="container text-center">
        <div className="head">
          <h1 className='pt-5'> CONTACT US</h1>
        </div>
        <div className="input m-5 ">
          <input type="text" className='form-control mb-3' placeholder='Name'/>
          <input type="email" className='form-control mb-3' placeholder='Email'/>
          <input type="text" className='form-control mb-3' placeholder='Subject'/>
          <input type="textarea" className='form-control  ' placeholder='Message'/>
          
          <br />
        <button className='btn-primary m-2 p-2 mb-5 '>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Contact