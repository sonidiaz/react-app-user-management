import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header/";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";
import { PrivateRoute } from "../route/privateRouter";
import { connect } from "react-redux";

const AppRoute = ({ isAuth }) => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/profile/:id" auth={isAuth} component={Profile} />
          <PrivateRoute
            path="/edit-profile/:id/"
            auth={isAuth}
            component={EditProfile}
          />
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const mapSateToProps = (state) => ({ isAuth: state.userInfo.isAuth });

export default connect(mapSateToProps)(AppRoute);
