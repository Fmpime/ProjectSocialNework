const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATER_MESSAGE = "UPDATER-MESSAGE";

let initialState = {
  _myId: 2,
  _messageData: [
    { _userId: 2, _id: "1", _message: "rodine ya ne nuzhen" },
    { _userId: 1, _id: "2", _message: "sila v pravde" },
    { _userId: 2, _id: "3", _message: "ya livay parni" },
    { _userId: 1, _id: "4", _message: "lublu cocks" },
    { _userId: 2, _id: "5", _message: "lesha i zhopa toscja" },
  ],
  _newMessage: "",
  _dialogsData: [
    { _id: "1", _name: "pasha Durov" },
    { _id: "2", _name: "Sacha Beliy" },
    { _id: "3", _name: "Kiril ustyan" },
    { _id: "4", _name: "Masha Medova" },
    { _id: "5", _name: "Lyosha Makarov" },
  ],
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        _userId: 2,
        _id: "1",
        _message: state._newMessage,
      };
      return {
        ...state,
        _messageData: [...state._messageData, { ...newMessage }],
        _newMessage: "",
      };
    }
    case UPDATER_MESSAGE:
      return {
        ...state,
        _newMessage: action.newMessage,
      };
    default:
      return state;
  }
};
export const addMessageActionCreator = () => {
  return { type: ADD_MESSAGE };
};
export const ubtaterMessageActionCreator = (message) => {
  return { type: UPDATER_MESSAGE, newMessage: message };
};
export default messageReducer;
