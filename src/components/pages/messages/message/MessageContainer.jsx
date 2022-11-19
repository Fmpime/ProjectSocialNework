
import Message from "./Message";
import React from 'react'
import {getDialogListThunkCreator, postMessageInListThunkCreator,
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


class MessageContainer extends React.Component{
  componentDidMount() {
    const ChatId = this.props.router.params.userId
    this.props.getDialogListThunkCreator(ChatId)
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.router.params.userId!== this.props.router.params.userId){
    const ChatId = this.props.router.params.userId
    this.props.getDialogListThunkCreator(ChatId)}
  }
  render(){
    const ChatId = this.props.router.params.userId
    return(
      <Message {...this.props} ChatId={ChatId} />
    )
  }
}

export default connect(mapStateToProps,{
  getDialogListThunkCreator,
  postMessageInListThunkCreator,
})(withRouter(MessageContainer));