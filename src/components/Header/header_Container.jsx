import React from 'react';
import Header from './header';
import { setAuthUserData, getAuthUserData,logout } from '../../redux/auth_reducer';
import { connect } from 'react-redux';



class HeaderContainer extends React.Component{
    // componentDidMount(){
    //     this.props.getAuthUserData(); 
    // }

    render(){
        return(  
            <Header {...this.props}/>
        )
    }
    
}
const mapStateToProps = (state) =>({
    isAuth:state.auth.isAuth,
    login:state.auth.login,
    profile:state.profilePage.profile,
})

export default connect(mapStateToProps,{setAuthUserData, getAuthUserData,logout})(HeaderContainer)