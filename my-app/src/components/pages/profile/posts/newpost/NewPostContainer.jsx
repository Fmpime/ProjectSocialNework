
import { connect } from "react-redux";
import {
  addPostActionCreator,
  updaterContentActionCreator,
  updaterHeadActionCreator,
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
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    updaterHeadF: (heading) => {
      dispatch(updaterHeadActionCreator(heading));
    },
    updaterContentF: (content) => {
      dispatch(updaterContentActionCreator(content));
    },
  }
}

const NewPostContainer = connect(mapStateToProps,mapDispatchToProps)(NewPost)

export default NewPostContainer;
