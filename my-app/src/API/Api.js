import axios from "axios";
const instanse = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
});

export const profileAPI = {
  async getUserProfile(userId) {
    const response = await instanse.get("profile/" + userId);
    return response.data;
  },
  async getStatus(userId) {
    const response = await instanse.get("profile/status/" + userId);
    return response.data;
  },
  updateStatus(status) {
    return instanse.put("profile/status", { status: status });
  },
  updatePhoto(photo){
    return instanse.put("profile/photo" , photo,{headers:{
    'Content-Type': 'multipart/form-data'
    }});
},
  updateProfileInfo(aboutMe,lookingForAJob,lookingForAJobDescription,fullName){
    return instanse.put("profile" , { 
      aboutMe,
      lookingForAJob,
      lookingForAJobDescription,
      fullName,
    });
},}
export const userAPI = {
  getUserProfile(userId) {
    console.warn("invalide code. please use profileAPI");
    return profileAPI.getUserProfile(userId);
  },
  async getUsers(currentPage, pageSize) {
    const response = await instanse
      .get(`users?page=${currentPage}&count=${pageSize}`);
    return response.data;
  },
  async follow(id) {
    const response = await instanse.post(`follow/` + id, null);
    return response.data;
  },
  async unfollow(id) {
    const response = await instanse.delete(`follow/` + id);
    return response.data;
  },
};
export const headerAPI = {
  async authMe() {
    const response = await instanse.get(`auth/me`);
    if (response.data.resultCode === 0) {
      return response.data;
    } else {
      return 1;
    }
  },
  async login(formData) {
    const response = await instanse.post(`auth/login`, { ...formData });
    if (response.data.resultCode === 0) {
      return response;
    } else if (response.data.resultCode === 10) {
      return 10;
    } else if (response.data.resultCode) {
      return 1;
    }
  },
  async logout(formData) {
    const response = await instanse.delete(`auth/login`);
    if (response.data.resultCode === 0) {
      return response;
    }
  },
  async getCaptcha() {
    const response = await instanse.get(`security/get-captcha-url`);
    if (response.status === 200) {
      return response.data;
    }
  },
};
