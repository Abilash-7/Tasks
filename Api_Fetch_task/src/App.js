import { BrowserRouter,Routes,Route,Link} from "react-router-dom";
import User from "./component/User";
import Login from "./component/Login";
import Register from "./component/Register";
import Home from "./component/Home";
import logo from './logo.png'

function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <div className="navbar bg-dark navbar-dark shadow">
    <Link to="/"><img src={logo} alt="logo" className="logo p-1 ms-5" /></Link>
        <ul className="navbar-nav me-5 flex-row text-white">
          <li className="nav-item me-5"><Link to="/Login" className="nav-link text-white">Login</Link></li>
          <li className="nav-item"><Link to="/Register" className="nav-link text-white">Register</Link></li>
        </ul>

      </div>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/User" element={<User/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
