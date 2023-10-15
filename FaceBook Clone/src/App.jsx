import { useEffect, useState } from "react";
import Login from "./Authentication/Login";
import './app.css'
import Dashboard from './components/Dashboard'
import { ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [User,setUser] = useState('')

  return (
  <>
  <ToastContainer position="top-right" autoClose={1000} limit={1} theme="dark"/>
  {
    User ? 
    <Dashboard setUser={setUser} User={User}/>
    : 
    <Login setUser={setUser}/>
  }
  </>
  
  );
}

export default App;
