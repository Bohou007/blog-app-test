import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminRoutes from "../../AdminRoutes";
import Loader from "../loader/Loader";
import Dashboard from "../backOffice/Dashboard";
import Sidebar from "./Layouts/Header/Sidebar/Sidebar";
import SidebarMobile from "./Layouts/Header/SidebarMobile";
import Navigation from "../layouts/header/Navigation";

import "../../assets/css/app.css";

class Backend extends Component {
  render() {
    let bg = "#242E4C";
    const AdminRoute = AdminRoutes.map((route, index) => {
      return route.component ? (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          name={route.name}
          render={(props) => <route.component {...props} />}
        />
      ) : null;
    });
    return (
      <>
        <Navigation props={this.props} bgColor={bg} />{" "}
        <div className="section section-lg pt-5">
          <div className="row col-md-12 pt-md-0">
            {" "}
            {/* Side bar App */} <Sidebar /> {/* End Side bar App */}{" "}
            {/* Side bar mobile */} <SidebarMobile />{" "}
            {/* End Side bar mobile */}{" "}
            <div className="col-md-9">
              <div className="container">
                <Suspense fallback={<Loader />}>
                  {" "}
                  {/* <BrowserRouter> */}{" "}
                  <Switch>
                    {" "}
                    {AdminRoute}{" "}
                    <Route
                      exact
                      path="/dashboard/accueil"
                      component={Dashboard}
                    />{" "}
                  </Switch>{" "}
                  {/* </BrowserRouter>{" "} */}{" "}
                </Suspense>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </>
    );
  }
}

export default Backend;
