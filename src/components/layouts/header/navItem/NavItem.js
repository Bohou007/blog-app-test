import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import NavbarCollapse from './NavbarCollapse';
import AppRoutes from '../../../../FrontMenuItems';

class NavItem extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {}
    
    render() {

        const mainContent = AppRoutes.items.map((route, index) => {
            return (
              <li className="nav-item" key={index}>
                <NavLink to={route.url} className="nav-link ">
                    {route.title}
                </NavLink>
              </li>
            );
          });

        return (
            <div className="navbar-collapse collapse mr-auto" id="navbar_global">
                <NavbarCollapse/>
                <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
                    {mainContent}
                </ul>
            </div>
        );
    }
}

export default NavItem;