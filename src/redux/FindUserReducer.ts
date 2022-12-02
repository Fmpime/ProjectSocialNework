import { userAPI } from "../API/Api";

const UNFOLLOW = "UNFOLLOW";
const FOLLOW = "FOLLOW";
const SET_FIND_USER = "SET-FIND-USER";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USER_COUNT = "SET-TOTAL-USER-COUNT";
const FETCHING_REGULATOR = "FETCHING-REGULATOR";
const BUTTON_DISABLER = "BUTTON-DISABLER"


let initialState = {
  _findUserData: [{}],
  pageSize: 10,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: true,
  disableStatus:false
};
export type findUserStateType = typeof initialState
const findUserReducer = (state = initialState, action:any):findUserStateType => {
  switch (action.type) {
    case BUTTON_DISABLER:
      return {
        ...state,
        _findUserData: state._findUserData.map((el:any) => {
          if (el.id === action.id) {
            return { ...el, disableStatus: action.disableStatus };
          } else return el;
        }),
        disableStatus: action.disableStatus,
      };
    case FETCHING_REGULATOR:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case SET_FIND_USER:
      return {
        ...state,
        _findUserData: [...action.users],
      };
    case FOLLOW:
      return {
        ...state,
        _findUserData: state._findUserData.map((el:any) => {
          if (el.id === action.userId) {
            return { ...el, followed: true };
          } else return el;
        }),
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USER_COUNT:
      return {
        ...state,
        totalUserCount: action.totalCount,
      };
    case UNFOLLOW:
      return {
        ...state,
        _findUserData: state._findUserData.map((el:any) => {
          if (el.id === action.userId) {
            return { ...el, followed: false };
          } else return el;
        }),
      };
    default:
      return state;
  }
};

export type followActionCreatorType = {
  type: typeof FOLLOW
  userId:number
}

export const followActionCreator = (userId:number):followActionCreatorType => {
  return { type: FOLLOW, userId: userId };
};
export type unfollowActionCreatorType = {
  type: typeof UNFOLLOW
  userId:number
}
export const unfollowActionCreator = (userId:number):unfollowActionCreatorType => {
  return { type: UNFOLLOW, userId: userId };
};

export type setUserActionCreatorType = {
  type: typeof SET_FIND_USER
  users: Array<object>
}
export const setUserActionCreator = (users:Array<object>):setUserActionCreatorType => {
  return { type: SET_FIND_USER, users: users };
};
export type setCurrenPageActionCreatorType = {
  type: typeof SET_CURRENT_PAGE
  currentPage:number
}
export const setCurrenPageActionCreator = (currentPage:number):setCurrenPageActionCreatorType => {
  return { type: SET_CURRENT_PAGE, currentPage: currentPage };
};
export type setUsersTotalCountActionCreatorType = {
  type: typeof SET_TOTAL_USER_COUNT
  totalCount:number
}
export const setUsersTotalCountActionCreator = (totalCount:number) => {
  return { type: SET_TOTAL_USER_COUNT, totalCount: totalCount };
};
export type fetchingRegulatorActionCreatorType = {
  type: typeof FETCHING_REGULATOR
  isFetching:boolean
}
export const fetchingRegulatorActionCreator = (isFetching:boolean) => {
  return { type: FETCHING_REGULATOR, isFetching };
};
export const buttonDisablerActionCreator = (id:number,disableStatus:boolean) => {
  return { type: BUTTON_DISABLER,id,disableStatus };
};

export const getUsersThunkCreator=(currentPage:number,pageSize:number)=>{
return (dispatch:any)=>{
  dispatch(fetchingRegulatorActionCreator(true));
  userAPI.getUsers(currentPage,pageSize)
      .then((data) => {
        dispatch(fetchingRegulatorActionCreator(false));
        dispatch(setUserActionCreator(data.items));
        dispatch(setUsersTotalCountActionCreator(data.totalCount));
})}}
export const followThunkCreator=(id:number)=>{
return (dispatch:any)=>{
  userAPI.follow(id)
    .then((data)=>{
      dispatch(buttonDisablerActionCreator(id,false))
      if(data.resultCode===0){
        dispatch(followActionCreator(id));
        
      }
    })}}
export const unfollowThunkCreator=(id:number)=>{
return (dispatch:any)=>{
  userAPI.unfollow(id)
    .then((data)=>{
      dispatch(buttonDisablerActionCreator(id,false))
      if(data.resultCode===0){
        dispatch(unfollowActionCreator(id));
      }
    })}}



export default findUserReducer;
