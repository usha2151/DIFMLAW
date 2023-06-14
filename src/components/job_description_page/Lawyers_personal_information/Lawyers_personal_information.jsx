import React from 'react'
import "./Lawyer_personal_info.css";
const Lawyers_personal_information = () => {
  return (
    <div className='row mt-5 law p-4 border border-info'>
        
      <h2>Lawyer's Profile Information</h2>
      <p className='fs-6'>Basic contact Information</p>
      <div className='row'>
        <div className='col-lg-6'>
            <div className='row'>
                <div className='col-lg-6 col-6'>
                    <p className='info fw-bold'>Phone No.</p>
                    <p className='info fw-bold'>Email</p>
                    <p className='info fw-bold'>Location</p>
                    <p className='info fw-bold'>Work time</p>
                    <p className='info fw-bold'>Website</p>
                </div>
                <div className='col-lg-6 col-6'>
                    <p className='info'>+917058645952</p>
                    <p className='info'>John@gmail.com</p>
                    <p className='info'>United State</p>
                    <p className='info'>Full time</p>
                    <p className='info'>www.Difmlaw.com/john</p>
                </div>
            </div>
        </div>
        <div className='col-lg-6'></div>
      </div>

    </div>
  )
}

export default Lawyers_personal_information