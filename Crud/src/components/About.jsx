import React from 'react'

const About = () => {
  return (
    <div className='m-5 p-5'>
        <h1 className='text-center mt-5'>Campus Information</h1>
        <div className="row d-flex justify-content-center mt-5" style={{fontSize:'1.5rem'}}>
            <div className="col-5 " style={{paddingLeft:"200px"}}>
                <li>Graduate Programs</li>
                <li>Doctoral Degree</li>
                <li> Undergraduate</li>
                <li>Programs</li>
            </div>
            <div className="col-5 "style={{paddingLeft:"150px"}}>
                <li>Alumni & Giving</li>
                <li>Internationls Hubs</li>
                <li>Glopal Students</li>
                <li>Industry Visit</li>
            </div>
        </div>
    </div>
  )
}

export default About