import React from 'react'
import {FaPlus} from 'react-icons/fa'

const Menuright = () => {
  return (
    <>
        <div className="content_right ">
            <div className="group m-3 px-3 w-100">
                <p className='text-scondary fs-5'>Group conversations</p>
                <div className='d-flex px-2 hover py-2 rounded'>
                    <div className=" curser bg-light add_icon p-2 align-items-center d-flex rounded-5 me-3">
                        <FaPlus className='text-dark'/>
                    </div>
                    <div className="text">
                        <strong>Create new group</strong>
                    </div>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Menuright