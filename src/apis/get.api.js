import axiosInstance from "../libs/axiosInstance.js";

export function get_single_post(id) {
  return axiosInstance.get("/users/" + id);
}

export function get_all_post() {
  return axiosInstance.get("/users");
}
