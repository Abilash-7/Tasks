import React from 'react'
import {BsPeopleFill,BsPersonCircle,BsFacebook,BsFillTagFill} from 'react-icons/bs'
import {RiMemoriesLine} from 'react-icons/ri'
import {HiOutlineUserGroup} from 'react-icons/hi'
import {PiVideoFill} from 'react-icons/pi'
import {SiHomeassistantcommunitystore} from 'react-icons/si'
import {FcFeedback} from 'react-icons/fc'
import {MdEventRepeat, MdSignalCellularAlt} from 'react-icons/md'

const Menuleft = () => {
    
  const User = localStorage.getItem('user')
  return (
    <div className="content_left w-25">
        <div className="d-flex ">
            <BsPersonCircle className='fs-2'/>
            <p className='m-3 '>{User}</p>
        </div>
        <div className='d-flex'>
            <BsPeopleFill className='fs-4' style={{color:'rgb(2,141,255)'}}/>
            <p className='m-3'>Find friends</p>
        </div>
        <div className='d-flex'>
            <BsFacebook className='fs-4' style={{color:'rgb(2,141,255)'}}/>
            <p className='m-3'>Welcome</p>
        </div>
        <div className='d-flex'>
            <RiMemoriesLine className='fs-4' style={{color:'rgb(2,141,255)'}}/>
            <p className='m-3'>Memories</p>
        </div>
        <div className='d-flex'>
            <BsFillTagFill className='fs-4' style={{color:'rgb(162, 2, 255)'}}/>
            <p className='m-3' >Saved</p>
        </div>
        <div className='d-flex'>
            <HiOutlineUserGroup className='fs-4 rounded-5' style={{color:'white',background:'rgb(2, 141, 255)'}}/>
            <p className='m-3' >Groups</p>
        </div>
         <div className='d-flex'>
            <PiVideoFill className='fs-4' style={{color:'rgb(2, 141, 255)'}}/>
            <p className='m-3' >Video</p>
        </div>
        <div className='d-flex'>
            <SiHomeassistantcommunitystore className='fs-5' style={{color:'rgb(2, 141, 255)'}}/>
            <p className='m-3' >Market place</p>
        </div>
        <div className='d-flex'>
            <FcFeedback className='fs-5' style={{color:'rgb(2, 141, 255)'}}/>
            <p className='m-3' >Feeds</p>
        </div>
        <div className='d-flex'>
            <MdEventRepeat className='fs-5' style={{color:'rgb(2, 141, 255)'}}/>
            <p className='m-3' >Events</p>
        </div>
        <div className='d-flex'>
            <MdSignalCellularAlt className='fs-5' style={{color:'rgb(2, 141, 255)'}}/>
            <p className='m-3'>Ads manager</p>
        </div>
        
    </div>
  )
}
export default Menuleft