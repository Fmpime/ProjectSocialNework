import { configureStore} from '@reduxjs/toolkit';
import appReducer from './AppReducer';
import authReducer from './AuthReducer';
import findUserReducer from './FindUserReducer';
import messageReducer from "./MessageReducer";
import profileReducer from "./ProfileReducer";


let store = configureStore({
    reducer:{
    profile:profileReducer,
    messages:messageReducer,
    findUser:findUserReducer,
    auth:authReducer,
    app: appReducer,
    }
});
window.store=store
export default store;