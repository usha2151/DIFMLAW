import React, {useEffect, useState} from 'react';
import { collection, getDocs} from "firebase/firestore";
import { db } from '../../firebase';
import { lawyer_pic } from '../images';
import ReactPaginate from 'react-paginate';

const AllLawyersection = () => {

    const [lawyers, setLawyers] = useState([]);
  const fetchPost = async () => {
       
    await getDocs(collection(db, "lawyers"))
        .then((querySnapshot)=>{              
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            setLawyers(newData);                
            console.log(lawyers);
        }) 
    }

useEffect(()=>{
    fetchPost();
}, [])

const [currentPage, setCurrentPage] = useState(0);
const usersPerPage = 5;
const offset = currentPage * usersPerPage;
const currentUsers = lawyers.slice(offset, offset + usersPerPage);

  return (
    <>
    {
       currentUsers?.map((data,i)=>(
        <div className='view_buttons mt-4 alllawyersection border border-dark'>
    <div className="row mx-auto"> 
    <div className="col-md-6">
        <div className="row">
           <div className="col-md-3 mt-3">
               <img src={lawyer_pic} className='rounded-full' alt="" />
          </div>

          <div className="col-md-9">
          <h4 className='mt-2'>{data.specialization}</h4>
          <h5 className='nam fs-6'>{data.username}</h5>
          <div className='d-flex'>
          <p className='fs-6'>{data.work}</p>
          <p className='fs-6 mx-4'>{data.experience}  Years in practice</p>
          </div>
          </div>
        </div>
    </div>

    <div className="col-md-6">
        <div className="row">
           <div className="col-md-10 d-flex justify-content-end">
           <button className="btn btn-primary cont profi w-75">
             View Profile
           </button>
          </div>

          <div className="col-md-1 mx-3">
          <i class="bi bi-bookmark fw-bold fs-3"></i>
          <p className='fs-6 savelist'>save</p>
          </div>
        </div>
    </div>
    </div>
 </div>
 ))
    }

{/* <nav aria-label="..." className='mt-5'>
  <ul class="pagination">
    <li class="page-item disabled">
      <span class="page-link">Previous</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
      <span class="page-link">2</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav> */}

<div id="react-paginate" className='mt-5'>
          <ReactPaginate
            previousLabel={<i className="bi bi-arrow-left-circle-fill m-2 "></i>}
            nextLabel={<i className="bi bi-arrow-right-circle-fill m-2"></i>}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={Math.ceil(lawyers.length / usersPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={(data) => setCurrentPage(data.selected)}
            containerClassName={'pagination'}
            activeClassName={'active'}
            previousClassName={'paginate-prev'}
            nextClassName={'paginate-next'}
          />
          </div>
 </>
  )
}

export default AllLawyersection
