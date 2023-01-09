import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import BackMenusItemsMobile from "../../../../../../BackMenusItemsMobile";

class NavItemsMobile extends Component {
  render() {
    const AdminContent = BackMenusItemsMobile.items.map((route, index) => {
      return (
        <NavLink
          to={route.url}
          key={index}
          className="list-group-item list-group-item-action border-0 text-center mr-2 d-none d-sm-block border-0"
        >
          {route.title}
        </NavLink>
      );
    });
    const AdminContentDropdaone = BackMenusItemsMobile.itemsMobile.map(
      (route, index) => {
        return (
          <NavLink
            to={route.url}
            key={index}
            className="list-group-item list-group-item-action border-0"
          >
            {route.title}
          </NavLink>
        );
      }
    );
    return (
      <>
        <div class="col-10 d-flex">{AdminContent}</div>

        <div className="col-2 d-flex justify-content-center">
          <div className="btn-group dropleft">
            <button
              className="btn btn-link dropdown-toggle dropdown-toggle-split mr-2 m-0 p-0"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="icon icon-sm">
                <span className="fas fa-ellipsis-h icon-secondary fa-lg" />
              </span>
              <span className="sr-only">Toggle Dropdown</span>
            </button>
            <div className="dropdown-menu">{AdminContentDropdaone}</div>
          </div>
        </div>
      </>
    );
  }
}

export default NavItemsMobile;
