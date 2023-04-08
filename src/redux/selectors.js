import { createSelector } from "reselect"

export const getUsersSelector = (state) =>{
    return state.usersPage.users
}
export const pageSize = (state) =>{
    return  state.usersPage.pageSize
}
export const totalUsersCount = (state) =>{
    return state.usersPage.totalUsersCount
}
export const Page = (state) =>{
    return state.usersPage.currentPage
}
export const  isFetching = (state) =>{
    return state.usersPage.isFetching
}
export const followingInProgress = (state) =>{
    return state.usersPage.followingInProgress
}


export const getUsers = createSelector(getUsersSelector,(users) => {
    return users;
})