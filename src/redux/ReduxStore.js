import { configureStore} from '@reduxjs/toolkit';
import profileReducer from "./ProfileReducer";
import messageReducer from "./MessageReducer";
import findUserReducer from "./FindUserReducer";
import appReducer from "./AppReducer";
import authReducer from "./AuthReducer";




let store = configureStore({
    reducer:{
    profile:profileReducer,
    messages:messageReducer,
    findUser:findUserReducer,
    auth:authReducer,
    app: appReducer,
    }
});
export default store;