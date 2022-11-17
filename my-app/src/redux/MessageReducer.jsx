const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
  _myId: 2,
  _messageData: [

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
        _message: action.message,
      };
      return {
        ...state,
        _messageData: [...state._messageData, { ...newMessage }],
        _message: "",
      };
    }
    default:
      return state;
  }
};
export const addMessageActionCreator = (message) => {
  return { type: ADD_MESSAGE, message };
};
export default messageReducer;
