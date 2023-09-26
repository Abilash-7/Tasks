import axios from 'axios';
import React, { useEffect, useState } from 'react'
import pic from '../user.jpg'

const User = () => {

    const [user,setUser] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setUser(res.data))
    },[])

  return (
   <div className='User'>
    {user.map(u => 
           <div className="card bg-dark my-5 p-3  text-white w-100 shadow" >
            <div className="row">
                <div className="col-4 text-center " style={{margin:'auto'}}> 
                    <p>ID : {u.id}</p>
                    <img src={pic} alt="user" className='img-fluid rounded' />
                </div>

                <div className="col-8">
                    <div className="card-header shadow text-center">
                        <h4>{u.name}</h4>
                    </div>
                    <div className="card-body text-left">
                        <p>Username : {u.username}</p>
                        <p>Email : {u.email}</p>
                        <p>Address : {u.address.suite}, {u.address.street}, {u.address.city}, {u.address.zipcode}</p>
                    </div>
                </div>
            </div>
           </div>
    )}
   </div>
  )
}

export default User