import React from 'react'
import {MdSettings} from 'react-icons/md'
import {BsFillPeopleFill} from 'react-icons/bs'
import {FaIdCard} from 'react-icons/fa'
import {RiCompassDiscoverFill} from 'react-icons/ri'
import gallery from '../assets/gallery.png'

const Groups = () => {
  return (
    <>
   <div className="mt-5">
    <div className="d-flex">
      <div className="col-3 bg-light vh-100">
          <div className='d-flex justify-content-between px-3 py-4'>
            <h3 style={{fontWeight:'700'}}>Groups</h3>
            <div className='rounded-5 grey fs-3 px-2'>
              <MdSettings className='mb-1'/>
            </div>
          </div>
          <div className='d-flex m-3 px-2 rounded-5 grey'>
          <i className="fs-5 py-2 fas fa-search"></i>
            <input type="search" placeholder='Search groups' className='form-control' style={{border:'none',background:'transparent'}} />
          </div>
          <div className='content'>
            <div className='d-flex px-3 hover m-2 p-2 rounded'>
              <div className="rounded-5 fs-3 px-2 bg-primary">
                <FaIdCard className='mb-2 text-white'/>
              </div>
              <p className='fs-5 my-1 ms-3'><strong>Your feed</strong></p>    
            </div>
             <div className='d-flex px-3 hover m-2 p-2 rounded'>
              <div className="rounded-5 fs-3 px-2 grey">
                <RiCompassDiscoverFill className='mb-2'/>
              </div>
              <p className='fs-5 my-1 ms-3'><strong>Discover</strong></p>  
            </div>
            <div className='d-flex px-3 hover m-2 p-2 rounded'>
              <div className="rounded-5 fs-3 px-2 grey">
                <BsFillPeopleFill className='mb-2 '/>
              </div>
              <p className='fs-5 my-1 ms-3'><strong>Your groups</strong></p>
            </div>
            <div className='text-center rounded mx-3' style={{background:'lightblue'}}>  
              <p className='p-1'><span className='fs-4'>+</span> Create New  Group</p>
            </div>
            <hr className='mx-3'/>
            <div className='d-flex justify-content-between align-items-center hover rounded mx-3 p-2'>
              <strong>Groups you've joined</strong>
              <small>See all</small>
            </div>
               
          </div>
        </div>
        <div className="col-9 vh-100 d-flex justify-content-center align-items-center" >
              <div className="bg-light d-flex flex-column align-items-center justify-content-center p-3">
                  <img src={gallery} width={100} alt="groups" className='m-2' />
                  <p className='fs-4'>You've  completely caught up</p>
                  <p>Check again later for more updates</p>
                  <button className='btn btn-primary'>Discover More Groups</button>
              </div>
            </div>
    </div>
   </div>
    </>
  )
}

export default Groups