import { Component } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import netflixlogo from "../assets/img/netflix_logo.png";
import avatar from '../assets/img/avatar.png'
import { Link, useLocation, useNavigate } from "react-router-dom";

function MyNavbar () {
  const location = useLocation()
  const navigate = useNavigate()

  const addActiveOrNot = (path) => {
    return location.pathname === path ? 'nav-link active fw-bold' : 'nav-link fw-bold'
  }


    return (
        <nav
        className="navbar navbar-expand-lg bg-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link to='/tvshows' className="navbar-brand" href="#"
            ><img src={netflixlogo} className="netflixlogo"
          /></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' className={addActiveOrNot('/')} href="#">Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/tvshows' className={addActiveOrNot('/tvshows')} href="#">TV Shows</Link>
              </li>
              <li className="nav-item">
                <Link to='/settings' className={addActiveOrNot('/settings')} href="#">Settings</Link>
              </li>
              <li className="nav-item">
                <Link to='/profilesettings' className={addActiveOrNot('/profilesettings')} href="#">Profile Settings</Link>
              </li>
            </ul>
            <div className="d-flex align-items-center text-light">
              <i className="bi bi-search icons mx-2"></i>
              <div id="kids" className="fw-bold mx-2">KIDS</div>
              <i className="bi bi-bell icons mx-2"></i>
              <img src={avatar} onClick={() => { navigate('/profilesettings') }} className="avatar mx-2 clickable"/>
            </div>
          </div>
        </div>
      </nav>
    );
  
}

export default MyNavbar;
