import { dialogAPI, userAPI } from "../API/Api";

const UPDATE_DIALOG_DATA = "dialog/UPDATE-DIALOG-DATA";
const SET_DIALOG_LIST = "dialog/SET-DIALOG-LIST";

type messageDataType = {
  id:number
  message: string
}
type dialogsDataType = {
  id:number
  name: string
}

let initialState = {
  _myId: null,
  _messageData: [] as Array<messageDataType>,
  _newMessage: "",
  _dialogsData: []as Array<dialogsDataType>,
};
export type initialStateType = typeof initialState

const messageReducer = (state = initialState, action:any) => {
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
      
      let newMessages:Array<any> = []
      action.data.items.map((el:any,index:number)=>{
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

export type setDialogListActionCreatorType ={
  type : typeof SET_DIALOG_LIST
  data: object
}


export const setDialogListActionCreator = (data:object):setDialogListActionCreatorType => {
  return { type: SET_DIALOG_LIST, data };
};
export type updateDialogDataType = {
  type: typeof UPDATE_DIALOG_DATA
  data: Array<object>
}

export const updateDialogData = (data:Array<object>):updateDialogDataType => {
  return { type: UPDATE_DIALOG_DATA, data };
};
export const updataDialogThunkCreator = () => {
  return (dispatch:any) => {
    dialogAPI.getDialogs().then((data) => {
      if (data.length) {
        dispatch(updateDialogData(data));
      }
    });
  };
};
export const startDialogThunkCreator = (id:number) => {
  return (dispatch:any) => {
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
export const getDialogListThunkCreator = (id:number) => {
  return (dispatch:any) => {
    dialogAPI.getDialogList(id).then((response) => {
      dispatch(setDialogListActionCreator(response.data));
    });
  };
};
export const postMessageInListThunkCreator = (id:number,message:string) => {
  return (dispatch:any) => {
    dialogAPI.postMessageInList(id,message).then((res)=>{
      dialogAPI.getDialogList(id).then((response) => {
        dispatch(setDialogListActionCreator(response.data));
      });
    })
  }
};

export default messageReducer;
