import React from 'react'
import Header from './Header'
import Content from './Content'
import { Route, Routes } from 'react-router-dom'
import Friends  from './Friends'
import Groups from './Groups'
import Post from './Post'

const Dashboard = ({setUser,User}) => {
  return (
    <>
    <Header setUser={setUser} User={User}/>
    <Routes>
      <Route path='/' element={<Content User={User}/>}/>
      <Route path='/Friends' element={<Friends/>}/>
      <Route path='/Groups' element={<Groups/>}/>
      <Route path='/Post' element={<Post/>}/>
    </Routes>
    
    </>
  )
}

export default Dashboard