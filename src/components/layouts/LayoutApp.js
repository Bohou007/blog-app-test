import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

import Navigation from "./header/Navigation";
import Footer from "./footer/Footer";
import Loader from "../loader/Loader";
import AppRoutes from "../../AppRoutes";
import HomePage from "../../pages/Home";

class LayoutApp extends Component {
  render() {
    const menu = AppRoutes.map((route, index) => {
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
        <Navigation props={this.props} />

        <main>
          <div className="">
            <Suspense fallback={<Loader />}>
              <Switch>
                {menu}
                <Route exact path="/" component={HomePage} />
              </Switch>
            </Suspense>
          </div>
        </main>

        <Footer />
      </>
    );
  }
}

export default LayoutApp;
