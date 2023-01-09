import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class ContactCards extends Component {
  render() {
    return (
      <div>
        <div className="col-12 col-lg-12">
          <div className="card shadow px-4 py-1 mb-6 blog-cards">
            <div className="card-body text-center text-md-left">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h2 className="mb-3 blog-head-title">Become one of us</h2>
                  <p className="mb-4">
                    Do you want to join our team and work remotely from anywhere
                    you'd like? We can’t wait to hear from you!
                  </p>
                  <NavLink to="/contacts" className="btn btn-primary">
                    <span className="me-1">
                      <span className="fas fa-file-invoice" />{" "}
                    </span>
                    Check Careers
                  </NavLink>
                </div>
                <div className="col-12 col-md-6 mt-4 mt-md-0 text-md-right">
                  <img
                    src="../../assets/img/illustrations/reading-side.svg"
                    alt="Logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactCards;
