
import { connect } from 'react-redux';
import PostArrow from './PostArrowContainer';

const mapStateToProps = (state) =>{
    return{
        postItemData:state.profile._postItemData,
    }
  }
  const mapDispatchToProps = (dispatch) =>{
    
  }
  

const PostArrowContainer = connect(mapStateToProps,mapDispatchToProps)(PostArrow)

export default PostArrowContainer;
