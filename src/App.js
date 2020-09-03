import React, {useEffect} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/";
import Home from "./pages/Home";
import Login from './pages/Login';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import {PrivateRoute} from './route/privateRouter'
import store from './redux/store';
import {Provider} from 'react-redux'
import "./App.scss";

function App() {
  useEffect(() => {
    if(sessionStorage.getItem('token') != null) {
      sessionStorage.clear('token'); 
    }
  })
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/login">
              <Login/>
            </Route>
            <PrivateRoute path="/profile/:id" component={Profile}/>
            <PrivateRoute path="/edit-profile/:id/" component={EditProfile}/>
            <Route path="/">
              <Home />
            </Route>
            <Route path="*">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
