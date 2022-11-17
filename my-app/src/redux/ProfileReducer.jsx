import { profileAPI, userAPI } from "../API/Api";
import { fetchingRegulatorActionCreator } from "./FindUserReducer";

const ADD_POST = "PROFILE/ADD-POST";
const SET_USER_PROFILE = "PROFILE/SET-USER-PROFILE";
const SET_STATUS = "PROFILE/SET-STATUS";
const FETCHING_REGULATOR = "PROFILE/FETCHING-REGULATOR";
let initialState = {
  _postItemData: [
  ],
  profile: {
    aboutMe: "",
    photos: { small: "", large: "" },
    fullName: "",
    userId: null,
  },
  isFetching: true,
  status:'status',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_REGULATOR:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case ADD_POST: {
      let newPost = {
        _id: 4,
        postBody: action.post.postBody,
        postHead: action.post.postHead,
        _date: Date(),
        _likes: "0",
      };
      return {
        ...state,
        _postItemData: [...state._postItemData, { ...newPost }],
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status:action.status,
      };
    }
    default:
      return state;
  }
};
export const addPostActionCreator = (post) => {
  return { type: ADD_POST , post};
};
export const setUserProfileActionCreaor = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};
export const setStatusActionCreator = (status) => {
  return { type: SET_STATUS, status };
};

export const getUserProfileThunkAC = (userId) => {
  return (dispatch) => {
    dispatch(fetchingRegulatorActionCreator(true));
    userAPI.getUserProfile(userId).then((data) => {
      dispatch(fetchingRegulatorActionCreator(false));
      dispatch(setUserProfileActionCreaor(data));
    });
    
  };
};
export const getStatusThunkAC = (userId) => {
  return (dispatch) => {
     profileAPI.getStatus(userId).then((status) => {
      dispatch(setStatusActionCreator(status));
    });
  };
};
export const updateStatusThunkAC = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status)
  }
};
export const setProfilePhotoThunkCreator = (photo,aboutMe,lookingForAJob,lookingForAJobDescription,fullName,userId) => {
  return (dispatch) => {
    profileAPI.updatePhoto(photo).then((response)=>{console.log(response)})
    profileAPI.updateProfileInfo(aboutMe,lookingForAJob,lookingForAJobDescription,fullName).then(()=>{
      userAPI.getUserProfile(userId).then((data) => {
        dispatch(setUserProfileActionCreaor(data))
    })
    
  })
}}
export default profileReducer;
