
import { connect } from 'react-redux/es/exports';
import { addPostActionCreator,updateNewPostActionCreator } from '../../../../../redux/profile_reducer';
import NewPost from './new_post';

let mapStateToProps = (state) =>{
    return{
        newPostText: state.profilePage.newPostText,
        profile:state.profilePage.profile,
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        updateNewPostText:(text)=>{dispatch(updateNewPostActionCreator(text))},
        addNewPost:(newPostText)=>{dispatch(addPostActionCreator(newPostText));}
    }
}

const NewPostContainer = connect(mapStateToProps,mapDispatchToProps)(NewPost)

export default NewPostContainer