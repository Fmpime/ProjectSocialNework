const UNFOLLOW = "UNFOLLOW";
const FOLLOW = "FOLLOW";
const SET_FIND_USER = "SET-FIND-USER";
const SET_CURRENT_PAGE= "SET-CURRENT-PAGE"
const SET_TOTAL_USER_COUNT= "SET-TOTAL-USER-COUNT"

let initialState = {
  _findUserData: [],
  pageSize:10,
  totalUserCount:0,
  currentPage:6,
};

const findUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIND_USER:
      return {
        ...state,
        _findUserData: [ ...action.users],
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
export const setCurrenPageActionCreator = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage: currentPage };
};
export const setUsersTotalCountActionCreator = (totalCount) => {
  return { type: SET_TOTAL_USER_COUNT, totalCount: totalCount };
};

export default findUserReducer;
