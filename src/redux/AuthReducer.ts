import {headerAPI} from "../API/Api.js";

const SET_USER_DATA = "SET-USER-DATA";
const FETCHING_REGULATOR = "FETCHING-REGULATOR";
const SET_CAPTCHA = "SET-CAPTCHA"


export type authStateType = {
    data: {
        id: number | null,
        email: string | null,
        login: string | null,
        isAuth: boolean,
    },
    captcha: string | null,
    isFetching: boolean
}


let initialState: authStateType = {
    data: {
        id: null,
        email: null,
        login: null,
        isAuth: false,
    },
    captcha: null,
    isFetching: false
};
const authReducer = (state = initialState, action:any):authStateType => {
    switch (action.type) {
        case FETCHING_REGULATOR:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case SET_USER_DATA:
            debugger
            return {
                ...state,
                data: {...action.data.data, isAuth: action.data.isAuth},
            };
        case SET_CAPTCHA:
            return {
                ...state,
                captcha: action.url.url,
            };
        default:
            return state;
    }
};
export type setUserDataActionCreatorType ={
    type: typeof SET_USER_DATA
    data: {
        data: object
        isAuth: boolean
    }
}
export const setUserDataActionCreator = (data:object, isAuth:boolean):setUserDataActionCreatorType => {
    return {type: SET_USER_DATA, data: {data, isAuth}};
};

export type setCaptchaActionCreatorType = {
    type: typeof SET_CAPTCHA
    url: string
}

export const setCaptchaActionCreator = (url:string):setCaptchaActionCreatorType => {
    return {type: SET_CAPTCHA, url};
};

export type fetchingRegulatorActionCreatorType ={
    type: typeof FETCHING_REGULATOR
    isFetching: boolean
}

export const fetchingRegulatorActionCreator = (isFetching:boolean):fetchingRegulatorActionCreatorType => {
    return {type: FETCHING_REGULATOR, isFetching: isFetching};
};

export const authMeThunkCreator = () => async (dispatch:any) => {

    dispatch(fetchingRegulatorActionCreator(true));
    const data = await headerAPI.authMe();
    dispatch(fetchingRegulatorActionCreator(false));
    if (data.resultCode === 0) {
        dispatch(setUserDataActionCreator(data.data, true));
    } else {
        dispatch(
            setUserDataActionCreator(
                {id: null, email: null, login: null},
                false
            )
        );
    }
};
export const loginThunkCreator = (formData:object, setUserWasNotFound: (arg0: boolean) => void, setCaptcha: (arg0: boolean) => void) => {
    return (dispatch:any) => {
        headerAPI.login(formData).then((response) => {
            if (response !== 1 && response !== 10) {
                setUserWasNotFound(false)
                headerAPI.authMe().then((data) => {
                    if (data.resultCode === 0) {
                        dispatch(fetchingRegulatorActionCreator(false));
                        dispatch(setUserDataActionCreator(data.data, true));
                    } else {
                        dispatch(
                            setUserDataActionCreator(
                                {id: null, email: null, login: null},
                                false
                            )
                        );
                    }
                });
            } else if (response === 1) {
                setUserWasNotFound(true)
            } else {
                setCaptcha(true)
                headerAPI.getCaptcha().then((url) => {
                    dispatch(setCaptchaActionCreator(url))
                })
            }
        });
    };
};
export const logoutThunkCreator = () => {
    return (dispatch:any) => {
        headerAPI.logout().then((response) => {
            headerAPI.authMe().then((data) => {
                if (data.resultCode === 0) {
                    dispatch(fetchingRegulatorActionCreator(false));
                    dispatch(setUserDataActionCreator(data.data, true));
                } else {
                    dispatch(
                        setUserDataActionCreator(
                            {id: null, email: null, login: null},
                            false
                        )
                    );
                }
            });
        });
    };
};
export const captchaThunkCreator = () => {
    return (dispatch:any) => {
        headerAPI.getCaptcha().then((url) => {
            dispatch(setCaptchaActionCreator(url))
        })
    }
}
export default authReducer;
