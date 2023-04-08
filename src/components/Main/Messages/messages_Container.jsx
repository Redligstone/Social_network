import { connect } from 'react-redux/es/exports';
import { updateNewMessageActionCreator, addMessageActionCreator,addImage } from '../../../redux/messages_reducer';
import Messages from './messages';

import { withAuthRedirect } from '../../../HOC/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) =>{
    return{
        messagesPage: state.messagesPage,
        isAuth:state.auth.isAuth,  
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        
        addMessage:(newMessageText)=>{dispatch(addMessageActionCreator(newMessageText));},
        addImage:(image)=>{dispatch(addImage(image));},
    }
}
export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Messages)

