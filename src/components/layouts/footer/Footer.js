import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import FrontMenuItems from "../../../FrontMenuItems";
import moment from "moment";
class Footer extends Component {
  render() {
    const mainContent = FrontMenuItems.items.map((route, index) => {
      return (
        <li key={index}>
          <NavLink to={route.url}>{route.title}</NavLink>
        </li>
      );
    });
    return (
      <>
        <footer className="footer py-5 pt-lg-6">
          <div className="sticky-right">
            <NavLink
              to="/"
              className="icon icon-primary icon-md btn btn-icon-only btn-white border border-soft shadow-soft animate-up-3"
            >
              <span className="fas fa-chevron-up"></span>
            </NavLink>
          </div>
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-4">
                <p>
                  Swipe is a beautiful and free one page Bootstrap 5 Template
                  created to showcase your awesome mobile app.
                </p>
                <ul className="social-buttons mb-5 mb-lg-0">
                  <li>
                    <NavLink
                      to="https://twitter.com/themesberg"
                      aria-label="twitter social link"
                      className="icon icon-md icon-twitter mr-3"
                    >
                      <span className="fab fa-twitter"></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="https://www.facebook.com/themesberg/"
                      className="icon icon-md icon-facebook mr-3"
                      aria-label="facebook social link"
                    >
                      <span className="fab fa-facebook"></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="https://github.com/themesberg"
                      aria-label="github social link"
                      className="icon icon-md icon-github mr-3"
                    >
                      <span className="fab fa-github"></span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="https://dribbble.com/themesberg"
                      className="icon icon-md icon-dribbble"
                      aria-label="dribbble social link"
                    >
                      <span className="fab fa-dribbble"></span>
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-2 mb-5 mb-lg-0">
                <span className="h5">Liens Utiles</span>
                <ul className="footer-links mt-2">{mainContent}</ul>
              </div>
              <div className="col-12 col-md-4 mb-5 mb-lg-0">
                <span className="h5 mb-3 d-block">Abonnez-vous</span>
                <form action="#">
                  <div className="form-row mb-2">
                    <div className="col-12">
                      <input
                        type="email"
                        className="form-control mb-2"
                        placeholder="example@company.com"
                        name="email"
                        aria-label="Subscribe form"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-dark shadow-soft btn-block"
                        data-loading-text="Sending"
                      >
                        <span>Subscribe</span>
                      </button>
                    </div>
                  </div>
                </form>
                <p className="text-muted font-small m-0">
                  No spam. Pinky swear.
                </p>
              </div>
            </div>
            <hr className="bg-light my-2" />
            <div className="row pt-2 pt-lg-5">
              <div className="col mb-md-0">
                <NavLink
                  to="https://themesberg.com"
                  target="_blank"
                  className="d-flex justify-content-center"
                >
                  <img
                    src="../../../../assets/img/themesberg.svg"
                    height="25"
                    className="mb-3"
                    alt="Themesberg Logo"
                  />
                </NavLink>
                <div
                  className="d-flex text-center justify-content-center align-items-center"
                  role="contentinfo"
                >
                  <p className="font-weight-normal font-small mb-0">
                    Copyright © Paul Blog{" "}
                    <span className="current-year">
                      {moment().format("YYYY")}
                    </span>
                    . Tous droits reservés.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
