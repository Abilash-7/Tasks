import React, { useEffect, useState } from 'react'
import Register from './Register'
import Login from './Login'


const Auth = () => {

    const [toggle,setToggle] = useState(false)

    useEffect(() => {
        console.log(toggle);
    },[toggle])

  return (
    <div className="log-main bg-dark mx-auto mt-5 shadow">
        <div className="log-head d-flex justify-content-center">
            <h1 className='text-white mt-5 mb-5'>SIGMEN</h1>
        </div>
        <div className="auth-body">
            <div className="auth-btn  justify-content-around d-flex">
                <p className="tog text-center text-white" onClick={() => setToggle(false)}>Login</p>
                <p className="tog text-center  text-white" onClick={() => setToggle(true)}>Register</p>
            </div>
            <div className="auth-main">
                {toggle ? <Register/> : <Login/>}  
            </div>
        </div>
    </div>
  )
}

export default Auth