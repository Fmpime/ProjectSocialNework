import { connect } from "react-redux";
import { followActionCreator, setCurrenPageActionCreator, setUserActionCreator, setUsersTotalCountActionCreator, unfollowActionCreator } from "../../../../redux/FindUserReducer";
import UserProfileItemsClass from "./UserProfileItemsClass";



const mapStateToProps = (state) =>{
    return{
        findUserData:state.findUser._findUserData,
        totalUserCount:state.findUser.totalUserCount,
        pageSize:state.findUser.pageSize,
        currentPage:state.findUser.currentPage,
    }
  }
  const mapDispatchToProps = (dispatch) =>{

    return{
      unfollow:(userId) =>{dispatch(unfollowActionCreator(userId));},
      follow:(userId) =>{dispatch(followActionCreator(userId));},
      setUsers:(users)=>{dispatch(setUserActionCreator(users));},
      setCurrenPage:(currenPage)=>{dispatch(setCurrenPageActionCreator(currenPage))},
      setTotalCount:(totalCount)=>{dispatch(setUsersTotalCountActionCreator(totalCount))

      }

    }
  }
  
  const findUserProfileItemsContainer = connect(mapStateToProps,mapDispatchToProps)(UserProfileItemsClass)
  
  export default findUserProfileItemsContainer;