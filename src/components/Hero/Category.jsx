import React from 'react';
import "./Category.css";
import Contect_us from '../Contect_us/Contect_us';
import CategoryCards from "./CategoryCards";
import { category } from "../constant/data";
import Join_Network from '../join_network/Join_Network';
import Lawyerscards from './Lawyerscards';



const Category = () => {

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
              <a href="/alllawyer" className='text-dark'>
              <div className="d-flex mt-4 float-xl-end">
                <p className="fs-6 fw-bold mt-2">Show all lawyers</p>
                <i class="bi bi-arrow-right ms-2 fs-2"></i>
              </div>
              </a>
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

          {/* <div className="row bg-white want  rounded-3 suggestion shadow w-50 mx-auto">
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
          </div> */}
          <Contect_us />
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
          <Lawyerscards />
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
