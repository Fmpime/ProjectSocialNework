import { configureStore} from '@reduxjs/toolkit';
import messageReducer from "./MessageReducer";
import profileReducer from "./ProfileReducer";


let store = configureStore({
    reducer:{
    profile:profileReducer,
    messages:messageReducer,
    }
});

export default store;