import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Login = () => {

    // const [popup,showPopup] = useState("hide");
    // const popupStyle = () => {
    //     showPopup("loginPopup");
    //     setTimeout(() => showPopup('hide'),1000 )
    // }
    const navigate = useNavigate();
    const [user,setUser] = useState("");
    const [pwd,setPwd] = useState("");
    
    const handleSubmit = () =>{
        if(user === "" ||  pwd === "" )
        {
            alert("Please Enter Your Details !!! ")
        }
        else{
            navigate("/Home")
        }
    }
  return (
    <div className="page">
        <div className="cover p-5">
            <input type="email" value={user} onChange={(e) => setUser(e.target.value)}  placeholder='Enter Email Address' required className='form-control text-center mb-5'/>
            <input type="password"  value={pwd} onChange={(e) => setPwd(e.target.value)} required placeholder='Enter password'className='form-control mb-5 text-center' />
            <button className='btn btn-light' onClick= {() => handleSubmit()}>Login</button>  
              {/* {popupStyle} */}
        </div>
        {/* <div className={popup}>
            <div className='bg-light text-center popmsg'>
            <h1>Login Failed !!!</h1>
            <p>username & password is incorrect</p>
            </div>
        </div> */}
    </div>
  )
}

export default Login