import { Component } from "react";

class TvShows extends Component {
  render() {
    return (
      <>
        <div className="d-flex justify-content-between text-light">
          <div className="d-flex">
            <h2 className="mb-4">TV Shows</h2>
            <div className="btn-group" role="group">
              <div className="dropdown ms-4 mt-1">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Genres
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Comedy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Drama
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Thriller
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="me-4">
            <i className="bi bi-grid icons mx-2"></i>
            <i className="bi bi-grid-3x3 icons"></i>
          </div>
        </div>
      </>
    );
  }
}

export default TvShows