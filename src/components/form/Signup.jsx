import React, { useState } from 'react';
import "../form/form.css";

const Signup = () => {

  const [isLawyer, setIsLawyer] = useState(false);
  const [isUser, setIsUser] = useState(false);

  const handleRegisterAsUser = () => {
    setIsLawyer(false);
    setIsUser(true);
  };

  const handleRegisterAsLawyer = () => {
    setIsLawyer(true);
    setIsUser(false);
  };

  return (
    <>
    <p className='title'>Register as a Lawyer</p>
    <div className='container  form-container mt-4 form-control'>
    <button type="button" class="btn btn-light me-4 mt-2" onClick={handleRegisterAsLawyer}>Register as Lawyer</button>
    <button type="button" class="btn btn-primary mt-2" onClick={handleRegisterAsUser}>Register as User</button>

    {isLawyer && (
<form class="row g-3 me-4 mx-4 mt-4">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Enter Full Name</label>
    <input type="text" placeholder='Enter your full name' class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Enter Email</label>
    <input type="email" placeholder='Enter your email' class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Phone No.</label>
    <input type="number" placeholder='Enter your number' class="form-control" id="inputPassword4"/>
  </div>

  <div class="col-md-6">
    <label for="inputState" class="form-label">Experience</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-6">
    <label for="inputState" class="form-label">Specialization(s)</label>
    <select id="inputState" class="form-select">
      <option selected>Select your expertise</option>
      <option>...</option>
    </select>
  </div>

  <div class="col-md-6">
    <label for="inputZip" class="form-label">Education</label>
    <input type="text" placeholder='Describe your educational Qualification' class="form-control" id="inputZip"/>
  </div>
  <div class="col-md-6">
    <label for="inputState" class="form-label">Work Type</label>
    <select id="inputState" class="form-select">
      <option selected>Full time</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-6">
    <label for="inputZip" class="form-label">Profile Picture</label>
    <input type="file" placeholder='Choose your profile picture'  class="form-control" id="inputZip"/>
  </div>
  <div class="col-md-6">
    <label for="inputZip" class="form-label">Password</label>
    <input type="text" placeholder='Password ' class="form-control" id="inputZip"/>
  </div>
  <div class="col-md-6">
    <label for="inputZip" class="form-label">Confirm password</label>
    <input type="text" placeholder='Confirm password' class="form-control" id="inputZip"/>
  </div>
  <div class="col-md-12">
    <label for="inputZip" class="form-label">Bio/Profile Summary</label>
    <textarea class="form-control" placeholder='Write about yourself...' id="form6Example7" rows="4"></textarea>
  </div>

  <div class="col-md-12 mb-4 ">
    <button type="submit" class="btn btn-primary form-control mt-2 mb-5 signup">Register Now</button>
  </div>
</form>
    )}

{isUser && (
   <form class="row g-3 me-4 mx-4 mt-4">
   <div class="col-md-6">
     <label for="inputEmail4" class="form-label">Enter Full Name</label>
     <input type="text" placeholder='Enter your full name' class="form-control" id="inputEmail4"/>
   </div>
   <div class="col-md-6">
     <label for="inputPassword4" class="form-label">Enter Email</label>
     <input type="email" placeholder='Enter your email' class="form-control" id="inputPassword4"/>
   </div>
   <div class="col-md-6">
     <label for="inputPassword4" class="form-label">Phone No.</label>
     <input type="number" placeholder='Enter your number' class="form-control" id="inputPassword4"/>
   </div>
 
   <div class="col-md-6">
     <label for="inputZip" class="form-label">State</label>
     <input type="text" placeholder='Select your state' class="form-control" id="inputZip"/>
   </div>
  
   <div class="col-md-6">
     <label for="inputZip" class="form-label">Password</label>
     <input type="text" placeholder='Password ' class="form-control" id="inputZip"/>
   </div>
   <div class="col-md-6">
     <label for="inputZip" class="form-label">Confirm password</label>
     <input type="text" placeholder='Confirm password' class="form-control" id="inputZip"/>
   </div>
 
   <div class="col-md-12 mb-4 ">
     <button type="submit" class="btn btn-primary form-control mt-2 mb-5 signup">Register Now</button>
   </div>
 </form>
)}
    </div>
    </>
  )
}

export default Signup
