import { connect } from "react-redux";
import { followActionCreator, setUserActionCreator, unfollowActionCreator } from "../../../../redux/FindUserReducer";
import UserProfileItems from "./UserProfileItems";

const mapStateToProps = (state) =>{
    return{
        findUserData:state.findUser._findUserData
    }
  }
  const mapDispatchToProps = (dispatch) =>{

    return{
      unfollow:(userId) =>{dispatch(unfollowActionCreator(userId));},
      follow:(userId) =>{dispatch(followActionCreator(userId));},
      setUsers:(users)=>{dispatch(setUserActionCreator(users));},
    }
  }
  
  const findUserProfileItemsContainer = connect(mapStateToProps,mapDispatchToProps)(UserProfileItems)
  
  export default findUserProfileItemsContainer;