import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavItemsMobile from "./Sidebar/NavItems/NavItemsMobile";

class SidebarMobile extends Component {
  render() {
    return (
      <>
        <div className="col-12 d-lg-none">
          <div className="card bg-white border-light mb-4 mb-lg-5">
            <div className="card-body">
              <div className="row align-items-center">
                <NavItemsMobile />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SidebarMobile;
