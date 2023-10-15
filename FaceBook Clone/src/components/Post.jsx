import { FaEdit, FaRegSmile } from 'react-icons/fa'
import { Modal } from 'react-bootstrap'
import { useState } from 'react';
import { BsPersonCircle, BsPersonPlusFill } from 'react-icons/bs';
import { RiLiveFill } from 'react-icons/ri';
import { IoMdPhotos } from 'react-icons/io';
import { MdLocationPin } from 'react-icons/md';
import { AiOutlineGif } from 'react-icons/ai';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Post = ({props}) => {
 
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [text,setText] = useState('')
    const nav = useNavigate();
    const post = {text}
    
    const handlePost = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/post",post)
        .then(res => toast.success("Posted Succesfully !!!"))
        .then(resp => {
            handleClose()
            window.location.reload(false);
        })
        .catch(err => console.log(err))
    }

  return (
    <>
  
    <div>
     <div className="d-flex p-2" onClick={handleShow}>
        <FaEdit className='fs-5'/>
        <p className='my-auto mx-3'>Post</p>
    </div>                    
    
    <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title >Create Post</Modal.Title>
  </Modal.Header>
    <Modal.Body>
        <div className="d-flex ">
            <div>
                <BsPersonCircle className='fs-2'/>
            </div>
            <div>
                <p className='px-2 fs-5 '>user</p>
            </div>
        </div>
        <textarea placeholder="What's on your mind, User?" value={text} onChange={(e) => setText(e.target.value)} rows={4} className='mb-3 form-control fs-5 border'></textarea>
        <div className='border d-flex  justify-content-between p-3 rounded'>
            <div>
                <strong>Add to your post</strong>
            </div>
            <div className='d-flex justify-content-around align-items-center fs-5 w-50'>
                <IoMdPhotos className='text-success'/>
                <BsPersonPlusFill className='text-primary'/>
                <FaRegSmile className='text-warning'/>
                <MdLocationPin className='text-danger'/>
                <AiOutlineGif/>
                <RiLiveFill className='text-danger'/>
            </div>
        </div>
        <button onClick={handlePost} className='text-center p-2 form-control btn-primary btn mt-3'><strong>Post</strong></button>
    </Modal.Body>
</Modal>
    </div>
    
    </>
  )
}

export default Post