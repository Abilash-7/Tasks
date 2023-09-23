import React from 'react'
import '../Assets/Style.css'
import {FaPlane} from 'react-icons/fa'

const Home = () => {
  return (
    <div className='home'>
        <div className="content">
            <div className="head">
                <h1>Travel & Explore</h1>
                <h1>the World</h1>
            </div>
            <button className='btn'>Book My Tour <FaPlane style={{marginLeft:'10px'}} /></button>
        </div>
    </div>
  )
}

export default Home