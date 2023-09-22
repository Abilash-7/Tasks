import React from 'react'
import rating from '../Assets/rating.png'

const Review = () => {
  return (
    <div className="review">
      <div className="content p-5 ">
        <h1 className='text-white mt-5 p-4'>People Reviews</h1>
        <h5 className='text-white'><img src={rating} alt="rate" className='ms-3' /> 455</h5>
      </div>
    </div>
  )
}

export default Review