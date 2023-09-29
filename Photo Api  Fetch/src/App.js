import Home from './component/Home';
import Navbar from './component/Navbar';
import Register from './component/Register';
import Login from './component/Login';
import { Route,Routes } from "react-router-dom";
import './component/style.css'
import Colors from './component/Colors';
function App() {
  
  
  return (
    <div className="app">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/Colors" element={<Colors/>} />
    </Routes>
  </div>
  )
}

export default App;
