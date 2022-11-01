import axios from "axios";
const instanse = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
});

export const getUserProfile = (userId) => {
  return instanse.get("profile/" + userId).then((response) => {
    return response.data;
  });
};
export const getUsers = (currentPage,pageSize) => {
  return instanse
    .get(`users?page=${currentPage}&count=${pageSize}`)
    .then((response) => {
      return response.data;
    });
};
export const follow = (id) => {
  return instanse
  .post(`follow/`+id, null)
    .then((response) => {
      return response.data;
    });
};
export const unfollow = (id) => {
  return instanse
  .delete(`follow/`+id)
    .then((response) => {
      return response.data;
    });
};
