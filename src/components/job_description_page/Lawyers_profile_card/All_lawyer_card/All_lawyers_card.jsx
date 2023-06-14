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
        <div className='view_buttons load_more mt-4 border border-dark h-50'>
      <div className="row"> 
      <div className="col-lg-9">
          <div className="row p-1">
            <div className="col-lg-4 col-6 mt-2">
                <img src={lawyer_pic} className='rounded-full' alt="" />
            </div>

            <div className="col-lg-8 col-6">
          
            <h5 className='mt-2 fs-6 lawyer_name fw-bold'>{data.username}</h5>
            <span className='fs-6 lawyer_work_type fw-bold'>{data.work}</span>&nbsp;<span className="fw-bold mt-2 fs-6">*****</span><br></br>
            <span className='lawyer_work_experience fw-bold'>{data.experience}  in practice</span>
            {/* <div className='d-flex'> */}
             {/* <p className='fs-6 lawyer_work_type'>{data.work} {data.experience} in practice</p> */}
            {/* <p className='fs-6 mx-4 lawyer_work_experience'>{data.experience}  Years in practice</p> */}
            {/* </div> */}
            </div>
          </div>
      </div>

      <div className="col-lg-3">
          <div className="row">
           
            <button className="view_more btn btn-primary cont mt-4 w-75 fs-6">
              View Profile
            </button>
            

            
          </div>
      </div>
      </div>
 </div>
 ))
    }
    <div className='mt-2'>
    <Link className='abd' to='/alllawyer'><p>View More</p>
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