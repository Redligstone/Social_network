import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import { setUserProfile, getProfile,getStatus,updateStatus,savePhoto,saveProfile } from '../../../redux/profile_reducer';
import { Navigate, useMatch, useParams } from 'react-router-dom'
import { withAuthRedirect } from '../../../HOC/withAuthRedirect';
import { compose } from 'redux';






class ProfileContainer extends React.Component {

    refreshProfile(){
        let userId = this.props.match.params.userId;
        if (!userId){
            userId=this.props.authorizedUserId;
            if(!userId){
                this.props.history.push('/login')
            }
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
        
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState,snapshot) {
        debugger
        if(this.props.match.params.userId != prevProps.match.params.userId){
            this.refreshProfile()
            console.log(this.props)
        }
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} isOwner={!this.props.match.params.userId} savePhoto={this.props.savePhoto} saveProfile={this.props.saveProfile}/>
        )
    }

}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth:state.auth.isAuth, 
    status: state.profilePage.status,
    authorizedUserId:state.auth.userId,
})

export function withRouter(Component) {
    return (props) => {

        const match = { params: useParams() };
        return <Component {...props} match={match} />
    }
}


export default compose(
    connect(mapStateToProps, {
        setUserProfile,getProfile, getStatus, updateStatus,savePhoto, saveProfile
    }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);




// export function withRouter(Component) {
//     return (props) => {

//         const match = { params: useParams() };
//         return <Component {...props} match={match} />
//     }
// }


// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, {
//     setUserProfile,getProfile
// })(WithUrlDataContainerComponent)