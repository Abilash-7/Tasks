import { useState } from "react";
import Add from "./Add";


const Read = (props) => {

    
  return (


    <div className='flex-column d-flex justify-content-center align-items-center vh-100'>
       <h1 className='mb-5'>List of Students</h1>
        <div className="w-75 bg-light rounded border shadow p-4">
            <table className='table table-stribed'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Department</th>
                        <th>Course</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {props.users.length ?
                (props.users.map(u => (
                    <tr key={u.id}>
                        <td>{u.id}</td>
                        <td>{u.name}</td>
                        <td>{u.age}</td>
                        <td>{u.degree}</td>
                        <td>{u.course}</td>
                        <td>
                            <button onClick={()=> props.edit(u)} className="btn btn-success">Edit</button>
                            <button onClick={()=> props.deleteUser(u.id)} className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                ))) : (<p>No date</p>)}
                
                </tbody>
            </table>
        </div>
       </div>
        
   
  )
}

export default Read