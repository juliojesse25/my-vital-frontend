import { Component } from "react";
import { withRouter } from "react-router-dom";

import { logout } from "../api";
import messages from "../messages";

class Logout extends Component {
  componentDidMount() {
    const { alert, history, clearUser, user } = this.props;

    logout(user)
      .finally(() => alert(messages.signOutSuccess, "success"))
      .finally(() => history.push("/sessions"))
      .finally(() => clearUser());
  }

  render() {
    return "";
  }
}

export default withRouter(Logout);
