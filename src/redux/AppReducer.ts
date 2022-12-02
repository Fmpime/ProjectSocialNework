import { authMeThunkCreator } from "./AuthReducer";
const INICIALIZED = "INICIALIZED";


type applStateType ={
  inicialized: boolean
}
let initialState: applStateType = {
  inicialized: false,
};

const appReducer = (state = initialState, action: { type: any; }):applStateType => {
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
export type SetInicializedActionCreator = {
    type: typeof INICIALIZED
}
export const setInicializedActionCreator = () :SetInicializedActionCreator => {
  return { type: INICIALIZED };
};

export const inicializedThunkCreator = () => {
  return (dispatch: any) => {
    let dispatchiez = dispatch(authMeThunkCreator());
    dispatchiez.then((response: any) => {
      dispatch(setInicializedActionCreator());
    });
  };
};
export default appReducer;
