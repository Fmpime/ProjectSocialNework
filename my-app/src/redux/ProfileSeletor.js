export const getProfile = (state) => {
    return  state.profile.profile;
}
export const getStatus = (state) => {
    return  state.profile.status;
}
export const getLoginedUserId = (state) => {
    return state.auth.data.id;
}