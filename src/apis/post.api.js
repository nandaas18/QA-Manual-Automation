import axiosInstance from "../libs/axiosInstance.js";

export function post_single_post(id) {
  return axiosInstance.post("/users/" + id);
}

export function post_all_post() {
  return axiosInstance.post("/users");
}
