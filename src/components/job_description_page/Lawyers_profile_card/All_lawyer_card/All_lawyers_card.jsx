import React, {useEffect, useState} from 'react';
import { collection, getDocs} from "firebase/firestore";
import { db } from '../../../../firebase';
import { lawyer_pic } from '../../../images';
import ReactPaginate from 'react-paginate';
import "./All_lawyers_card.css";
import { Link } from 'react-router-dom';
const All_lawyers_card = () => {
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
        <div className='view_buttons mt-4 alllawyersection border border-dark h-50'>
      <div className="row"> 
      <div className="col-md-6">
          <div className="row p-1">
            <div className="col-lg-4 col-6 mt-2">
                <img src={lawyer_pic} className='rounded-full' alt="" />
            </div>

            <div className="col-lg-8 col-6">
          
            <h5 className='mt-2 fs-6 lawyer_name'>{data.username}</h5>
            <span className='fs-6 lawyer_work_type'>{data.work}</span>
            {/* <span className='lawyer_work_experience'>{data.experience}  Years in practice</span> */}
            {/* <div className='d-flex'> */}
             {/* <p className='fs-6 lawyer_work_type'>{data.work} {data.experience} in practice</p> */}
            {/* <p className='fs-6 mx-4 lawyer_work_experience'>{data.experience}  Years in practice</p> */}
            {/* </div> */}
            </div>
          </div>
      </div>

      <div className="col-md-6">
          <div className="row">
            <div className="col-md-10 d-flex justify-content-end">
            <button className="btn btn-primary cont mt-3 w-75">
              View Profile
            </button>
            </div>

            
          </div>
      </div>
      </div>
 </div>
 ))
    }
    <div className='me-4'>
    <Link to='/alllawyer'><button className='btn btn-primary w-50  mt-4'>View more</button>
</Link></div>
   

{/* <div id="react-paginate" className='mt-5'>
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
          </div> */}
 </>
  )
}

export default All_lawyers_card