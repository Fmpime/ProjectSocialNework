import { headerAPI } from "../API/Api.js";
const SET_USER_DATA = "SET-USER-DATA";
const FETCHING_REGULATOR = "FETCHING-REGULATOR";
const SET_CAPTCHA= "SET-CAPTCHA"
let initialState = {
  data: {
    id: null,
    email: null,
    login: null,
    isAuth: false,
  },
  captcha:null,
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
        data: { ...action.data.data, isAuth: action.data.isAuth },
      };
    case SET_CAPTCHA:
      return {
        ...state,
        captcha: action.url.url ,
      };
    default:
      return state;
  }
};
export const setUserDataActionCreator = (data, isAuth) => {
  return { type: SET_USER_DATA, data: { data, isAuth } };
};
export const setCaptchaActionCreator = (url) => {
  return { type: SET_CAPTCHA, url };
};
export const fetchingRegulatorActionCreator = (isFetching) => {
  return { type: FETCHING_REGULATOR, isFetching: isFetching };
};

export const authMeThunkCreator = () => async (dispatch) => {
   
      dispatch(fetchingRegulatorActionCreator(true));
      const data = await headerAPI.authMe();
  dispatch(fetchingRegulatorActionCreator(false));
  if (data.resultCode === 0) {
    dispatch(setUserDataActionCreator(data.data, true));
  } else {
    dispatch(
      setUserDataActionCreator(
        { id: null, email: null, login: null },
        false
      )
    );
  }
  };
export const loginThunkCreator = (formData,setUserWasNotFound,setCaptcha) => {
  return (dispatch) => {
    headerAPI.login(formData).then((response) => {
      if (response !== 1 && response !== 10) {
        setUserWasNotFound(false)
        headerAPI.authMe().then((data) => {
          if (data.resultCode === 0) {
            dispatch(fetchingRegulatorActionCreator(false));
            dispatch(setUserDataActionCreator(data.data, true));
          } else {
            dispatch(
              setUserDataActionCreator(
                { id: null, email: null, login: null },
                false
              )
            );
          }
        });
      }else if(response=== 1 ){
        setUserWasNotFound(true)
      }
      else{
        setCaptcha(true)
        headerAPI.getCaptcha().then((url)=>{
          dispatch(setCaptchaActionCreator(url))})
      }
    });
  };
};
export const logoutThunkCreator = () => {
  return (dispatch) => {
    headerAPI.logout().then((response) => {
      headerAPI.authMe().then((data) => {
        if (data.resultCode === 0) {
          dispatch(fetchingRegulatorActionCreator(false));
          dispatch(setUserDataActionCreator(data.data, true));
        } else {
          dispatch(
            setUserDataActionCreator(
              { id: null, email: null, login: null },
              false
            )
          );
        }
      });
    });
  };
};
export const captchaThunkCreator = ()=>{
  return (dispatch)=>{
    headerAPI.getCaptcha().then((url)=>{
      dispatch(setCaptchaActionCreator(url))
    })
  }
}
export default authReducer;
