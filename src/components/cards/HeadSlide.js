import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class HeadSlide extends Component {
  render() {
    return (
      <>
        <div className="section bg-soft" id="download">
          <div className="container">
            <div className="row row-grid align-items-center">
              <div className="col-12 col-lg-6">
                <span className="h5 text-muted mb-2 d-block">Download App</span>
                <h2 className="display-3 mb-4 blog-head-title">
                  Get started in seconds
                </h2>
                <p className="lead text-muteds blog-head-content">
                  Quickly connect to tools and services such as Google
                  Analytics, Intercom or Github to track, measure and optimize
                  performance.{" "}
                </p>
                <div className="mt-4 mt-lg-5">
                  <NavLink
                    to="#"
                    className="btn btn-primary btn-download-app mb-xl-0 mr-2 mr-md-3"
                  >
                    <span className="d-flex align-items-center">
                      <span className="d-inline-block text-left">
                        Voir Plus
                      </span>
                      <span className="icon icon-brand ml-2 ml-md-3">
                        <i className="fas fa-arrow-right "></i>{" "}
                      </span>
                    </span>
                  </NavLink>
                </div>
              </div>
              <div className="col-12 col-lg-5 ml-lg-auto">
                <img
                  className="d-none d-lg-inline-block"
                  src="../../assets/img/images/test.jpg"
                  alt="Mobile App Illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HeadSlide;
