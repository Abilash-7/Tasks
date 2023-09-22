import React from 'react'
import p1 from '../Assets/cart1.jpg'
import p2 from '../Assets/cart2.jpg'
import p3 from '../Assets/cart3.jpg'
import p4 from '../Assets/cart4.jpg'



const Tour = () => {
  return (
    <div className="tour">
      <div className="content  p-5">
        <div className="title">
          <h1 className='text-center text-white p-3'>Top Destination</h1>
        </div>
        <div className="place">
          <div className="row">
            <div className="col-5 m-3 ">
              <img src={p1} alt="cart1" />
            </div>
            <div className="col-5 m-3 ">
              <img src={p2} alt="cart2" />
            </div>
          </div>

          <div className="row">
            <div className="col-5 m-3">
              <img src={p3} alt="cart3" />
            </div>
            <div className="col-5 m-3">
              <img src={p4} alt="cart4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tour