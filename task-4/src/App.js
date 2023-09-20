import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Auth from './Authentication/Auth.js'

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Auth/>}/>
        <Route  path="/Home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
