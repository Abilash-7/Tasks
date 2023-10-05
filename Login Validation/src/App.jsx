import { Route, Routes, useNavigate } from "react-router-dom"
import Login from "./Authentication/Login"
import Register from "./Authentication/Register"
import Home from "./Components/Home"
import { ToastContainer,toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'



function App() {
 
  return (
    <div className="app">
      <ToastContainer position="top-right" autoClose={1000} limit={4} theme="dark"/>
    <Routes>
      <Route path="/" element={<Login />}/> 
      <Route path="/register" element={<Register/>}/> 
      <Route path="/home" element={<Home/>}/> 
    </Routes>
    </div>
  )
}

export default App
