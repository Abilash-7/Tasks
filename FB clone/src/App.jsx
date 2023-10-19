import { useEffect, useState } from "react";
import Login from "./Authentication/Login";
import './app.css'
import Dashboard from './components/Dashboard'
import { ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { Route, Routes } from "react-router-dom";
import Friends from "./components/Friends";
import Groups from "./components/Groups";


function App() {

  return (
  <>
  <ToastContainer position="top-right" autoClose={1000} limit={1} theme="dark"/>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/Friends" element={<Friends/>}/>
      <Route path="/Groups" element={<Groups/>}/>
    </Routes>
  </>
  
  );
}

export default App;
