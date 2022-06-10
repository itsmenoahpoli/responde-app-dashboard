import { axiosInstance } from "./axios.service";

export default class EmergencySosService {
  constructor() {
    this.apiURL = "/emergency-sos";
  }

  async getAll() {
    let response = await axiosInstance().get(this.apiURL);

    return response;
  }

  async getById(id) {
    let response = await axiosInstance().get(this.apiURL + "/" + id);

    return response;
  }
}
