import apiUrl from "../apiConfig";
import axios from "axios";

export const registration = credentials => {
  return axios({
    method: "POST",
    url: apiUrl + "/registrations",
    data: {
      user: {
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        password_confirmation: credentials.passwordConfirmation
      }
    }
  });
};

export const login = credentials => {
  console.log("login");
  return axios({
    url: apiUrl + "/sessions",
    method: "POST",
    data: {
      user: {
        email: credentials.email,
        password: credentials.password
      }
    }
  });
};

export const logout = user => {
  return axios({
    url: apiUrl + "/logout",
    method: "DELETE"
  });
};
