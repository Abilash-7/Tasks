import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
 

const Login = () => {

    const nav = useNavigate();

    const [id,setId] = useState('')
    const [password,setPassword] = useState('')

    useEffect (() => {
        sessionStorage.clear()
    })

    const handleSubmit = (e) => {
        
        e.preventDefault();
        if(validate())
        {
            fetch("http://localhost:3500/users/"+id)
            .then(res => res.json())
            .then(resp =>
                {
                    if(Object.keys(resp).length === 0)
                    {
                        toast.warning('please enter valid user')
                    }
                    else{
                        if(resp.password === password)
                        {
                            toast.success('success')
                            sessionStorage.setItem('username',id)
                            nav('/home')
                        }
                        else{
                            toast.warning('please enter correct password')
                        }
                    }
                })
            .catch(err => alert('login failed due to '+ err))
        }
        
    }

    const validate = () => {
        let result = true;
        if(id === '' || id === null)
        {
            result =  false;
            toast.warning('Please enter username');
        }
        if(password === '' || password === null)
        {
            result =  false;
            toast.warning('Please enter password');
        }
        return result
    }

  return (
   
    <div className="d-flex flex-column justify-content-center  align-items-center m-5">
        <div className="header mt-5 mb-3">
            <h1>Log In</h1>  
        </div>
        <div class="row justify-content-center mt-1 g-5">
            <div class="ms-5 col-4 shadow p-3">
                <h3 className='mb-4 '>Log In</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Username' value={id} onChange={(e) => setId(e.target.value)} className='form-control mb-3'/>
                    <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} className='form-control mb-5'/>
                    <button className='btn btn-dark form-control mt-2 p-2' type='submit'>SIGN IN</button>
                </form>
            </div>
            <div class="col-6 p-3 ms-5">
                <h3>New Customer</h3>
                <div className="text mt-4">
                    Sign up for early sale access plus trailer tailored new arrivals, trends and promotions.
                </div>
                 <Link to="/register" className='btn btn-dark mt-5 px-5 py-2'>Register</Link>
            </div>
        </div>
    </div>
  )
}

export default Login