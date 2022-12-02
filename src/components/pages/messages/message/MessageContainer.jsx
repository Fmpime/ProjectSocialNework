
import Message from "./Message";
import React, { useEffect } from 'react'
import { getDialogListThunkCreator, postMessageInListThunkCreator,
} from "../../../../redux/MessageReducer";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";



function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}


const mapStateToProps = (state) =>{
  return{
      myId: state.auth.data.id,
      messagesData:state.messages._messageData,
      authUserPhoto: {small:state.profile.profile.photos.small}
      
  }}


const MessageContainer = (props) =>{
  let ChatId = props.router.params.userId
    useEffect(() => {
        let ChatId = props.router.params.userId
        props.getDialogListThunkCreator(ChatId)
    }, [ChatId,]);
    

    return(
      <Message {...props} ChatId={ChatId} />
    )
  }

export default connect(mapStateToProps,{
  getDialogListThunkCreator,
  postMessageInListThunkCreator,
})(withRouter(MessageContainer));