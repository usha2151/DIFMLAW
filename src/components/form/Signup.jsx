import React, { useState, useEffect } from 'react';
import { app } from '../../firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from "firebase/firestore";
import { storage } from '../../firebase';
import { ref } from "firebase/storage";
import { db } from '../../firebase';
// import { useAuthState } from 'react-firebase-hooks/auth';
import "../form/form.css";



const auth = getAuth(app);
const Signup = () => {

  const navigate = useNavigate();
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


  // this for lawyer form
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [experience, setExperience] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [education, setEducation] = useState('');
  const [work, setWork] = useState('');
  const [picture, setPicture] = useState('');
  const [bio, setBio] = useState('');
  const [state, setState] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  // const [user, loading] = useAuthState(auth);


  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = event => {
    setPhone(event.target.value);
  };
  const handleExperienceChange = event => {
    setExperience(event.target.value);
  };
  const handleSpecializationChange = event => {
    setSpecialization(event.target.value);
  };
  const handleEducationChange = event => {
    setEducation(event.target.value);
  };
  const handleWorkChange = event => {
    setWork(event.target.value);
  };
  const handlePictureChange = event => {
    setPicture(event.target.value);
  };
  const handleStateChange = event => {
    setState(event.target.value);
  };
  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = event => {
    setConfirmPassword(event.target.value);
  };
  const handleBioChange = event => {
    setBio(event.target.value);
  };

  const handleLawyerFormSubmit = event => {
    event.preventDefault();
    // Write logic to submit the form data to the server
    if (!username || !email || !phone || !experience || !specialization || !education || !work || !picture || !bio || !password || !confirmPassword) {
      setError("Please fill all the value!");
    } else {
      if (password === confirmPassword) {
        const res = createUserWithEmailAndPassword(auth, email, password).then(async (res) => {
          const user = res.user;
          console.log(user);
          const storageRef = ref(storage, `/images/${picture.name}`);
          await addDoc(collection(db, "lawyers"), {
            uid: user.uid,
            username,
            authProvider: "local",
            email,
            email: email,
            number: phone,
            experience: experience,
            specialization: specialization,
            education: education,
            work: work,
            image: picture,
            summary: bio,
          });
          navigate('/login');
        });

      } else {
        setError("Your password and confirm password is doesn't match!");
      }
    }

  };

  // useEffect(() => {
  //   if(loading){
  //     return;
  //   }
  //   if(user) 
  //     navigate("/profile");

  // },[user, loading]);



  //this is for users
  const handleUserFormSubmit = event => {
    event.preventDefault();
    // Write logic to submit the form data to the server
    if (!username || !email || !phone || !state || !password || !confirmPassword) {
      setError("Please fill all the value!");
    } else {
      if (password === confirmPassword) {
        const res = createUserWithEmailAndPassword(auth, email, password).then(async (res) => {
          const user = res.user;
          console.log(user);
          await addDoc(collection(db, "users"), {
            uid: user.uid,
            username,
            authProvider: "local",
            email,
            email: email,
            number: phone,
            state: state,
          });
          navigate('/login');
        });

      } else {
        setError("Your password and confirm password is doesn't match!");
      }
    }

  };



  return (
    <>
      <p className='title'>Register as a Lawyer</p>
      <div className='container  form-container mt-4 form-control'>
        <button type="button" class="btn btn-light me-4 mt-2" onClick={handleRegisterAsLawyer}>Register as Lawyer</button>
        <button type="button" class="btn btn-primary mt-2" onClick={handleRegisterAsUser}>Register as User</button>


        {isLawyer && (
          <form class="row g-3 me-4 mx-4 mt-4" onSubmit={handleLawyerFormSubmit}>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">Enter Full Name</label>
              <input type="text" placeholder='Enter your full name' class="form-control" id="inputEmail4" value={username}
                onChange={handleUsernameChange} />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">Enter Email</label>
              <input type="email" placeholder='Enter your email' class="form-control" id="inputPassword4" value={email}
                onChange={handleEmailChange} />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">Phone No.</label>
              <input type="number" placeholder='Enter your number' class="form-control" id="inputPassword4" value={phone}
                onChange={handlePhoneChange} />
            </div>

            <div class="col-md-6">
              <label for="inputState" class="form-label">Experience</label>
              <select id="inputState" value={experience}
                onChange={handleExperienceChange} class="form-select">
                <option selected>Choose...</option>
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Years</option>
                <option value="3 Year">3 Years</option>
                <option value="4 Year">4 Years</option>
                <option value="5 Year">5 Years</option>
                <option value="6 Year">6 Years</option>
                <option value="7 Year">7 Years</option>
                <option value="8 Year" >8 Years</option>
                <option value="9 Year">9 Years</option>
                <option value="10+ Year">10+ Years</option>
              </select>
            </div>
            <div class="col-md-6">
              <label for="inputState" class="form-label">Specialization(s)</label>
              <select id="inputState" value={specialization}
                onChange={handleSpecializationChange} class="form-select">
                <option selected>Select your expertise</option>
                <option value="Injury Lawyers">Injury Lawyers</option>
                <option value="Family Law Lawyers">Family Law Lawyers</option>
                <option value="Defense Lawyers">Defense Lawyers</option>
                <option value="Corporate Lawyers">Corporate Lawyers</option>
                <option value="Immigration Lawyers">Immigration Lawyers</option>
                <option value="Property Lawyers">Property Lawyers</option>
                <option value="Real Estate Lawyers">Real Estate Lawyers</option>
                <option value="Employment Lawyers">Employment Lawyers</option>
              </select>
            </div>

            <div class="col-md-6">
              <label for="inputZip" class="form-label">Education</label>
              <input type="text" placeholder='Describe your educational Qualification' class="form-control" id="inputZip" value={education}
                onChange={handleEducationChange} />
            </div>
            <div class="col-md-6">
              <label for="inputState" class="form-label">Work Type</label>
              <select id="inputState" value={work}
                onChange={handleWorkChange} class="form-select">
                <option selected>Choose..</option>
                <option value="Full Day">Full Day</option>
                <option value="Half Day">Half Day</option>

              </select>
            </div>
            <div class="col-md-6">
              <label for="inputZip" class="form-label">Profile Picture</label>
              <input type="file" placeholder='Choose your profile picture' class="form-control" id="inputZip" value={picture}
                onChange={handlePictureChange} />
            </div>
            <div class="col-md-6">
              <label for="inputZip" class="form-label">Password</label>
              <input type="text" placeholder='Password ' class="form-control" id="inputZip" value={password}
                onChange={handlePasswordChange} />
            </div>
            <div class="col-md-6">
              <label for="inputZip" class="form-label">Confirm password</label>
              <input type="text" placeholder='Confirm password' class="form-control" id="inputZip" value={confirmPassword}
                onChange={handleConfirmPasswordChange} />
            </div>
            <div class="col-md-12">
              <label for="inputZip" class="form-label">Bio/Profile Summary</label>
              <textarea class="form-control" placeholder='Write about yourself...' id="form6Example7" rows="4" value={bio}
                onChange={handleBioChange}></textarea>
            </div>
            <p className='text-danger fs-5'>{error}</p>
            <div class="col-md-12 mb-4 ">
              <button type="submit" class="btn btn-primary form-control mt-2 mb-5 signup">Register Now</button>
            </div>
          </form>
        )}

        {isUser && (
          <form class="row g-3 me-4 mx-4 mt-4" onSubmit={handleUserFormSubmit}>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">Enter Full Name</label>
              <input type="text" placeholder='Enter your full name' class="form-control" id="inputEmail4" value={username}
                onChange={handleUsernameChange} />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">Enter Email</label>
              <input type="email" placeholder='Enter your email' class="form-control" id="inputPassword4" value={email}
                onChange={handleEmailChange} />
            </div>
            <div class="col-md-6">
              <label for="inputPassword4" class="form-label">Phone No.</label>
              <input type="number" placeholder='Enter your number' class="form-control" id="inputPassword4" value={phone}
                onChange={handlePhoneChange} />
            </div>

            <div class="col-md-6">
              <label for="inputZip" class="form-label">State</label>
              <input type="text" placeholder='Select your state' class="form-control" id="inputZip" value={state}
                onChange={handleStateChange} />
            </div>

            <div class="col-md-6">
              <label for="inputZip" class="form-label">Password</label>
              <input type="text" placeholder='Password ' class="form-control" id="inputZip" value={password}
                onChange={handlePasswordChange} />
            </div>
            <div class="col-md-6">
              <label for="inputZip" class="form-label">Confirm password</label>
              <input type="text" placeholder='Confirm password' class="form-control" id="inputZip" value={confirmPassword}
                onChange={handleConfirmPasswordChange} />
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
