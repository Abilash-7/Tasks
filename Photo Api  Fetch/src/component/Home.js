import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {


  return (

    <div className='home'>
        <div className="home_box">
          <h1 className='title'>Color Library</h1>
        </div>
        <Link to="/Colors" className='pick btn btn-dark'>Pick Your Color </Link>
    </div>
  )
}

export default Home