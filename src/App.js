import React, { Component } from "react";
import { Route } from "react-router-dom";
import AutoDismissAlert from "./AutoDismissAlert/AutoDismissAlert";

import AuthenticatedRoute from "./auth/components/AuthenticatedRoute";
import Registration from "./auth/components/Registration";
import Login from "./auth/components/Login";
import Logout from "./auth/components/Logout";
import Header from "./header/Header";
import Profile from "./profile/Profile";
import "./App.scss";

// import { AlertList } from "react-bs-notifier";

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null,
      alerts: []
      // timeout: 2000,
      // position: "bottom-left"
    };
  }

  setUser = user => this.setState({ user });

  clearUser = () => this.setState({ user: null });

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] });
  };

  render() {
    // const alert = useAlert();
    // const { alerts, user, timeout, position } = this.state;
    const { alerts, user } = this.state;
    return (
      <React.Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AutoDismissAlert
            key={index}
            heading={alert.heading}
            variant={alert.variant}
            message={alert.message}
          />
        ))}
        <main className="container">
          <Route
            path="/registrations"
            render={() => (
              <Registration alert={this.alert} setUser={this.setUser} />
            )}
          />
          <Route
            path="/sessions"
            render={() => <Login alert={this.alert} setUser={this.setUser} />}
          />
          <AuthenticatedRoute
            user={user}
            path="/logout"
            render={() => (
              <Logout
                alert={this.alert}
                clearUser={this.clearUser}
                user={user}
              />
            )}
          />

          <AuthenticatedRoute
            user={user}
            path="/profile"
            render={() => <Profile alert={this.alert} user={user} />}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
