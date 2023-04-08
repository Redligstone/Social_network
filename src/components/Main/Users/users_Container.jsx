import React from 'react';
import { connect } from 'react-redux/es/exports';
import { follow, setCurrentPage, setTotalUsersCount, setUsers, unfollow,setToggleIsFetching,setToggleFollowingProgress, getUsersThunkCreator } from '../../../redux/users_reducer';
import Users from './users';
import Preloader from '../../common/preloader/preloader';
import { withAuthRedirect } from '../../../HOC/withAuthRedirect';
import { compose } from 'redux';
import { followingInProgress, getUsers, isFetching, Page, pageSize, totalUsersCount } from '../../../redux/selectors';



class UsersClass extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber,this.props.pageSize)

    }

    render() {

        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    pageSize={this.props.pageSize}
                    users={this.props.users}
                    onPageChanged={this.onPageChanged}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    setToggleFollowingProgress={this.props.setToggleFollowingProgress}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: pageSize(state),
        totalUsersCount: totalUsersCount(state),
        currentPage: Page(state),
        isFetching: isFetching(state),
        followingInProgress:followingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,setToggleIsFetching,setToggleFollowingProgress, getUsers: getUsersThunkCreator
    }),
    withAuthRedirect,
)(UsersClass)


