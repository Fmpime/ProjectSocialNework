
import { connect } from 'react-redux';
import PostArrow from './PostArrow';

const mapStateToProps = (state) =>{
    return{
        postItemData:state.profile._postItemData,
    }
  }
const PostArrowContainer = connect(mapStateToProps,null)(PostArrow)

export default PostArrowContainer;
