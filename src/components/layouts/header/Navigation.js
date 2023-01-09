import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./navItem/NavItem";
import NavLogo from "./navLogo/NavLogo";
import userIcon from "../../../assets/images/user-icon.png";
import BackMenusItems from "../../../BackMenusItems";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: [],
    };
  }

  componentDidMount() {
    if (localStorage.getItem("userInfo") != null) {
      this.setState({
        currentUser: JSON.parse(localStorage.getItem("userInfo")),
      });
    }
    console.log(this.state.currentUser);
  }

  render() {
    const AdminContentDropdown = BackMenusItems.itemsDropdown.map(
      (route, index) => {
        return (
          <NavLink to={route.url} key={index} className="dropdown-item">
            {route.title}
          </NavLink>
        );
      }
    );
    let newClass = this.props.bgColor ? "headroom--not-top" : "";
    let classNav =
      "navbar navbar-main sticky-top navbar-main-fixe navbar-expand-lg navbar-theme-primary headroom navbar-light " +
      newClass +
      " navbar-theme-secondary";

    let notLogin = (
      <div className="isLogin">
        <NavLink
          to="/auth/signin"
          className="btn btn-outline-primary   mr-md-3 animate-up-2"
        >
          Connexion <i class="fas fa-sign-in-alt ml-2"></i>
        </NavLink>
        <NavLink
          to="/auth/signup"
          className="btn btn-md btn-primary text-white  animate-up-2"
        >
          Inscription
          <i class="fas fa-user-plus  ml-2  "></i>
        </NavLink>
      </div>
    );
    let isLogin = (
      <div className="btn-group mr-2 mb-2">
        <button
          type="button"
          className="btn blog-btn-primary dropdown-toggle dropdown-toggle-split"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i class="fas fa-user mr-2"></i>

          <span>
            {this.state.currentUser.lastName +
              " " +
              this.state.currentUser.firstName}{" "}
          </span>
          {/* <img
            className="user-icon"
            width="40"
            height="40"
            src={userIcon}
            alt=""
          /> */}
          <span className="sr-only">Toggle Dropdown</span>
        </button>
        <div className="dropdown-menu" style={{}}>
          {AdminContentDropdown}

          {/* log out */}
          <div className="dropdown-divider" />
          <NavLink className="dropdown-item" to="/log-out">
            Deconnection
          </NavLink>
        </div>
      </div>
    );
    let userStatus = localStorage.getItem("loggedIn") ? isLogin : notLogin;
    return (
      <>
        <header className="header-global mb-7" id="home">
          <nav
            id="navbar-main"
            aria-label="Primary navigation"
            className={classNav}
          >
            <div className="container position-relative">
              <NavLogo />
              <NavItem />

              <div className="d-flex align-items-center">
                <div className="isLogin">{userStatus}</div>

                <button
                  className="navbar-toggler ml-2"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbar_global"
                  aria-controls="navbar_global"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default Navigation;
