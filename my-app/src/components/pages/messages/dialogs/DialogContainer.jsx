
import { connect } from "react-redux";
import Dialog from "./Dialog";



const mapStateToProps = (state) =>{
  return{
    dialogsData: state.messages._dialogsData
  }
}

const DialogContainer = connect(mapStateToProps,{})(Dialog)

export default DialogContainer;