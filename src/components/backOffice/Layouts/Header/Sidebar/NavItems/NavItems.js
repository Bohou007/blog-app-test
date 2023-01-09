import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import BackMenusItems from "../../../../../../BackMenusItems";

class NavItems extends Component {
  render() {
    const AdminContent = BackMenusItems.items.map((route, index) => {
      return (
        <NavLink
          to={route.url}
          key={index}
          className="d-flex list-group-item border-0 list-group-item-action"
        >
          {route.title}
          <span className="icon icon-xs ml-auto">
            <span className="fas fa-chevron-right" />
          </span>{" "}
        </NavLink>
      );
    });
    return (
      <div className="card-body p-2">
        <div className="list-group dashboard-menu list-group-sm">
          {AdminContent}
        </div>
      </div>
    );
  }
}

export default NavItems;
