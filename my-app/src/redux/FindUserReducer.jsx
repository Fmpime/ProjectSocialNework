const UNFOLLOW = "UNFOLLOW";
const FOLLOW = "FOLLOW";
const SET_FIND_USER = "SET-FIND-USER";

let initialState = {
  _findUserData: [
    {
      _id: 0,
      _NickName: "NickName",
      _Country: "Country",
      _State: "State",
      _img: "https://bain.design/wp-content/uploads/2014/08/People-Avatar-Set-Rectangular-12.jpg",
      _followStatus: false,
      _userStaus: "i hate job",
    },
    {
      _id: 1,
      _NickName: "NickName",
      _Country: "Country",
      _State: "State",
      _img: "https://bain.design/wp-content/uploads/2014/08/People-Avatar-Set-Rectangular-12.jpg",
      _followStatus: true,
      _userStaus: "i hate job",
    },
    {
      _id: 2,
      _NickName: "NickName",
      _Country: "Country",
      _State: "State",
      _img: "https://bain.design/wp-content/uploads/2014/08/People-Avatar-Set-Rectangular-12.jpg",
      _followStatus: false,
      _userStaus: "i hate too",
    },
    {
      _id: 3,
      _NickName: "NickName",
      _Country: "Country",
      _State: "State",
      _img: "https://bain.design/wp-content/uploads/2014/08/People-Avatar-Set-Rectangular-12.jpg",
      _followStatus: true,
      _userStaus: " job is hell",
    },
    {
      _id: 4,
      _NickName: "NickName",
      _Country: "Country",
      _State: "State",
      _img: "https://bain.design/wp-content/uploads/2014/08/People-Avatar-Set-Rectangular-12.jpg",
      _followStatus: true,
      _userStaus: "i not working",
    },
  ],
};

const findUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FIND_USER:
      return {
        ...state,
        _findUserData: action.users
      };
    case FOLLOW:
      return {
        ...state,
        _findUserData: state._findUserData.map((el) => {
            if (el._id === action.userId) {
              return {...el,
                        _followStatus:false,
              }
            }else return el;
          })
        };
    case UNFOLLOW:
      return {
        ...state,
        _findUserData: state._findUserData.map((el) => {
            if (el._id === action.userId) {
              return {...el,
                        _followStatus:true,
              }
            }else return el;
          }),
        };
    default:
      return state;
  }
};
export const followActionCreator = (userId) => {
  return { type: FOLLOW, userId:userId };
};
export const unfollowActionCreator = (userId) => {
  return { type: UNFOLLOW, userId:userId };
};
export const setUserActionCreator = (users) => {
  return { type: SET_FIND_USER , users:users};
};

export default findUserReducer;
