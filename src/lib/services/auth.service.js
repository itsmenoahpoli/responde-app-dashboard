import { axiosInstance } from "./axios.service";

export default class AuthService {
  constructor() {
    this.apiURL = "/auth";
  }

  async userLogin(credentials) {
    let response = await axiosInstance().post(
      this.apiURL + "/login",
      credentials
    );

    return response;
  }
}
