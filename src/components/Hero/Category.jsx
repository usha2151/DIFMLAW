import React from 'react'
import "./Category.css";
import CategoryCards from './CategoryCards';
import { category } from '../constant/data';

const Category = () => {
  return (
    <div className='section-2 mt-5'>
    <div className='container '>
        <div className='row'>
            <div className='col-lg-6'>
     <h1 className='mt-4'>Explore by<span id='cat' className='ms-2'>categories</span></h1>
     </div>
     <div className='col-lg-6 '>
        <div className='d-flex mt-4 float-xl-end'>
      <p className='fs-6 fw-bold mt-2'>Show all lawyers</p>
      <i class="bi bi-arrow-right ms-2 fs-2"></i>
      </div>
     </div>
     </div>

     {/* law categories start */}
     <div className='row'>
      {/* injury lawyer */}
      {category.map((category)=>
      <CategoryCards key={category.id} {...category}/>
      )}    
       {/* injury lawyer */}
          
     </div>
     {/* law categories end */}
    </div>
    </div>
  )
}

export default Category
