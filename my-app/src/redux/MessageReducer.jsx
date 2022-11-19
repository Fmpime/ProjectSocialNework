import { dialogAPI, userAPI } from "../API/Api";

const UPDATE_DIALOG_DATA = "dialog/UPDATE-DIALOG-DATA";
const SET_DIALOG_LIST = "dialog/SET-DIALOG-LIST";
let initialState = {
  _myId: null,
  _messageData: [],
  _newMessage: "",
  _dialogsData: [],
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DIALOG_DATA: {
      if (action.data.length !== state._dialogsData.length) {
        return {
          ...state,
          _dialogsData: [...action.data],
        };
      } else return { ...state };
    }
    case SET_DIALOG_LIST: {
      
      let newMessages = []
      action.data.items.map((el,index)=>{
        return newMessages[index]={
        addedAt:el.addedAt,
        body:el.body,
        id:el.id,
        recipientId:el.recipientId,
        senderId:el.senderId,
        senderName:el.senderName,
        translatedBody:el.translatedBody,
        viewed:el.viewed,
      }
      })
      return {
        ...state,
        _messageData: [...newMessages],
      };
    }
    default:
      return state;
  }
};
export const setDialogListActionCreator = (data) => {
  return { type: SET_DIALOG_LIST, data };
};
export const updateDialogData = (data) => {
  return { type: UPDATE_DIALOG_DATA, data };
};
export const updataDialogThunkCreator = () => {
  return (dispatch) => {
    dialogAPI.getDialogs().then((data) => {
      if (data.length) {
        dispatch(updateDialogData(data));
      }
    });
  };
};
export const startDialogThunkCreator = (id) => {
  return (dispatch) => {
    userAPI.followed(id).then((response) => {
      if (response) {
        dialogAPI.startDialogWithFriend(id).then((response) => {
          dialogAPI.getDialogs().then((data) => {
            if (data.length !== 0) dispatch(updateDialogData(data));
          });
        });
      } else {
        return "you are not friend";
      }
    });
  };
};
export const getDialogListThunkCreator = (id) => {
  return (dispatch) => {
    dialogAPI.getDialogList(id).then((response) => {
      dispatch(setDialogListActionCreator(response.data));
    });
  };
};
export const postMessageInListThunkCreator = (id,message) => {
  return (dispatch) => {
    dialogAPI.postMessageInList(id,message).then((res)=>{
      dialogAPI.getDialogList(id).then((response) => {
        dispatch(setDialogListActionCreator(response.data));
      });
    })
  }
};
export default messageReducer;
