import { Component } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import netflixlogo from "../assets/img/netflix_logo.png";

class MyNavbar extends Component {
  render() {
    return (
        <nav
        className="navbar navbar-expand-lg bg-black"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          Name<a className="navbar-brand" href="#"
            ><img src={netflixlogo} className="netflixlogo"
          /></a>
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
                <a className="nav-link active fw-bold" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">TV Shows</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">Movies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">Recently Added</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="#">My List</a>
              </li>
            </ul>
            <div className="d-flex align-items-center text-light">
              <i className="bi bi-search icons mx-2"></i>
              <div id="kids" className="fw-bold mx-2">KIDS</div>
              <i className="bi bi-bell icons mx-2"></i>
              <i className="bi bi-person-circle icons mx-2"></i>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default MyNavbar;
