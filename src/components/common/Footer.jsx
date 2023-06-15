import React from 'react'
import logo from "../images/Vector.svg";
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div class="blockcode f-1">

  <footer class="page-footer shadow">
    <div class="d-flex flex-column mx-auto py-5 footer-1">
      <div class="d-flex flex-wrap justify-content-between">
        <div>
          <a href="/" class="d-flex align-items-center p-0 text-dark  text-decoration-none">
          <img src={logo} className=' logo mb-2' alt="" />
            <span class="ms-3 h5 font-weight-bold ">DIFM LAW</span>
          </a>
          <p class="my-3 content">
          We are a leading lawyer listing portal, dedicated to simplifying the process of connecting lawyers and clients.
          </p>
          <span class="mt-4 ">
            <button class="btn btn-white btn-flat pk-1 me-2 px-2 ficon">
            <i class="bi bi-facebook"></i>
            </button>
            <button class="btn btn-white btn-flat pk-1 me-2 px-2 ficon">
            <i class="bi bi-linkedin"></i>
            </button>
            <button class="btn btn-white btn-flat pk-1 me-2 px-2 ficon">
            <i class="bi bi-twitter"></i>
            </button>
            <button class="btn btn-white btn-flat pk-1 px-2 ficon">
            <i class="bi bi-envelope-fill"></i>
            </button>
          </span>
        </div>
        <div>
          <p class="h5 mb-4 Devwares">Quick Links</p>
          <ul class="p-0 lis">
            <li class="my-2">
              <a class="text-dark text-decoration-none" href="/">Contact</a>
            </li>
            <li class="my-2">
              <a class="text-dark text-decoration-none" href="/">About</a>
            </li>
            <li class="my-2">
              <a class="text-dark text-decoration-none" href="/alllawyer">Lawyers</a>
            </li>
          </ul>
        </div>
        <div>
          <p class="h5 mb-4" style={{fontWeight: '600'}}>DIFM Group</p>
          <ul class="p-0 lis">
            <li class="my-2">
              <a class="text-dark text-decoration-none" href="https://difm.llc/">Difm.llc</a>
            </li>
            <li class="my-2">
              <a class="text-dark text-decoration-none" href="https://www.worldmodelhunt.com/">Worldmodelhunt.com</a>
            </li>
            <li class="my-2">
              <a class="text-dark text-decoration-none" href="https://bragsocial.com/">BragSocial.com</a>
            </li>
          </ul>
        </div>
        <div>
        <div class="input-group">
        <div class="form-outline">
          <input type="search" placeholder='Enter your email' class="form-control ss-2" /> 
           </div>
            <button type="button" class="btn btn-primary s-1">
              Subscribe 
            </button>
          </div>
        </div>
      </div>
      <small class="text-center mt-5">&copy; DIFM.LLC, 2023. All rights reserved.</small>
    </div>
  </footer>
</div>
    </div>
  )
}

export default Footer
