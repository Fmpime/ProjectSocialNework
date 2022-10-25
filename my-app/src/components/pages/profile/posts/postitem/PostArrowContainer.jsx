
import { connect } from 'react-redux';
import PostArrow from './PostArrow';

const mapStateToProps = (state) =>{
    return{
        postItemData:state.profile._postItemData,
    }
  }
  const mapDispatchToProps = (dispatch) =>{
    
  }
  

const PostArrowContainer = connect(mapStateToProps,mapDispatchToProps)(PostArrow)

export default PostArrowContainer;
