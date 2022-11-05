import { headerAPI } from "../API/Api.js";
const SET_USER_DATA = "SET-USER-DATA";
const FETCHING_REGULATOR = "FETCHING-REGULATOR";
let initialState = {
  data: {
    id: null,
    email: null,
    login: null,
    isAuth:false,
  },

};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_REGULATOR:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case SET_USER_DATA:
      return {
        ...state,
        data:{...action.data,isAuth:true,},
      };
    default:
      return state;
  }
};
export const setUserDataActionCreator = (data) => {
  return { type: SET_USER_DATA, data };
};
export const fetchingRegulatorActionCreator = (isFetching) => {
  return { type: FETCHING_REGULATOR, isFetching: isFetching };
};

export const authMeThunkCreator=()=>{
  return (dispatch)=>{
    dispatch(fetchingRegulatorActionCreator(true))
    headerAPI.authMe().then((data) => {
      if (data){
      dispatch(fetchingRegulatorActionCreator(false));
      dispatch(setUserDataActionCreator(data))
      }})}}


export default authReducer;
