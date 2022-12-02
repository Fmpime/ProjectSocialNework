import { profileAPI, userAPI } from "../API/Api";
import { fetchingRegulatorActionCreator } from "./FindUserReducer";

const ADD_POST = "PROFILE/ADD-POST";
const SET_USER_PROFILE = "PROFILE/SET-USER-PROFILE";
const SET_STATUS = "PROFILE/SET-STATUS";
const FETCHING_REGULATOR = "PROFILE/FETCHING-REGULATOR";

type postItemType = {
  postBody:string
  postHead:string
}
export type profileStateType = {
  _postItemData: Array<postItemType>,
  profile: {
    aboutMe: string,
    photos: {
      small:string|null
      large:string|null
    } | null,
    fullName: string,
    userId: null|number
  }
  isFetching: boolean,
  status: string,
};
let initialState:profileStateType = {
  _postItemData: [],
  profile: {
    aboutMe: "",
    photos: { small: "", large: "" },
    fullName: "",
    userId: null,
  },
  isFetching: true,
  status: "status",
};
const profileReducer = (state=initialState, action:any):profileStateType => {
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
        status: action.status,
      };
    }
    default:
      return state;
  }
};
export type addPostActionCreatorType = {
  type: typeof ADD_POST
  post: object
}
export const addPostActionCreator = (post:object):addPostActionCreatorType=> {
  return { type: ADD_POST, post };
};

export type setUserProfileActionCreatorType = {
  type: typeof SET_USER_PROFILE
  profile: object
}

export const setUserProfileActionCreator = (profile:object):setUserProfileActionCreatorType => {
  return { type: SET_USER_PROFILE, profile };
};

export type setStatusActionCreatorType = {
  type: typeof SET_STATUS
  status: string
}

export const setStatusActionCreator = (status:string): setStatusActionCreatorType=> {
  return { type: SET_STATUS, status };
};

export const getUserProfileThunkAC = (userId:number) => {
  return (dispatch:any) => {
    dispatch(fetchingRegulatorActionCreator(true));
    userAPI.getUserProfile(userId).then((data) => {
      dispatch(fetchingRegulatorActionCreator(false));
      dispatch(setUserProfileActionCreator(data));
    });
  };
};
export const getStatusThunkAC = (userId:number) => {
  return (dispatch:any) => {
    profileAPI.getStatus(userId).then((status) => {
      dispatch(updateStatusThunkAC(status));
    });
  };
};
export const updateStatusThunkAC = (status:string) => {
  return (dispatch:any) => {
    return profileAPI.updateStatus(status).then(response=>{
      dispatch(setStatusActionCreator(status))
    });
  };
};
export const setProfileInfoThunkCreator = (
  photo:object,
  aboutMe:string,
  lookingForAJob:boolean,
  lookingForAJobDescription:string,
  fullName:string,
  userId:number
) => {
  return (dispatch:any) => {
    profileAPI.updatePhoto(photo).then(() => {
    profileAPI.updateProfileInfo(aboutMe,lookingForAJob,lookingForAJobDescription,fullName).then(() => {
        userAPI.getUserProfile(userId).then((data) => {
          dispatch(setUserProfileActionCreator(data));
        });
      });
    });};
};
export default profileReducer;
