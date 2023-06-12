import React from 'react'
import "./Join_Network.css";
const Join_Network = () => {
  return (
    
       
       <div className='row bg-white  rounded-3 legal_network shadow me-2'>
        <div className='col-lg-6 text-center col-xs-6'>
        <p className='fw-bold fs-2'>Join Our Legal Network</p>
        <span className='font-weight-light fs-6 lagal_part'>Become a part of our growing community of legal professionals or users. Register today to unlock a world of opportunities and connect with clients or find the right lawyer for your legal needs.</span>
        </div>
        <div className='col-lg-6 text-center col-xs-6 mt-3'>
          <button className='btn btn-primary cont mt-4 w-50 reg_btn'>Register as a Lawyer</button>
          <button className='btn btn-primary cont mt-4  w-50 reg_btn'>Register as a User</button>
          </div>
       </div>

  )
}

export default Join_Network
