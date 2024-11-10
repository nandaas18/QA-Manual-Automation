import axiosInstance from "../libs/axiosInstance.js";

export function update_single_post(id) {
  return axiosInstance.put("/users/" + id);
}

export function update_all_post() {
  return axiosInstance.put("/users");
}
