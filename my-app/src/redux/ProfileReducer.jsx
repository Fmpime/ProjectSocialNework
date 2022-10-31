const ADD_POST = "ADD-POST";
const UPDATER_HEAD = "UPDATER-HEAD";
const UPDATER_CONTENT = "UPDATER-CONTENT";
const SET_USER_PROFILE = "SET-USER-PROFILE"
const FETCHING_REGULATOR = "FETCHING-REGULATOR";
let initialState = {
  _postItemData: [
    {
      _id: "1",
      _content:
        "daite mne belie crilya va utopayu v imute hcherex trrni  i provoffs v nrbo  toks nr muchicsd",
      _heading: "filmi dla detey",
      _likes: "12",
    },
    {
      _id: "2",
      _content:
        "daite chto za jizni doktor tema  i provoffs v nrbo  toks nr muchicsd",
      _heading: "faerery",
      _likes: "13",
    },
    {
      _id: "3",
      _content: "ya lubly nuchego ne delatn",
      _heading: "vwfwr dla wrrr",
      _likes: "123",
    },
  ],
  _newPostHead: "",
  _newPostContent: "",
  profile:{aboutMe:'',photos:{small:'',large:''},fullName:'NickName',userId:'1'},
  isFetching: true,
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
        _content: state._newPostContent,
        _heading: state._newPostHead,
        _date: Date(),
        _likes: "0",
      };
      return {
        ...state,
        _postItemData: [...state._postItemData,  {...newPost} ],
        _newPostContent: "",
        _newPostHead: "",
      };
    }
    case UPDATER_CONTENT: {
      return {
        ...state,
        _newPostContent: action.newContent,
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case UPDATER_HEAD: {
      return {
        ...state,
        _newPostHead: action.newHead,
      };
    }
    default:
      return state;
  }
};
export const addPostActionCreator = () => {
  return { type: ADD_POST };
};

export const updaterHeadActionCreator = (heading) => {
  return { type: UPDATER_HEAD, newHead: heading };
};
export const updaterContentActionCreator = (content) => {
  return { type: UPDATER_CONTENT, newContent: content };
};
export const setUserProfileActionCreaor = (profile) => {
  return { type: SET_USER_PROFILE,  profile };
};
export const fetchingRegulatorActionCreator = (isFetching) => {
  return { type: FETCHING_REGULATOR, isFetching: isFetching };
};

export default profileReducer;
