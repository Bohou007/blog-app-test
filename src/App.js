import React, { Component, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import Loader from "./components/loader/Loader";
import AuthRoutes from "./AuthRoutes";
import ProtectedRoute from "./components/protectRoutes/ProtectedRoute";

const LayoutApp = Loadable({
  loader: () => import("./components/layouts/LayoutApp"),
  loading: Loader,
});

const Backend = Loadable({
  loader: () => import("./components/backOffice/Backend"),
  loading: Loader,
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: localStorage.getItem("loggedIn"),
      currentUser: localStorage.getItem("loggedIn"),
    };
  }

  render() {
    const AuthRoute = AuthRoutes.map((route, index) => {
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
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Switch>
            {" "}
            {AuthRoute} {/* <Route path="/admin" component={Admin} /> */}{" "}
            <ProtectedRoute
              path="/dashboard"
              loggedIn={this.state.loggedIn}
              component={Backend}
            />
            <Route path="/" component={LayoutApp} />{" "}
          </Switch>{" "}
        </BrowserRouter>{" "}
      </Suspense>
    );
  }
}

export default App;
