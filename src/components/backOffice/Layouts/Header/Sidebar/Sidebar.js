import React, { Component } from "react";
import Headnavbar from "./NavItems/HeadNavbar";
import NavItems from "./NavItems/NavItems";

class Sidebar extends Component {
  render() {
    return (
      <>
        <div className="col-md-3">
          <div className=" d-none d-lg-block block-sidebar-h">
            <div className="card border-light p-2 block-sidebar">
              <Headnavbar />
              <NavItems />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Sidebar;
