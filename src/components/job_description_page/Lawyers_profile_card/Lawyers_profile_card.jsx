import React from "react";
import Lawyer from "../../images/lawyers_profile.png";
import { lawyer_pics } from "../../images";
import "./Lawyers_profile_card.css";
import All_lawyers_card from "./All_lawyer_card/All_lawyers_card";
import Lawyers_personal_information from "../Lawyers_personal_information/Lawyers_personal_information";
import Expertise_and_services from "../Expertise_and_service/Expertise_and_services";

const Lawyers_profile_card = () => {
  return (
    <div className="container">
      <div className="row">
        {/* lawyer profile card start */}
        <div className="col-lg-8 p-5 ">
          <div className="row law ab d-flex border border-info justify-content-around p-4">
            <div className="col-lg-6">
              <div className="row ab">
                <div className="col-lg-6 col-xs-12 d-flex justify-content-around">
                  <img src={Lawyer}></img>
                </div>
                <div className="col-lg-6 col-xs-12">
                  <p className="fs-5 fw-bold mb-2">John Smith</p>
                  <p className="fs-6 mb-2 laywer_city">Nepal, Kathmandu</p>
                  <p className="fs-6 laywer_exp fw-bold">
                    33+ Years in practice
                  </p>
                  <p className="fw-bold mb-2 star fs-5">*****</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-end d-flex justify-content-end gap-2">
              <div className="me-4 w-50">
                <button className="btn btn-primary me-4 w-100 rounded-pill mt-5">
                  Contact Now
                </button>
              </div>
              <div>
                <span className="fw-bold fs-3">
                  <i class="bi bi-bookmark"></i>
                </span>
                <p className="fs-6 save text-center">save</p>
              </div>
            </div>
          </div>

          {/* lawyer personal information card start */}
          <Lawyers_personal_information />
          {/* lawyer personal information card end */}

          {/* expertise and services start */}

          <Expertise_and_services />
          {/* expertise and services end */}
        </div>
        {/* lawyer profile card end */}

        <div className="col-lg-4 mt-4">
          {/* photos */}
          <h3>Photos</h3>
          <div className="row">
            <div className="col-lg-6 col-6">
              <img src={lawyer_pics}></img>
            </div>
            <div className="col-lg-6 col-6">
              <img src={lawyer_pics}></img>
            </div>
          </div>
          {/* photos */}

          {/* our location */}
          <h3 className="mt-4">Our Location</h3>

          <div className="md:w-1/2">
            {/* Map */}
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1.771070944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabc2a66677f%3A0x8f85bd068d1afb8a!2s30%20N%20Gould%20St%2C%20Sheridan%2C%20WY%2082801%2C%20USA!5e0!3m2!1sen!2sin!4v1684734636299!5m2!1sen!2sin"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="rounded-[20px]  sm:h-[500px] -mt-4 w-[320px]  -ml-10 sm:ml-0 sm:w-full"
              ></iframe>
            </div>
          </div>

          {/* our location */}

          {/* refer to a friend social media icons*/}
          <h3 className="mt-4">Refer to a friend</h3>
          <span class="mt-5">
            <button class="btn btn-dark btn-flat p-1 me-5 px-2 btn-primary">
              <i class="bi bi-facebook"></i>
            </button>
            <button class="btn btn-dark btn-flat p-1 me-5 px-2 btn-primary">
              <i class="bi bi-linkedin"></i>
            </button>
            <button class="btn btn-dark btn-flat p-1 me-5 px-2 btn-primary">
              <i class="bi bi-twitter"></i>
            </button>
            <button class="btn btn-dark btn-flat p-1 px-2 btn-primary">
              <i class="bi bi-envelope-fill"></i>
            </button>
          </span>
          {/* refer to a friend social media icons*/}

          {/* job url link */}
          <h4 className="mt-4">Copy job URL link</h4>
          <div class="input-group mt-4">
            <div class="form-outline">
              <input
                type="search"
                value="https://www.kreate.com/job-apply-325..."
                class="form-control ss-2 w-100"
              />
            </div>
            <button type="button" class="btn btn-primary s-1">
              Copy link
            </button>
          </div>
          {/* job url link */}
         {/* all lawyers card */}
         <div className="row mt-5 law p-2 border border-info">
          <h3>Top Lawyers</h3>
           <All_lawyers_card />
           </div>
         {/* all lawyers card */}
        </div>
      </div>
    </div>
  );
};

export default Lawyers_profile_card;