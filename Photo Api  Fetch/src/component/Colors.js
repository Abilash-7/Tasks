import React from 'react'
import {useEffect, useState} from 'react'

const Colors = () => {
    const [gallery,setGallery] = useState([]);

    useEffect(() => {
      
      fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
      .then(res => setGallery(res))
      
  
    }, [])
  return (
    <div className="app" style={{backgroundColor:'grey'}}>
     <div className="row g-5 m-3">
      {gallery.map(g => {
          return(
            <div className="col-md-3 col-sm-4 col-xs-12 " key={g.id}>
              <div className="box bg-light p-3 shadow text-center" style={{height:'30rem'}}>
                <h4>{g.id}</h4>
                <img src={g.url} className='img-fluid shadow' alt="color" />
                <p className='p-5'>{g.title}</p>
              </div>
            </div>
            )
        })}
    </div>    
    </div>
  )
}

export default Colors