import React, {useEffect, useState} from 'react';
import "./Category.css";
import CategoryCards from "./CategoryCards";
import { category } from "../constant/data";
import { collection, getDocs} from "firebase/firestore";
import { db } from '../../firebase';
import Join_Network from '../join_network/Join_Network';



const Category = () => {
  const [lawyers, setLawyers] = useState([]);
  const fetchPost = async () => {
       
    await getDocs(collection(db, "lawyers"))
        .then((querySnapshot)=>{              
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            setLawyers(newData);                
            console.log(lawyers, newData);
        }) 
    }

useEffect(()=>{
    fetchPost();
}, [])

  return (
    <>
      <div className="section-2 mt-5">
        <div className="container ">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="mt-4">
                Explore by
                <span id="cat" className="ms-2">
                  categories
                </span>
              </h1>
            </div>
            <div className="col-lg-6 ">
              <div className="d-flex mt-4 float-xl-end">
                <p className="fs-6 fw-bold mt-2">Show all lawyers</p>
                <i class="bi bi-arrow-right ms-2 fs-2"></i>
              </div>
            </div>
          </div>

          {/* law categories start */}
          <div className="row categories">
            {/* injury lawyer */}
            {category.map((category) => (
              <CategoryCards key={category.id} {...category} />
            ))}
            {/* injury lawyer */}
          </div>
          {/* law categories end */}

          {/* suggestions field */}

          <div className="row bg-white want  rounded-3 suggestion shadow w-50 mx-auto">
            <div className="col-lg-6 text-center col-xs-6">
              <p className="fs-1 fw-bold">
                Want{" "}
                <span id="suggest" className="sugg">
                  Our Suggestions
                </span>{" "}
                <span id="ques" className="sugg">
                  <b>?</b>
                </span>
              </p>
            </div>
            <div className="col-lg-6 text-center col-xs-6 ">
              <button className="btn btn-primary cont mt-4 w-75">
                Contact Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* lawyers featued start */}

      <div className="lawyers">
        <div className="container  pb-5">
          <div className="row">
            <div className="col-lg-6 featured">
              <h1 className="mt-4">
                Featured
                <span id="cat" className="ms-2">
                  Lawyers
                </span>
              </h1>
            </div>
            <div className="col-lg-6 featured">
              <div className="d-flex mt-4 float-xl-end">
                <p className="fs-6 fw-bold mt-2">Show all lawyers</p>
                <i class="bi bi-arrow-right ms-2 fs-2"></i>
              </div>
            </div>
          </div>

          {/* lawyers featured end */}
          <div className="row mx-auto lawyers_profile">
          {
            lawyers?.map((data,i)=>(
            <div className="col-lg-3 rounded-3 lawyer mt-4 bg-white card shadow p-3 mb-5 bg-body rounded lawyers-card"  key={i}>
              <div className="row  mt-2" id="lawyer">
                <div className="col-lg-4 col-sm-4 col-6">
                  <img src="Vector.svg" className="ms-2"></img>
                </div>
                <div className="col-lg-8 col-sm-8 col-6">
                  <p className="fs-6 mb-0 pb-1 h6">{data.username}</p>
                  <p className="city">kathamndu nepal</p>
                </div>
              </div>

              <span className="fs-5 fw-normal text-center">{data.specialization}</span>

              <div className="mt-3 ms-3 me-3">
                <p className="font-weight-bold fs-6 mb-1">{data.work}</p>
                <p className="fs-6 lawyers-desc font-weight-normal lh-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Consequat nunc ac a magna at elementum. Cras arcu varius in
                  aliquam habitant fermentum. Mi sit lorem mollis vitae quis
                  curabitur vestibulum.
                </p>
                <div className="row mt-4 practice">
                  <div className="col-lg-6 col-sm-6 col-6">
                    <span className="fs-6 exp">{data.experience} in practice</span>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-6">
                    <button className="btn btn-primary viewbtn">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
             ))
            }
          </div>
        </div>
        {/* lawyers featued end */}
      </div>


       {/* join network start */}
       <div className='cat_law'>
       <div className='container'>
      <Join_Network /> 
      </div>
      </div>
      {/* join network end */}
    </>
  );
};

export default Category;
