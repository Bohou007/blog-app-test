import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Forgotpassword extends Component {
  render() {
    return (
      <>
        <section
          className="min-vh-100 d-flex align-items-center section-image overlay-soft-dark"
          data-background="https://demo.themesberg.com/spaces/assets/img/form-image.jpg"
          style={{
            background:
              'rgba(0, 0, 0, 0) url("https://demo.themesberg.com/spaces/assets/img/form-image.jpg") repeat scroll 0% 0%',
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="text-center text-md-center mb-3 mt-md-0 text-white">
                  <h1 className="mb-0 h3">
                    Vous avez oublié votre mot de passe ?
                  </h1>
                </div>
              </div>
              <div className="col-12 d-flex align-items-center justify-content-center">
                <div className="signin-inner my-4 my-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                  <form action="#">
                    <div className="form-group mb-4">
                      <label htmlFor="email">Votre adresse E-mail</label>
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
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary">
                        Envoyer le lien de réinitialisation du mot de passe
                      </button>
                    </div>
                  </form>
                  <div className="d-flex justify-content-center align-items-center mt-4">
                    <span className="font-weight-normal">
                      Retournez à la{" "}
                      <NavLink to="/auth/signin" className="font-weight-bold">
                        <u> page de connexion</u>
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

export default Forgotpassword;
