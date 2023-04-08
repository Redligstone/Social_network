import { usersAPI } from "../API/API";
import { updateObjectInArray } from "../components/utilits/helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                // users: updateObjectInArray(state.users,action.userId,'id',{followed:true })
                
                
                users:state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                // users: updateObjectInArray(state.users,action.userId,'id',{followed: false })
                
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state;
    }

}

export const followSucces = (userId) => {
    return { type: FOLLOW, userId }
}
export const unfollowSucces = (userId) => {
    return { type: UNFOLLOW, userId }
}
export const setUsers = (users) => {
    return { type: SET_USERS, users }
}
export const setCurrentPage = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage: currentPage }
}
export const setTotalUsersCount = (totalCount) => {
    return { type: SET_TOTAL_USERS_COUNT, totalUsersCount: totalCount }
}
export const setToggleIsFetching = (isFetching) => {
    return { type: TOGGLE_IS_FETCHING, isFetching }
}
export const setToggleFollowingProgress = (isFetching, userId) => {
    return { type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId }
}

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setToggleIsFetching(true));
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setToggleIsFetching(false));
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))

    }
}

const followUnfollowFlow = async (userId,dispatch,usersApiAction,userIdAction,truth) =>{
    dispatch(setToggleFollowingProgress(truth, userId))
        let response = await usersApiAction(userId)
        if (response.data.resultCode == 0) {
            dispatch(userIdAction(userId))
        }
        dispatch(setToggleFollowingProgress(false, userId))
}

export const follow = (userId) => {
    return  (dispatch) => {
        followUnfollowFlow(userId,dispatch, usersAPI.followUsers,followSucces,true)
    }
}

export const unfollow = (userId) => {
    return  (dispatch) => {
        followUnfollowFlow(userId,dispatch,usersAPI.unfollowUsers,unfollowSucces,false)
    }
}

export default usersReducer;