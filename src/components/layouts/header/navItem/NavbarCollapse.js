import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";

class NavbarCollapse extends Component {
    render() {
        return (
            <div className="navbar-collapse-header">
                    <div className="row">
                        <div className="col-6 collapse-brand">
                            <NavLink to="/accueil">
                                <img src="../../../../assets/img/dark.svg" alt="Logo dark"/>
                            </NavLink>
                        </div>
                        <div className="col-6 collapse-close">
                            <NavLink to="#navbar_global" className="fas fa-times" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" title="close" aria-label="Toggle navigation">

                            </NavLink>
                        </div>
                    </div>
                </div>
        );
    }
}

export default NavbarCollapse;