import { Component } from "react";
import { Container } from "react-bootstrap";
import avatar from "../assets/img/avatar.png";

class ProfileSettings extends Component {
  render() {
    return (
      <>
        <Container fluid className="bg-dark">
          <div className="row">
            <div className="col-12">
              <h1 className="text-light text-center mb-4">Edit Profile</h1>
            </div>
            <div className="row w-md-75 mx-auto border-bottom border-top py-3 border-secondary ">
              <div className="col-6 text-end">
                <button type="button" className="btn p-0 position-relative">
                  <img
                    src={avatar}
                    alt="profile"
                    className="profile"
                  />
                  <span className="position-absolute edit translate-middle bg-dark text-light border-light rounded-circle">
                    <span>
                      <i className="bi bi-pen-fill"></i>
                    </span>
                  </span>
                </button>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col col-md-10">
                    <p className="text-bg-secondary p-2 ps-3">Strive Student</p>
                  </div>
                </div>
                <div className="row pb-3">
                  <div className="col col-md-8 col-lg-6 position-relative">
                    <p className="text-secondary">Language :</p>
                    <select className="form-select bg-dark text-light noround" defaultValue={1}>
                      <option value='1'>English</option>
                      <option value="2">Tedescolandia</option>
                      <option value="3">Italiano</option>
                      <option value="4">Senza bidet</option>
                    </select>
                    <div className="position-absolute freccia">
                      <i className="bi bi-chevron-compact-down"></i>
                    </div>
                  </div>
                </div>
                <div className="row border-top  border-secondary py-4">
                  <div className="col">
                    <p className="text-secondary h5">Maturity Settings:</p>
                    <button
                      type="button"
                      className="btn small noround btn-black p-2 text-light fw-semibold"
                    >
                      ALL MATURITY RATINGS{" "}
                    </button>
                    <p className="mt-2 text-secondary">
                      Show title of <strong>all maturity ratings</strong> for
                      this profile
                    </p>
                    <button
                      type="button"
                      className="btn btn-outline-secondary noround px-3"
                    >
                      Edit
                    </button>
                  </div>
                </div>
                <div className="row border-top  border-secondary py-4">
                  <div className="col-12">
                    <p className="text-secondary h5">Autoplay controls</p>
                    <input
                      className="form-check-input rounded-0 bg-black border-secondary text-secondary"
                      type="checkbox"
                      value="b"
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label text-secondary small"
                      htmlFor="flexCheckDefault"
                    >
                      Autoplay next Episode in a series on all devices
                    </label>
                    <br />
                    <input
                      className="form-check-input rounded-0 border-secondary bg-black text-secondary"
                      type="checkbox"
                      value="b"
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label text-secondary small"
                      htmlFor="flexCheckDefault"
                    >
                      Autoplay previews while browsing on all device
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default ProfileSettings;
