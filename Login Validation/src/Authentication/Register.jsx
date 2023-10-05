import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Register = () => {

    
const nav = useNavigate();
const [id,setId] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    let regObj = {id,email,password}
    if(validate())
    {   
        fetch("http://localhost:3500/users",{
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(regObj)
        })
        .then(res =>{ 
            toast.success('register successfully.')
            nav('/')
            }
        )
        .catch(err => alert(err))
    }
}

const validate = () => {
    let result = true;
    let errMsg = " please enter the ";
    if(id === '' || id === null)
    {
        result=false;
        toast.warning(errMsg+"username")
    } 
    if(email === '' || email === null)
    {
        result=false;
        toast.warning(errMsg+"email")
    } 
    if(password === '' || password === null)
    {
        result=false;
        toast.warning(errMsg+"password")
    }
    if(!result){
        toast.warning("please enter correct value")
    }
    else
    {
        if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

        }
        else{
            result = false
            toast.warning("please enter the valid email")
        }
    }

    return result
}

  return (
    
    <div className="d-flex flex-column justify-content-center  align-items-center m-5">
        <div className="header">
           <h1 className='mt-5 mb-3'> <strong >Register</strong></h1>
        </div>
        <div className="box shadow">
            <form className='p-5' onSubmit={handleSubmit}>
                <input type="text" placeholder='Username' value={id} onChange={e => setId(e.target.value)} className='form-control mb-3'/>
                <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} className='form-control mb-3'/>
                <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} className='form-control mb-3'/>
                <p><input type="checkbox"  required/> Terms & Conditions</p>
                <p className="text mb-3">
                    Sign up for early sale access plus trailer tailored new arrivals, trends and promotions.
                </p>
                <button className='btn btn-dark form-control mb-3' type='submit'>REGISTER</button>
                <Link to="/" className='btn btn-outline-dark form-control'>LOG IN</Link>
            </form>
            
        </div>
    </div>
  )
}

export default Register