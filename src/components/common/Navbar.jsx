import React from 'react'
import "./Footer.css";
import { Link } from 'react-router-dom';
import logo from "../images/Vector.svg";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light  bg-white shadow">
  <div class="container p-2">
    <img src={logo} className='me-4 logo mb-2' alt="" />
    <Link class="navbar-brand" to={"#"}>DIFM LAW</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page"  to={"/"}>Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"#"}>About Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to={"#"}>Contact us</Link>
        </li>
      </ul>
      <div class="d-flex">
       <Link to={"/login"}><button class="btn btn-outline-secondary me-2" >Login</button></Link> 
       <Link to={"/signup"}><button class="btn btn-primary" type="submit">Sign Up</button></Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
