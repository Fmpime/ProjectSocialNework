const ADD_POST = "ADD-POST";
const UPDATER_HEAD = "UPDATER-HEAD";
const UPDATER_CONTENT = "UPDATER-CONTENT";
let initialState = {
  _postItemData: [
      {_id: "1",
        _content:
          "daite mne belie crilya va utopayu v imute hcherex trrni  i provoffs v nrbo  toks nr muchicsd",
        _heading: "filmi dla etey",
        _likes: "12",
      },
      {_id: "2",
        _content:
          "daite chto za jizni doktor tema  i provoffs v nrbo  toks nr muchicsd",
        _heading: "faerery",
        _likes: "13",
      },
      {_id: "3",
        _content: "ya lubly nuchego ne delatn",
        _heading: "vwfwr dla wrrr",
        _likes: "123",
      },
    ],
    getPostItemData(){
      return this._postItemData;
    },
    _newPostHead: '',
    _newPostContent: '',
    getNewPostHead(){
      return this._newPostHead;
    },
    getNewPostContent(){
      return  this._newPostContent;
    },
}

const profileReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        _id: "4",
        _content: state._newPostContent,
        _heading: state._newPostHead,
        _date: Date(),
        _likes: "0",
      };
      state._postItemData.push(newPost);
      state._newPostContent = "";
      state._newPostHead = "";
      return state;
    case UPDATER_CONTENT:
      state._newPostContent = action.newContent;
      return state;
    case UPDATER_HEAD:
      state._newPostHead = action.newHead;
      return state;
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
export default profileReducer;
