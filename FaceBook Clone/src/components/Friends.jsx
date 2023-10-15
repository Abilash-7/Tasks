import React from 'react'
import {MdSettings} from 'react-icons/md'
import {BsFillPeopleFill} from 'react-icons/bs'
import user from '../assets/user.png'

const Friends = () => {
  return (
    <>
    <div className="mt-5">
      <div className='d-flex'> 
        <div className="col-3 bg-light vh-100">
          <div className='d-flex justify-content-between px-3 py-4'>
            <h3 style={{fontWeight:'700'}}>Friends</h3>
            <div className='rounded-5 grey fs-3 px-2'>
              <MdSettings className='mb-1'/>
            </div>
          </div>
          <div className='content'>
            <div className='d-flex px-3 hover m-2 p-2 rounded'>
              <div className="rounded-5 fs-3 px-2 bg-primary">
                <BsFillPeopleFill className='mb-2 text-white'/>
              </div>
              <p className='fs-5 my-1 ms-3'><strong>Home</strong></p>    
            </div>
             <div className='d-flex px-3 hover m-2 p-2 rounded'>
              <div className="rounded-5 fs-3 px-2 grey">
                <BsFillPeopleFill className='mb-2'/>
              </div>
              <p className='fs-5 my-1 ms-3'><strong>Friend requests</strong></p>  
              <i className="fas fa-chevron-right m-auto py-3 "></i>   
            </div>
            <div className='d-flex px-3 hover m-2 p-2 rounded'>
              <div className="rounded-5 fs-3 px-2 grey">
                <BsFillPeopleFill className='mb-2 '/>
              </div>
              <p className='fs-5 my-1 ms-3'><strong>Suggestions</strong></p>   
              <i className="fas fa-chevron-right m-auto py-3 "></i> 
            </div>
            <div className='d-flex px-3 hover m-2 p-2 rounded'>
              <div className="rounded-5 fs-3 px-2 grey">
                <BsFillPeopleFill className='mb-2 '/>
              </div>
              <p className='fs-5 my-1 ms-3'><strong>All Friends</strong></p> 
              <i className="fas fa-chevron-right m-auto py-3 "></i>    
            </div>
            <div className='d-flex px-3 hover m-2 p-2 rounded'>
              <div className="rounded-5 fs-3 px-2 grey">
                <BsFillPeopleFill className='mb-2'/>
              </div>
              <p className='fs-5 my-1 ms-3'><strong>Birthdays</strong></p>    
            </div>
             <div className='d-flex px-3 hover m-2 p-2 rounded'>
              <div className="rounded-5 fs-3 px-2 grey">
                <BsFillPeopleFill className='mb-2'/>
              </div>
              <p className='fs-5 my-1 ms-3'><strong>Custom lists</strong></p>
              <div className="fas fa-chevron-right m-auto py-3 "></div> 
            </div>
          </div>
        </div>

        <div className="col-9 d-flex align-items-center justify-content-center vh-100">
          <div className=''>
            <div className='d-flex justify-content-center'>
              <img src={user} width={200} alt="friends" />
            </div>
            <strong>When you have friend requests or suggestions, you'll see them here.</strong>
          </div>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Friends