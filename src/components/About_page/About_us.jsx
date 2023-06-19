import React from 'react'
import {about_section} from "../constant/data";
import "./About_us.css";
const About_us = () => {
  return (
  
   <>

 
   
   <div className='container'>
    <div className='row'>
        <h2 className='text-center fw-bold mt-4'>About Us</h2>
        <p className='fs-5 text-center w-50 mx-auto lh-sm'>Connecting lawyers and seekers from around the world in a seamless and efficient way is our mission at DIFM Law.</p>
        
        

        {
    about_section.map((val) => 
      <div className='about'>
        <div className='row'>
            <div className='col-lg-6 col-12'>
            <h2 className='text-center fw-bold mt-4'>{val.title}</h2>
            <p className='fs-6 lh-sm mt-4 w-75 mx-auto'>{val.description}</p>
            </div>
            <div className='col-lg-6 col-12'>
             <img src={val.image} className='w-100'></img>
            </div>
        </div>
        </div>
           )
        }
       
    </div>
   </div>
 
   </>
  )
}

export default About_us