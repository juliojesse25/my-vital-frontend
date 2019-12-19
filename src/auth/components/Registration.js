import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { registration, login } from "../api";
import messages from "../messages";

class Registration extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    };
  }

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    });

  onSignUp = event => {
    event.preventDefault();

    const { alert, history, setUser } = this.props;

    registration(this.state)
      .then(() => login(this.state))
      .then(res => setUser(res.data.user))
      .then(() => alert(messages.registrationSuccess, "success"))
      .then(() => history.push("/profile"))
      .catch(error => {
        console.error(error);
        this.setState({ email: "", password: "", passwordConfirmation: "" });
        alert(messages.registrationFailure, "danger");
      });
  };

  render() {
    const { name, email, password, passwordConfirmation } = this.state;
    return (
      <form className="auth-form" onSubmit={this.onSignUp}>
        <h3>Register</h3>

        <label htmlFor="name">Name</label>
        <input
          required
          name="name"
          value={name}
          type="name"
          placeholder="Name"
          onChange={this.handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          required
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        <label htmlFor="passwordConfirmation">Confirm Password</label>
        <input
          required
          name="passwordConfirmation"
          value={passwordConfirmation}
          type="password"
          placeholder="Confirm Password"
          onChange={this.handleChange}
        />
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default withRouter(Registration);
