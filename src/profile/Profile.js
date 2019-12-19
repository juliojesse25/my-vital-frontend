import React from "react";

import "./Profile.scss";

function Profile(res) {
  return (
    <div className="profile">
      <p>NAME: {res.user.name}</p>
      <p>EMAIL: {res.user.email}</p>
      <p>LAST LOGIN: {res.user.last_login}</p>
      <p>NUMBER OF LOGINS: {res.user.sessions_count}</p>
    </div>
  );
}

export default Profile;
