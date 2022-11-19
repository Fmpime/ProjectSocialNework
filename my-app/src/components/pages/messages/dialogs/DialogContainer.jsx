
import { connect } from "react-redux";
import { updataDialogThunkCreator } from "../../../../redux/MessageReducer";
import Dialog from "./Dialog";



const mapStateToProps = (state) =>{
  return{
    dialogsData: state.messages._dialogsData
  }
}

const DialogContainer = connect(mapStateToProps,{updataDialogThunkCreator})(Dialog)

export default DialogContainer;