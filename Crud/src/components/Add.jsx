import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

const Add = (props) => {

const initialState = {id:null,name:'',age:'',degree:'',course:''}

const [user,setUser] = useState(initialState);

const handleInputChange = (e) => 
{
 const {name,value} = e.target
 setUser({...user,[name]:value})
}

  return (
    <div className="add d-flex flex-column justify-content-center align-items-center vh-100">
        <div className="bg-light p-4 shadow rounded p-5">
            <h1 className='text-center'>Fill The Students Details</h1>
            <p className='text-center'>Student Details</p>
            <form onSubmit={ event => {
                 event.preventDefault();
                 console.log(user);
                 if(!user.name || !user.age || !user.degree || !user.course) return
                 props.addUser(user);
                 alert("Added SuccessFully !!!")
                 setUser(initialState);
            }

            }>
                <div className="mb-2">
                    <label className="form-label">Name :</label>
                    <input type="text" name="name" value={user.name} onChange={handleInputChange} className="form-control" />
                </div>
                <div className="mb-2">
                    <label className="form-label">Age :</label>
                    <input type="number" name="age" value={user.age} onChange={handleInputChange} className="form-control" />
                </div>
                <div className="mb-2">
                    <label className="form-label">Dept :</label>
                    <input type="text" name="degree" value={user.degree} onChange={handleInputChange} className="form-control" />
                </div>
                <div className="mb-2">
                    <label className="form-label">Course :</label>
                    <input type="text" name="course" value={user.course} onChange={handleInputChange} className="form-control" />
                </div>
                <button className="btn btn-success" type='submit'>Submit</button>
                {/* <Link to='/' className='btn btn-primary'>Back</Link> */}
            </form>
        </div>
        </div>
  )
}

export default Add