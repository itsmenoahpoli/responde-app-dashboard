import { axiosInstance } from "./axios.service";

export default class EmergencySmsTemplatesService {
  constructor() {
    this.apiURL = "/emergency-sms-templates";
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
