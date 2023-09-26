import React from 'react'
import pic from '../user.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="box bg-dark mx-auto p-5 rounded mt-5 w-100 d-flex flex-column " style={{width:'40rem'}}>
        <img src={pic} alt="user" className='rounded-pill' style={{margin:'auto'}} />
        <div className="content text-center">
        <h1 className='text-white my-5'>User Data Managament</h1>
        <button className='btn-primary rounded px-3 py-1'><Link to="/User" className='text-white' style={{textDecoration:"none"}}>Show Details</Link></button>
        </div>
        
      </div>
    </div>
  )
}

export default Home