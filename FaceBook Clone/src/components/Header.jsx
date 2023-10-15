import React from 'react'
import {BsHouseDoor,BsFillStarFill,BsBookFill,BsSearch,BsThreeDots,BsFillQuestionCircleFill,BsPeople,BsBellFill,BsPersonCircle,BsFacebook,BsPeopleFill,BsFillTagFill} from 'react-icons/bs'
import {HiOutlineUserGroup} from 'react-icons/hi'
import {CgMenuGridR} from 'react-icons/cg'
import {BiSolidMessageRoundedDetail,BiSolidMoviePlay,BiSolidFlag,BiSolidLogIn} from 'react-icons/bi'
import {RiMemoriesLine} from 'react-icons/ri'
import {HiSpeakerphone} from 'react-icons/hi'
import {PiVideoFill} from 'react-icons/pi'
import {SiHomeassistantcommunitystore} from 'react-icons/si'
import {FcFeedback} from 'react-icons/fc'
import {FaEdit} from 'react-icons/fa'
import {MdEventRepeat, MdSignalCellularAlt,MdSettings,MdFeedback} from 'react-icons/md'
import { Link } from 'react-router-dom'
import Post from './Post'

const Header = ({setUser,User}) => {
  return (
    <div className='header p-2 d-flex bg-white shadow justify-content-between fixed-top'>
        <div className="1 d-flex ">
            <div className='ms-3'>
              <BsFacebook className='fs-1' style={{color:'rgb(2,141,255)'}}/>
            </div>
            <div className="search_container d-flex align-items-center px-3 py-1 ms-2">
                <BsSearch/>
                <input type="search" className='ms-2 search_box' placeholder='Search Facebook' />
            </div>
        </div>
        <div className="menu d-flex fs-4 curser">
            <Link to='/'>
              <div className="px-5"  data-bs-toggle="tooltip" data-bs-placement="bottom" title="Home">
                  <BsHouseDoor/>
              </div>
            </Link>
           
            <Link to='/Friends'>
              <div className='px-5' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Friends">
                <BsPeople/>
              </div>
            </Link>
            <Link to='/Groups'>
              <div className='px-5' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Groups">
                <HiOutlineUserGroup/>
              </div>
            </Link>
        </div>

       
        <div className='msg d-flex'>
            <div className='icon_back m-auto p-1 rounded-5 me-2'>
               <Link to="/Friends" className='link'> <strong className='px-2 curser'>Find friends</strong></Link>
            </div>
            <div className='curser icon_back px-2 align-items-center d-flex rounded-5 fs-3 me-2' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Menu">
            <CgMenuGridR data-bs-toggle="dropdown" aria-expanded="false"/>
              <div className="dropdown-menu w-50 shadow bg-light p-2">
              <h3>Menu</h3>
              <div className="d-flex  bg-light">
                <div className='col-8  p-3 my-2 bg-light shadow rounded w-50'>
                  <div className='bg-light' >
                    <input type="search" placeholder='Search menu' className='form-control'/>
                  </div>
                  <div className='bg-light my-3'>
                    <h5>social</h5>
                    <div className="icons bg-light ">
                      <div className='d-flex p-2'>
                            <BsPeopleFill className='fs-4' style={{color:'rgb(2,141,255)'}}/>
                            <p className='m-auto'>Find friends</p>
                      </div>
                      <div className='d-flex p-2'>
                            <BsFacebook className='fs-4' style={{color:'rgb(2,141,255)'}}/>
                            <p className='m-auto'>Welcome</p>
                      </div>
                      <div className='d-flex p-2'>
                            <RiMemoriesLine className='fs-4' style={{color:'rgb(2,141,255)'}}/>
                            <p className='m-auto'>Memories</p>
                      </div>
                      <div className='d-flex p-2'>
                            <BsFillTagFill className='fs-4' style={{color:'rgb(162, 2, 255)'}}/>
                            <p className='m-auto' >Saved</p>
                      </div>
                      <div className='d-flex p-2'>
                            <HiOutlineUserGroup className='fs-4 rounded-5' style={{color:'white',background:'rgb(2, 141, 255)'}}/>
                            <p className='m-auto' >Groups</p>
                      </div>
                      <div className='d-flex p-2'>
                            <PiVideoFill className='fs-4' style={{color:'rgb(2, 141, 255)'}}/>
                            <p className='m-auto' >Video</p>
                      </div>
                      <div className='d-flex p-2'>
                            <SiHomeassistantcommunitystore className='fs-5' style={{color:'rgb(2, 141, 255)'}}/>
                            <p className='m-auto' >Market place</p>
                      </div>
                      <div className='d-flex p-2'>
                            <FcFeedback className='fs-5' style={{color:'rgb(2, 141, 255)'}}/>
                            <p className='m-auto' >Feeds</p>
                      </div>
                      <div className='d-flex p-2'>
                            <MdEventRepeat className='fs-5' style={{color:'rgb(2, 141, 255)'}}/>
                            <p className='m-auto' >Events</p>
                      </div>
                      <div className='d-flex p-2'>
                            <MdSignalCellularAlt className='fs-5' style={{color:'rgb(2, 141, 255)'}}/>
                            <p className='m-auto'>Ads manager</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4 my-2 ms-2 bg-light shadow  w-50 rounded">
                  <h5 className='px-3 pt-4'>Create</h5>
                  <div className="icons bg-light">
                    <div className="px-3 bg-light">
                       <Post User={User}/>
                      <div className='d-flex p-2'>
                        <BsBookFill className='fs-5'/>
                        <p className='my-auto mx-3'>Story</p>
                      </div>
                      <div className='d-flex p-2'>
                        <BiSolidMoviePlay className='fs-5'/>
                        <p className='my-auto mx-3'>Reel</p>
                      </div>
                      <div className='d-flex p-2'>
                        <BsFillStarFill className='fs-5'/>
                        <p className='my-auto mx-3'>Life Event</p>
                      </div>
                    </div>
                    <hr className='m-3'/>
                    <div className="px-3 bg-light">
                       <div className='d-flex p-2'>
                        <BiSolidFlag className='fs-5'/>
                        <p className='my-auto mx-3'>Page</p>
                      </div>
                      <div className='d-flex p-2'>
                        <HiSpeakerphone className='fs-5'/>
                        <p className='my-auto mx-3'>Ad</p>
                      </div>
                      <div className='d-flex p-2'>
                        <HiOutlineUserGroup className='fs-5'/>
                        <p className='my-auto mx-3'>Group</p>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
              </div>
            </div>
            
             
            <div className='curser icon_back px-2 align-items-center d-flex rounded-5 fs-4 me-2' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Messenger">
           
            <BiSolidMessageRoundedDetail id="triggerId" data-bs-toggle="dropdown" aria-expanded="false"/>
            
              <div class="dropdown-menu p-3 bg-light" aria-labelledby="triggerId">
               <div className='d-flex justify-content-between bg-light'>
                <h5>Chats</h5>
                <button className='btn btn-close'></button>
               </div>
               <div className='my-3 bg-light'>
                <input type="search" placeholder='Search Messenger'  className='form-control rounded-5'/>
               </div>
               <hr />
                <div className='text-center m-5 rounded p-3'>
                  <p>No message found</p>
                </div>
              </div>
  
            </div>

            <div className='curser icon_back px-2 align-items-center d-flex rounded-5 fs-4 me-2' data-bs-toggle="tooltip" data-bs-placement="bottom" title="otifications">
            <BsBellFill  id="triggerId" data-bs-toggle="dropdown" aria-expanded="false"/>
            <div class="dropdown-menu p-3 bg-light w-25" aria-labelledby="triggerId">
               <div className='d-flex justify-content-between bg-light'>
                <h5>Notifications</h5>
                <BsThreeDots/>
               </div>
               <div className='bg-light d-flex mx-3'>
                <p className='me-3'>All</p>
                <p>Unread</p>
               </div>
               <hr />
               <div className='bg-light p-3'>
                <p>welcome to facebook</p>
               </div>
               
              </div>
            </div>
            <div className='curser icon_backdark text-white align-items-center d-flex rounded-5 me-2 fs-1' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Accounts">
            <BsPersonCircle id="triggerId" data-bs-toggle="dropdown" aria-expanded="false"/>
                <div class="dropdown-menu p-3 bg-light w-25" aria-labelledby="triggerId">
                    <div className='shadow p-3 bg-light mb-3'>
                      <div className='d-flex bg-light'>
                      <BsPersonCircle className='fs-3 me-3 text-secondary'/>
                        <p>{User}</p>
                      </div>
                      <hr />
                      <p>see all profiles</p>
                    </div>

                    <div className='bg-light'>
                    <div className='d-flex p-2'>
                            <MdSettings className='fs-4'/>
                            <p className='ms-2'>Settings & privacy</p>
                      </div>
                      <div className='d-flex p-2'>
                            <BsFillQuestionCircleFill className='fs-4' />
                            <p className='ms-2'>Help & support</p>
                      </div>
                      <div className='d-flex p-2'>
                            <MdFeedback className='fs-4' />
                            <p className='ms-2'>Give feedback</p>
                      </div>
                      <div className='d-flex p-2' onClick={() => setUser('')}>
                            <BiSolidLogIn className='fs-4'/>
                            <p  className='ms-2'>Logout</p>  
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header