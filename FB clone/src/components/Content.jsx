import React from 'react'
import Menuleft from './Menuleft'
import Main from './Main'
import Menuright from './Menuright'



const Content = () => {

  
  
  return (
    <div className="d-flex pt-4 mt-5">        
      <div className="col-3 bg-light">
        <Menuleft />
      </div>
      <div className="col-6">
        <Main/>
      </div>
      <div className="col-3 bg-light">
        <Menuright/>
      </div>
    </div>
  )
}

export default Content