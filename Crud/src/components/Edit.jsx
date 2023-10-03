import React, { useEffect, useState } from 'react'

const Edit = (props) => {

    const [user,setUser]=useState(props.currentUser)

    const handleInputChange = (e) => 
{
 const {name,value} = e.target
 setUser({...user,[name]:value})
}
useEffect(() => {
    setUser(props.currentUser)
},[props])
  return (
    <div className="add d-flex flex-column justify-content-center align-items-center  vh-100">
    <div className="bg-light p-4 shadow rounded ">
        <h1 className='text-center'>Update details</h1>
        <form onSubmit={ e => {
            e.preventDefault();
            if(!user.name || !user.age) return;
            props.updateUser(user.id,user)
            alert("Updated SuccessFully !!!")
        }}>
            <div className="mb-2">
                <label className="form-label">Name :</label>
                <input type="text" name="name" value={user.name} onChange={handleInputChange} className="form-control" />
            </div>
            <div className="mb-2">
                <label className="form-label">Age :</label>
                <input type="text" name="age" value={user.age} onChange={handleInputChange} className="form-control" />
            </div>
            <div className="mb-2">
                    <label className="form-label">Dept :</label>
                    <input type="text" name="degree" value={user.degree} onChange={handleInputChange} className="form-control" />
                </div>
                <div className="mb-2">
                    <label className="form-label">Course :</label>
                    <input type="text" name="course" value={user.course} onChange={handleInputChange} className="form-control" />
                </div>
            <button className="btn btn-success" type='submit'>Update</button>
            <button className="btn btn-success" onClick={() => {props.setEditing(false)}}>Cancel</button>
            {/* <Link to='/' className='btn btn-primary'>Back</Link> */}
        </form>
    </div>
    </div>
  )
}

export default Edit