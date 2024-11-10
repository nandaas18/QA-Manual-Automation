import axiosInstance from "../libs/axiosInstance.js";

export function delete_single_post(id) {
  return axiosInstance.delete("/users/" + id);
}

export function delete_all_post() {
  return axiosInstance.delete("/users");
}
