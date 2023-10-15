import { useState } from 'react'
import './auth.css'
import { toast } from 'react-toastify';
import axios from 'axios';
import { Modal } from 'react-bootstrap';

const Login = ({setUser}) => {
    const [firstname,setFirstname] = useState('');
    const [surname,setSurname] = useState('');
    const [email,setEamil] = useState('');
    const [password,SetPassword] = useState('');
    
    const user ={firstname,surname,email,password}

    const handleRegister = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/users",user)
        .then(res => toast.success("Register SuccessFully"))
        .catch(err => console.log(err))
    }
       
    const [logEmail,setLogEmail] = useState('');
    const [logPassword,setLogPassword] = useState('');
    const [userin,setUserin] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get("http://localhost:3000/users")
            .then(res => {
                    res.data.map(user => {
                        if(user.email === logEmail && user.password === logPassword)
                        {
                            setUserin(true)
                            login()
                        }
                        }
                        )
               
            })
            .catch(err => console.log(err))
       
    }
    const login = () => {
        if(userin)
        {
            toast.success('Login Successfully !!!')
            setUser(logEmail)
        }
        else{
            toast.warning('User not valid')
        }
    }
   
    
    return (
  <>
  <div className="row login d-flex align-items-center justify-content-center p-5 ">
    <div className="col-lg-5 col-md-8 col-sm-10 col-xs-11 logo">
        <h1 className='text-primary'>facebook</h1>
        <p>Facebook helps you connect and share with the people in your life.</p>
    </div>
    <div className="log col-lg-5 col-md-8 col-sm-10 col-xs-12">
        <div className="box bg-light shadow rounded m-auto p-3">
            <form onSubmit={handleSubmit}>
                <input type="text" required autoFocus value={logEmail} onChange={(e) => setLogEmail(e.target.value)}  placeholder='Email address' className='mb-3 w-100 form-control-lg' />
                <input type="password" required value={logPassword} onChange={(e) => setLogPassword(e.target.value)}  placeholder='password' className='form-control-lg w-100 mb-3 ' />
                <button className='log_btn btn btn-primary form-control mb-3' type='submit'>Log in</button>
            </form>
            <p href='#' className='text-center'>forgetten password ?</p>
            <hr />
            <button className='new_btn btn px-3 py-2'  data-bs-toggle="modal" data-bs-target="#modalId">Create new account</button>
        </div>
        <p className='text-center mt-3'><strong data-bs-toggle="modal" data-bs-target="#modalId">Create a Page</strong> for a celebrity, brand or business.</p>
    </div>

    <div class="modal shadow" id="modalId">
        <div class="modal-dialog modal-dialog-centered modal-md">
            <div class="modal-content ">
                <div class="modal-header">
                    <div>
                    <h2 class="modal-title" id="modalTitleId">Sign Up</h2>
                    <p>It's quick and easy</p>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <form onSubmit={handleRegister}>
                    <div className="person">
                    <div className='d-flex'>
                        <input type="text" placeholder='First name' value={firstname} onChange={(e)=> setFirstname(e.target.value)} className=' me-3 mb-3 form-control w-50' required/>
                        <input type="text" placeholder='Surname' value={surname} onChange={(e)=> setSurname(e.target.value)}  className='mb-3 form-control w-50' required/>
                    </div>
                    <input type="text" placeholder='Email address or phone number' value={email} onChange={(e) => setEamil(e.target.value)} required className='mb-3 form-control w-100' />
                    <input type="password" placeholder='New password' value={password} onChange={(e) => SetPassword(e.target.value)}  required className='mb-2 form-control w-100' />
                    
                    </div>
                    date of birth
                    <div className="form-control">
                        <input type="date" className='w-100' />
                    </div>
                    Gender
                    <div className="gender d-flex justify-content-between mb-2" >
                        <div className='form-control d-flex justify-content-between me-2'>
                        Male
                            <input type="radio" className='form-check-input' value="Male" name='gender' /> 
                        </div>
                        <div className='form-control d-flex justify-content-between me-2'>
                        Female
                            <input type="radio" className='form-check-input' value="Female" name='gender' /> 
                        </div>
                        <div className='form-control d-flex justify-content-between '>
                        Other
                            <input type="radio" className='form-check-input' value="other" name='gender' /> 
                        </div>
                    </div>
                    <small>People who use our service may have uploaded your contact information to Facebook</small><br />
                    <small>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</small>
                    <br />
                    <button className='sign_btn btn btn-sm mt-3 text-white' type='submit'>Sign Up</button>
                </form> 
                </div>
            </div>
        </div>
    </div>
    
  </div>
  </>
  )
}

export default Login