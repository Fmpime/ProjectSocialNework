
import { authMeThunkCreator } from "./AuthReducer.jsx";
const INICIALIZED = "INICIALIZED";
let initialState = {
  inicialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INICIALIZED:
      return {
        ...state,
        inicialized: true,
      };
    default:
      return state;
  }
};
export const setInicializedActionCreator = () => {
  return { type: INICIALIZED };
};

export const inicializedThunkCreator = () => {
  return (dispatch) => {
    let ispatchiez=dispatch(authMeThunkCreator())
    ispatchiez.then((response)=>{
      dispatch(setInicializedActionCreator());
    })
  };
};
export default appReducer;
