import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import logo_dark from "../../../../assets/images/logo-anative-blog-back.png";
import logo_light from "../../../../assets/images/logo-anative-blog.png";
class NavLogo extends Component {
  render() {
    return (
      <>
        <NavLink className="navbar-brand mr-lg-4" to="/accueil">
          <img className="navbar-brand-dark" src={logo_dark} alt="Logo light" />
          <img
            className="navbar-brand-light"
            src={logo_light}
            alt="Logo dark"
          />
        </NavLink>{" "}
      </>
    );
  }
}

export default NavLogo;
