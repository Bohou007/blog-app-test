import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Signup extends Component {
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
              <div className="col-12 d-flex align-items-center justify-content-center">
                <div className="signin-inner my-4 my-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 signUp fmxw-507">
                  <div className="text-center text-md-center mb-4 mt-md-0">
                    <h1 className="mb-0 h3">Créer un compte</h1>
                  </div>
                  <form action="#">
                    <div className="row col-md-12">
                      <div className="col-md-6 form-group mb-4">
                        <label htmlFor="firstName">Nom de famille</label>
                        <div className="input-group">
                          <span className="input-group-text" id="basic-addon3">
                            <span className="fas fa-user" />
                          </span>{" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Entrer votre de famille"
                            id="firstName"
                            required
                          />
                        </div>
                      </div>
                      <div className=" col-md-6 form-group mb-4">
                        <label htmlFor="lastName">Vos Prénoms</label>
                        <div className="input-group">
                          <span className="input-group-text" id="basic-addon3">
                            <span className="fas fa-user" />
                          </span>{" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Entrer vos prénoms"
                            id="lastName"
                            required
                          />
                        </div>
                      </div>
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
                      <div className="form-group">
                        <div className="form-group mb-4">
                          <label htmlFor="password">Votre mot de passe</label>
                          <div className="input-group">
                            <span
                              className="input-group-text"
                              id="basic-addon4"
                            >
                              <span className="fas fa-unlock-alt" />
                            </span>{" "}
                            <input
                              type="password"
                              placeholder="Mot de passe"
                              className="form-control"
                              id="password"
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group mb-4">
                          <label htmlFor="password_confirm">
                            Confirmez votre mot de passe
                          </label>
                          <div className="input-group">
                            <span
                              className="input-group-text"
                              id="basic-addon5"
                            >
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
                        <div className="form-check mb-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue
                            id="terms"
                          />{" "}
                          <label className="form-check-label" htmlFor="terms">
                            J'accepte les{" "}
                            <NavLink to="#">termes et conditions</NavLink>
                          </label>
                        </div>
                      </div>
                      <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                          Enregistrez-vous
                        </button>
                      </div>
                    </div>
                  </form>

                  <div className="d-flex justify-content-center align-items-center mt-4">
                    <span className="font-weight-normal">
                      Vous avez déjà un compte ?{" "}
                      <NavLink to="/auth/signin" className="font-weight-bold">
                        Connectez-vous ici
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

export default Signup;
