
import Message from "./Message";
import React, { useEffect } from 'react'
import { getDialogListThunkCreator, postMessageInListThunkCreator,
} from "../../../../redux/MessageReducer";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";



function withRouter(Component: any) {
  function ComponentWithRouterProp(props: JSX.IntrinsicAttributes) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}


const mapStateToProps = (state: { auth: { data: { id: any; }; }; messages: { _messageData: any; }; profile: { profile: { photos: {small:string}; }; }; }) =>{
  return{
      myId: state.auth.data.id,
      messagesData:state.messages._messageData,
      authUserPhoto: {small:state.profile.profile.photos.small}
      
  }}


const MessageContainer = (props:{router:{params:any}, messagesData: any[]; myId: number; authUserPhoto: { small: string; large: string; }; postMessageInListThunkCreator: (arg0: number, arg1: string) => void; ChatId: number; getDialogListThunkCreator:(arg:number)=>void;}) =>{
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