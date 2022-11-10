import axios from "axios";
const instanse = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
});

export const profileAPI = {
  getUserProfile(userId) {
    return instanse.get("profile/" + userId).then((response) => {
      return response.data;
    });
  },
  getStatus(userId) {
    return instanse.get("profile/status/" + userId).then((response) => {
      return response.data; 
      
    });
  },
  updateStatus(status) {
    return instanse.put("profile/status",{status:status})
  },

};
export const userAPI = {
  getUserProfile(userId) {
    console.warn('invalide code. please use profileAPI')
    return profileAPI.getUserProfile(userId)
  },
  getUsers(currentPage, pageSize) {
    return instanse
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(id) {
    return instanse.post(`follow/` + id, null).then((response) => {
      return response.data;
    });
  },
  unfollow(id) {
    return instanse.delete(`follow/` + id).then((response) => {
      return response.data;
    });
  },
};
export const headerAPI = {
  authMe() {
      return instanse.get(`auth/me`).then((response) => {
      if(response.data.resultCode===0){
      return response.data;}else {return 0}
    });
  },
  login(formData) {
      return instanse.post(`auth/login`,{...formData}).then((response) => {
        console.log(response);
      if(response.data.resultCode===0){
      return response;}
    });
  },
};
