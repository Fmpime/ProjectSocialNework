export const getFindUser = (state) => {
    return  state.findUser._findUserData;
}
export const getPageSize = (state) => {
    return  state.findUser.pageSize;
}
export const getTotalUserCount = (state) => {
    return state.findUser.totalUserCount;
}
export const getCurrentPage = (state) => {
    return state.findUser.currentPage;
}
export const getIsFetching = (state) => {
    return state.findUser.isFetching;
}