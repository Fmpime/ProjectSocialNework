
import { connect } from "react-redux";
import {
  addPostActionCreator, addPostActionCreatorType,
} from "../../../../../redux/ProfileReducer";
import NewPost from "./NewPost";

const mapStateToProps = (state: { profile: { _newPostHead: any; _newPostContent: any; }; }) => {
  return {
    newPostHead: state.profile._newPostHead,
    newPostContent: state.profile._newPostContent,
  }
}
const mapDispatchToProps = (dispatch: (arg0: addPostActionCreatorType) => void) =>{
  return{
    addPost: (post: object) => {
      dispatch(addPostActionCreator(post));
    },
  }
}

const NewPostContainer = connect(mapStateToProps,mapDispatchToProps)(NewPost)

export default NewPostContainer;
