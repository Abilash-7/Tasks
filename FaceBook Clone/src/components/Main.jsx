import React, { useEffect, useState } from 'react'
import {FaPlus,FaComment,FaRegComment,FaShare,FaRegSmile} from 'react-icons/fa'
import {BsPersonCircle} from 'react-icons/bs'
import {RiLiveFill} from 'react-icons/ri'
import {IoMdPhotos} from 'react-icons/io'
import {PiShareFatLight} from 'react-icons/pi'
import {AiFillLike,AiFillHeart,AiOutlineLike} from 'react-icons/ai'
import story from './story'
import Post from './Post'
import RandomPost from './RandomPost'
import axios from 'axios'

const Main = ({User}) => {
  const [stories,setStories] = useState(story);
  const [posts,setPosts] = useState(RandomPost);

  const [textPost,setTextPost] = useState([])

  

  useEffect (() => {
    axios.get("http://localhost:3000/post")
    .then(res => setTextPost(res.data))
    .catch(err => alert(err))
  },[])

  return (
    <>
    <div className="main w-100 px-5">
          <div className="story my-1">
            {stories.map(s => {
              return(
                <div className="story_card shadow mx-2 rounded-3 my-2">
                  <img src={s.img} alt="" />
                  <p className='story_profile p-2 text-white'>{s.profile}</p>
                  <h5 className='p-2 text-white' style={{marginTop:'10rem'}}>{s.title}</h5>
                </div>
              )
            })}
          </div>
          
          <div className="new_story d-flex  bg-white rounded px-5 shadow py-2">  
            <div className=" curser add_icon p-3 align-items-center d-flex rounded-5 me-3">
              <FaPlus style={{color:'rgb(2,141,255)'}}/>
            </div>
            <div className="text">
                <strong>Create Story</strong>
                <br />
                <small>Share a photo or write something.</small>
            </div>
          </div>

          <div className="content mx-5 mt-3">
            {/* new post */}
            <div className="new_post bg-white  rounded mb-3 shadow ">
                <div onClick={() => Post(true)} className="text_post d-flex px-3 py-2 align-items-center">
                  <div style={{background:'rgb(234, 234, 234)'}} className='rounded-5 me-2'>
                    <BsPersonCircle className='text-white ' fontSize={50}/>
                  </div>
                  <div className='text_input w-100'>
                    <input type="text" placeholder="What's on yout mind, Abi?" className='p-2 form-control' />
                  </div>
                </div>
                <hr className='mx-4'/>
                <div className="file_post d-flex justify-content-evenly">
                  <div className='curser rounded w-100 text-center m-1'>
                    <p className='my-2'><RiLiveFill style={{color:'red'}} className='fs-2 me-2'/>Live video</p>
                  </div>
                  <div className='curser w-100 text-center rounded m-1'>
                    <p className='my-2'><IoMdPhotos style={{color:'green'}} className='fs-2 me-2'/>Photo/video</p>
                  </div>
                  <div className='curser w-100 text-center rounded m-1'>
                    <p className='my-2'><FaRegSmile style={{color:'yellow'}} className='fs-3 me-2'/>Feeling/activity</p>
                  </div>
                </div>
            </div>
            
            <div>
              {textPost.map((t) => (
                <div className='bg-white mb-2'>
                  <div className='profile d-flex justify-content-between m-3'>
                    <div className="d-felx">
                      <div className='rounded-5  px-3 py-2'>
                         <BsPersonCircle className='text-secondary' fontSize={30}/>
                        <strong className='my-2 ms-2'>{User}</strong>
                        <small className='ms-2'>posted</small>
                      </div>
                    </div>
                    <button className='btn-close my-2 btn'></button>
                  </div>
                  <div className='rounded mx-3 px-3  border'>
                    <p className='fs-5'>{t.text}</p>
                  </div>
                    <div className="button d-flex curser text-center m-1">
                      <div className='w-100 p-2 rounded hover'>
                        <AiOutlineLike className='fs-4'/>
                      </div>
                      <div className='w-100 p-2 rounded hover'>
                        <FaRegComment className='fs-5 '/>
                      </div>
                      <div className='w-100 p-2 rounded hover'>
                        <PiShareFatLight className='fs-4'/>
                      </div>
                    </div>
                </div>
              ))}
            </div>
           
            

            {/* posts */}
            {
              posts.map(p => {
                return(
                  <div className='posts card mb-3 rounded shadow'>
                  
                  <div className='profile d-flex justify-content-between m-3'>
                    <div className="d-felx">
                      <div className='rounded-5  px-3 py-2'>
                        {p.profile}
                        <strong className='my-2 ms-2'>{p.profile_title}</strong>
                      </div>
                    </div>
                    <button className='btn-close my-2 btn'></button>
                  </div>
                  
                  <div className="caption ms-3">
                    <p className="post-title p-3">{p.caption}</p>
                  </div>
                  <img src={p.img} alt="random post" className='image-fluid w-100' />
                  
                  <div className="footer">
                    <div className="icons px-4 pt-2 d-flex justify-content-between">
                        <div>
                          <AiFillLike className='fs-3 text-white rounded-5 p-1' style={{background:"#028dff"}}/>
                          <AiFillHeart className='fs-3 text-white rounded-5 p-1' style={{background:"red"}}/>
                          <span className='ms-2'>{p.likes}</span>
                        </div>
                        <div className='text-secondary'>
                          <span>{p.comments}<FaComment className='fs-4 me-2'/></span> 
                          <span>{p.share}<FaShare className='fs-4'/></span>
                        </div>
                    </div>
                    <hr className='mx-4'/>
                    <div className="button d-flex curser text-center m-1">
                      <div className='w-100 p-2 rounded'>
                        <AiOutlineLike className='fs-3'/>
                      </div>
                      <div className='w-100 p-2 rounded'>
                        <FaRegComment className='fs-3 '/>
                      </div>
                      <div className='w-100 p-2 rounded'>
                        <PiShareFatLight className='fs-3'/>
                      </div>
                    </div>
                  </div>


                  </div>
                )
              })
            }
            </div> 
            
          </div>
      
    </>
  )
}

export default Main