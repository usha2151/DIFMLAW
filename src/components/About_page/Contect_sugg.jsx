import React from 'react'

const Contect_sugg = () => {
  return (
    <>
     <div className="row shadow p-5 mb-5 mx-auto consugg" style={{borderRadius: "20px"}}>
       <div className="col-md-6">
       <p className="fs-1 fw-bold text-center">
                Want{" "}
                <span id="suggest" className="sugg">
                  Our Suggestions
                </span>{" "}
                <span id="ques" className="sugg">
                  <b>?</b>
                </span>
              </p>
        </div> 

        <div className="col-md-6 col">
        <a className="btn btn-primary ms-5 cont mt-4 w-75 " data-bs-toggle="modal" href="#exampleModalToggle" role="button">
          Contact Now
        </a>
        </div>   
    </div> 
    </>
  )
}

export default Contect_sugg
