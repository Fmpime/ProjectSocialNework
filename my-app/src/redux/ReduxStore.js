import { configureStore} from '@reduxjs/toolkit';
import findUserReducer from './FindUserReducer';
import messageReducer from "./MessageReducer";
import profileReducer from "./ProfileReducer";


let store = configureStore({
    reducer:{
    profile:profileReducer,
    messages:messageReducer,
    findUser:findUserReducer,
    }
});
window.store=store
export default store;