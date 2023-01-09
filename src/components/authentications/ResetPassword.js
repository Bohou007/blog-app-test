import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class ResetPassword extends Component {
  render() {
    return (
      <>
        <section
          className="min-vh-100 d-flex align-items-center section-image overlay-soft-dark"
          data-background="../../assets/img/pages/form-image.jpg"
          style={{
            background:
              'rgba(0, 0, 0, 0) url("../../assets/img/pages/form-image.jpg") repeat scroll 0% 0%',
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="text-center text-md-center mb-3 mt-md-0 text-white">
                  <h1 className="mb-0 h3">Reset password</h1>
                </div>
              </div>
              <div className="col-12 d-flex align-items-center justify-content-center">
                <div className="signin-inner my-4 my-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                  <form action="#">
                    <div className="form-group mb-4">
                      <label htmlFor="email">Your Email</label>
                      <div className="input-group">
                        <span className="input-group-text" id="basic-addon3">
                          <span className="fas fa-envelope" />
                        </span>{" "}
                        <input
                          type="email"
                          className="form-control"
                          placeholder="example@company.com"
                          id="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="password">Your Password</label>
                      <div className="input-group">
                        <span className="input-group-text" id="basic-addon4">
                          <span className="fas fa-unlock-alt" />
                        </span>{" "}
                        <input
                          type="password"
                          placeholder="Password"
                          className="form-control"
                          id="password"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="password_confirm">Confirm Password</label>
                      <div className="input-group">
                        <span className="input-group-text" id="basic-addon5">
                          <span className="fas fa-unlock-alt" />
                        </span>{" "}
                        <input
                          type="password"
                          placeholder="Confirm Password"
                          className="form-control"
                          id="password_confirm"
                          required
                        />
                      </div>
                    </div>
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary">
                        Reset password
                      </button>
                    </div>
                  </form>
                  <div className="d-flex justify-content-center align-items-center mt-4">
                    <span className="font-weight-normal">
                      Go back to the{" "}
                      <NavLink to="./sign-in.html" className="font-weight-bold">
                        login page
                      </NavLink>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ResetPassword;
