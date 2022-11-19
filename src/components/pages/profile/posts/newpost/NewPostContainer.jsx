
import { connect } from "react-redux";
import {
  addPostActionCreator,
} from "../../../../../redux/ProfileReducer";
import NewPost from "./NewPost";

const mapStateToProps = (state) =>{
  return{
    newPostHead: state.profile._newPostHead,
    newPostContent: state.profile._newPostContent,
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    addPost: (post) => {
      dispatch(addPostActionCreator(post));
    },
  }
}

const NewPostContainer = connect(mapStateToProps,mapDispatchToProps)(NewPost)

export default NewPostContainer;
