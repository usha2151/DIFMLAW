import React, {useEffect, useState} from 'react'
import "../EditProfile/EditProfile.css";
import { getAuth} from 'firebase/auth';
import profile from "../images/profile.jpg";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { db, app } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { doc, updateDoc } from "firebase/firestore";


const auth = getAuth(app);
const EditProfile = () => {
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);
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
    const [setUserId ,getUserId] = useState("");

    const fetchUserName = async () => {
    
    //     const q = query(collection(db, "lawyers"), where("uid", "==", user.uid));
    //   const doc = await getDocs(q);
    //   const data = doc.docs[0].data();
        // doc.forEach(value=>{
        //     res.push({
        //         id: value.id,
        //         ...value.data()
        //     });
        // });
        // console.log(res[0].id);
        // getUserId(res[0].id);
        // const data = doc.docs[0].data();
        // setUsername(data.username);
        // setEmail(data.email);
        // setPhone(data.phone);
        // setExperience(data.experience);
        // setEducation(data.education);
        // setWork(data.work);

      
    };

    useEffect(() => {
      if (loading) return;
      fetchUserName();
      if(!user) navigate("/login");
    }, [user, loading]);
   

// const handleUpdate = async (e) => {
//     e.preventDefault()
//     const taskDocRef = doc(db,"lawyers", setUserId);

//     try{
//       await updateDoc(taskDocRef,{
//         username: username,
//         email: email,
//         number: phone,
//         experience: experience,
//         specialization: specialization,
//         education: education,
//         work: work,
//         image: picture,
//         state: state,
//         summary: bio,
        
//       }).then(() => {
//         alert("Document successfully updated!");
//       })
//     } catch (err) {
//       alert(err)
//     }    
//   }
  return (
    <div>
      <div className="container-xl px-4 mt-4" id='sections'>
    <div className="row">
        <div className="col-xl-4">
           
            <div className="card mb-4 mb-xl-0">
                <div className="card-header">Profile Picture</div>
                <div className="card-body text-center">
                   
                    <img className="img-account-profile rounded-circle mb-2" src={profile} alt=""/>
                   
                    <div className="small font-italic text-muted mb-4"><b className='fs-4'>{username}</b></div>
                    <label for="file" className="btn btn-warning w-10">Upload New Image</label>
                    <input type='file' id='file' onChange={(e) => {setPicture(e.target.value)}} />
                    
                </div>
            </div>
        </div>
        <div className="col-xl-8">
            {/* <!-- Account details card--> */}
            <div className="card mb-4">
                <div className="card-header">User Details</div>
                <div className="card-body">
                    <form >
                        {/* <!-- Form Row--> */}
                        <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputFirstName">Full Name</label>
                                <input className="form-control" id="inputFirstName" type="text" placeholder={username} value={username} onChange={(e) => {setUsername(e.target.value)}}/>
                            </div>
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputEmail">Email</label>
                                <input className="form-control" id="inputEmail" type="email" placeholder={email} value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                            </div>
                        </div>
                        <div className="row gx-3 mb-3">
                        <div className="col-md-6">
                                <label className="small mb-1" for="inputMobile">Mobile</label>
                                <input className="form-control" id="inputMobile" type="tel" placeholder={phone} value={phone} onChange={(e) => {setPhone(e.target.value)}}/>
                            </div>
                            
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputExperience">Experience</label>
                                <select id="inputExperience" value={experience}
                                 onChange={(e) => {setExperience(e.target.value)}} class="form-select">
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
                        </div>
                       
                        <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputSpecialization">Specialization</label>
                                <select id="inputSpecialization" value={specialization} onChange={(e) => {setSpecialization(e.target.value)}} class="form-select">
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
                           
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputEducation">Education</label>
                                <input className="form-control" id="inputEducation" type="text" name="Education" placeholder={education} value={education} onChange={(e) => {setEducation(e.target.value)}} />
                            </div>
                        </div>
                        <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputWork">Work Type</label>
                                <select id="inputWork" value={work} onChange={(e) => {setWork(e.target.value)}} class="form-select">
                                 <option selected>Choose..</option>
                                   <option value="Full Day">Full Day</option>
                                    <option value="Half Day">Half Day</option>

                                </select>
                            </div>
                           
                            <div className="col-md-6">
                                <label className="small mb-1" for="inputState">State</label>
                                <input className="form-control" id="inputState" type="text" name="state" placeholder={state} value={state} onChange={(e) => {setState(e.target.value)}} />
                            </div>
                        </div>
                        <div class="col-md-12">
              <label for="inputZip" class="form-label">Bio/Profile Summary</label>
              <textarea class="form-control"  id="form6Example7" rows="4" placeholder={bio} value={bio} onChange={(e) => {setBio(e.target.value)}}></textarea>
            </div>
                        <div className="row gutters">
			                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mt-4">
				                      <div className="text-end">
					                      <button type="button" id="submits" name="submit" className="btn btn-dark">Cancel</button>
					                      <button type="submit" id="submit" name="submit" className="btn btn-warning ms-2">Update</button>
				                     </div>
			                     </div>
		                     </div>
      
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default EditProfile