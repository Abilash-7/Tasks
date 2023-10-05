import React from 'react'
import Header from './Header'
import home from '../assets/images/home.jpg'

const Home = () => {
  return (
    <>
    <Header/>
    <img src={home} alt="home" className='w-100 img-fluid' style={{padding:'1rem 6rem'}} />
    </>
  )
}

export default Home