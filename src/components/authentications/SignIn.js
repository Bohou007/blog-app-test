import axios from "axios";
import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";

class SignIn extends Component {
  emptyUser = {};
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
      item: this.emptyUser,
      loggedIn: false,
      redirection: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentDidMount() {
    console.log(localStorage.getItem("userInfo", "loggedIn"));
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let item = { ...this.state.item };
    item[name] = value;
    this.setState({ item });
  }

  handleLogin = (event) => {
    event.preventDefault();
    const { item } = this.state;
    axios
      .post("http://localhost:9002/api/auth/login", item)
      .then((res) => {
        console.log(res.data);
        const customer = JSON.stringify(res.data.customer);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userInfo", customer);
        if (localStorage.getItem("userInfo") != null) {
          this.setState({
            loggedIn: localStorage.setItem("loggedIn", true),
            dataSending: false,
            redirection: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    event.preventDefault();
  };

  render() {
    const { redirection } = this.state;
    if (redirection) {
      //Affichage de la redirection
      return <Redirect to="/dashboard/accueil" />;
    }
    return (
      <>
        <main>
          <div
            className="preloader bg-dark flex-column justify-content-center align-items-center"
            style={{ display: "none" }}
          >
            <div className="position-relative">
              <img
                src="../assets/img/brand/light-without-letter.svg"
                alt="Logo loader"
              />{" "}
              <img
                src="../assets/img/brand/letter.svg"
                className="rotate-letter"
                alt="Letter loader"
              />
            </div>
          </div>
          <section
            className="min-vh-107 d-flex align-items-center section-image overlay-soft-dark py-5 py-lg-0"
            data-background="https://demo.themesberg.com/spaces/assets/img/form-image.jpg"
            style={{
              backgroundImage:
                'url("https://demo.themesberg.com/spaces/assets/img/form-image.jpg")',
            }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12">
                  <div className="text-center text-md-center mb-5 mt-md-0 text-white">
                    <h1 className="mb-0 h3">
                      Connectez-vous à notre plateforme
                    </h1>
                  </div>
                </div>
                <div className="col-12 d-flex align-items-center justify-content-center">
                  <div className="signin-inner mt-3 mt-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                    <form onSubmit={this.handleLogin}>
                      <div className="form-group">
                        <label htmlFor="email">Votre Adresse Email</label>
                        <div className="input-group mb-4">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <span className="fas fa-envelope" />
                            </span>
                          </div>
                          <input
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="example@company.com"
                            type="text"
                            aria-label="email address"
                            required
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-group">
                          <label htmlFor="password">Mot de passe</label>
                          <div className="input-group mb-4">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <span className="fas fa-unlock-alt" />
                              </span>
                            </div>
                            <input
                              className="form-control"
                              id="password"
                              placeholder="Mot de passe"
                              type="password"
                              name="password"
                              aria-label="Password"
                              required
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue
                              id="remember"
                            />{" "}
                            <label
                              className="form-check-label"
                              htmlFor="remember"
                            >
                              Se souvenir de moi
                            </label>
                          </div>
                          <div>
                            <NavLink
                              to="/auth/forgot-password"
                              className="small text-right"
                            >
                              Mot de passe oublié ?
                            </NavLink>
                          </div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-block btn-primary"
                      >
                        Connectez-vous
                      </button>
                    </form>
                    <div className="d-block d-sm-flex justify-content-center align-items-center mt-4">
                      <span className="font-weight-normal">
                        Vous n'êtes pas enregistré ?{" "}
                        <NavLink to="/auth/signup" className="font-weight-bold">
                          Créez un compte
                        </NavLink>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default SignIn;
