import { AuthProvider } from "ra-core";
import config from "./config";
import httpClient from "./httpClient";

interface LoginRequest {
  email: string;
  password: string;
}

const authProvider: AuthProvider = {
  // Send username and password to the auth server and get back credentials
  async login({ email, password }: LoginRequest) {
    const { json } = await httpClient(`${config.baseUrl}/auth/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    localStorage.setItem("token", json.token);
  },

  // Check if an error from the dataProvider indicates an authentication issue
  async checkError(error) {
    if (error.status === 401 || error.status === 403)
      throw new Error("ra.auth.auth_check_error");
  },

  // Verify that the user's credentials are still valid during navigation
  async checkAuth() {
    const token = localStorage.getItem("token");
    if (token) {
      return;
    }
    throw new Error("ra.auth.auth_check_error");
  },

  // Remove local credentials and notify the auth server of the logout
  async logout() {
    localStorage.removeItem("token");
  },

  // Retrieve the user's profile
  async getIdentity() {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found");
    }

    const { json } = await httpClient(`${config.baseUrl}/auth/me`, {
      method: "GET",
    });

    return json;
  },

  // // (Optional) Check if the user has permission for a specific action on a resource
  // async canAccess() {
  //   /** ... **/
  // },
};

export default authProvider;
