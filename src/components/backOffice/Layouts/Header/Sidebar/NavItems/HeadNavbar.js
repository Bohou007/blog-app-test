import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import userIcon from "../../../../../../assets/images/user-icon.png";

class Headnavbar extends Component {
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
  }

  render() {
    return (
      <>
        <div className="card-header bg-white border-0 text-center">
          <div className="profile-thumbnail profile-thumbnail mx-auto">
            <img
              src={userIcon}
              className="card-img-top rounded-circle border-white"
              alt="Joseph Portrait"
            />
          </div>
          <h2 className="h5 mt-3">
            {this.state.currentUser.lastName +
              " " +
              this.state.currentUser.firstName}
          </h2>
          <NavLink to="#" className="btn btn-gray btn-xs">
            <span className="mr-2">
              <span className="fas fa-sign-out-alt" />
            </span>
            Sign Out
          </NavLink>
        </div>
      </>
    );
  }
}

export default Headnavbar;
