import messageReducer from "./MessageReducer";
import profileReducer from "./ProfileReducer";
const store = {
  _state : {
    renderEntireThree(){
      console.log('render is cngratulation');
    },
    _profile: {
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
    },
  
    _messages: {
      _myId: 2,
      _messageData: [
        { _userId: 2, _id: "1", _message: "rodine ya ne nuzhen" },
        { _userId: 1, _id: "2", _message: "sila v pravde" },
        { _userId: 2, _id: "3", _message: "ya livay parni" },
        { _userId: 1, _id: "4", _message: "lublu cocks" },
        { _userId: 2, _id: "5", _message: "lesha i zhopa toscja" },
      ],
      _newMessage:"",
      _dialogsData: [
        { _id: "1", _name: "pasha Durov" },
        { _id: "2", _name: "Sacha Beliy" },
        { _id: "3", _name: "Kiril ustyan" },
        { _id: "4", _name: "Masha Medova" },
        { _id: "5", _name: "Lyosha Makarov" },
      ],
      
      getNewMessage(){
        return this._newMessage;
      },
      getMessagesData(){
        return this._messageData;
      },
      getDialogsData(){
        return this._dialogsData;
      },
    },
    getProfile(){
      return this._profile;
    },
    getMessages(){
      return this._messages;
    },
  },
  getState(){
    return this._state;
  },
  subscribe(observer){
    this._state.renderEntireThree=observer;
  },
  dispatch(action){
    this._state._profile= profileReducer(this._state._profile,action)
    this._state._messages= messageReducer(this._state._messages,action)
    store._state.renderEntireThree(store);
  }


};



export default store;
