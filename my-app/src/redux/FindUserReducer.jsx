const UNFOLLOW = "UNFOLLOW";
const FOLLOW = "FOLLOW";
const SET_FIND_USER = "SET-FIND-USER";

let initialState = {
  _findUserData: [],
};

const findUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIND_USER:
      return {
        ...state,
        _findUserData: [...state._findUserData, ...action.users],
      };
    case FOLLOW:
      return {
        ...state,
        _findUserData: state._findUserData.map((el) => {
          if (el.id === action.userId) {
            return { ...el, followed: false };
          } else return el;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        _findUserData: state._findUserData.map((el) => {
          if (el.id === action.userId) {
            return { ...el, followed: true };
          } else return el;
        }),
      };
    default:
      return state;
  }
};
export const followActionCreator = (userId) => {
  return { type: FOLLOW, userId: userId };
};
export const unfollowActionCreator = (userId) => {
  return { type: UNFOLLOW, userId: userId };
};
export const setUserActionCreator = (users) => {
  return { type: SET_FIND_USER, users: users };
};

export default findUserReducer;
