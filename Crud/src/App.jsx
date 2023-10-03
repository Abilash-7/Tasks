
import Read from "./components/Read"
import Add from "./components/Add"
import { useState } from "react";
import Edit from "./components/Edit";
import './assets/style.css'
import Home from "./components/Home";
import About from "./components/About";


function App() {

  const userData = [
    {id:1,name:"Abilash",age:21,degree:'B.E',course:'cs'}
]

const [users,setUsers] = useState(userData);

const addUser = (user) => {
    user.id = users.length+1;
    setUsers([...users,user])  
}

const deleteUser = (id) => {
  setUsers(users.filter((user) => user.id !== id))
}

const [editing,setEditing] = useState(false)
const initialState = {id:null,name:'',age:''}
const [currentUser,setCurrentUser] = useState(initialState)

const edit = (user) => {
  setEditing(true);
  setCurrentUser({id:user.id,name:user.name,age:user.age,degree:user.degree,course:user.course})
}

const updateUser = (id,updateUser) => {
  setEditing(false);
  setUsers(users.map(user => user.id === id ? updateUser : user))
}
  return (
     <>
     <div className="navbar bg-light navbar-light d-flex justify-content-between shadow fixed-top">
     <i className="fas fa-university ms-5" style={{fontSize:'3rem'}}></i>
     <div className="nav" style={{fontSize:'1.2rem'}}>
     <ul className="nav-items flex-row d-flex me-5">
        <li className="nav-link text-dark">Home</li>
        <li className="nav-link text-dark">About</li>
        <li className="nav-link text-dark">Admission</li>
        <li className="nav-link text-dark">Login</li>
      </ul>
     </div>  
     </div>
    
     <div className="d-flex flex-column">
          <Home/>
          <About/>
          <div className="Admission">
            {editing ? 
            ( <Edit 
             updateUser={updateUser}
             currentUser={currentUser}
             setEditing={setEditing}
             />)
             :
            ( <Add 
             addUser={addUser}
             /> )
             }
          </div>
            <Read
            users={users}
            deleteUser={deleteUser}
            edit={edit}
            />
            <div className="footer bg-dark text-center text-white p-3">
              copyrights@ University of CH 2023
            </div>
     </div>
     </>
   
  )
}

export default App
