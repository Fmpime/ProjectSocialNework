
import { connect } from 'react-redux';
import NavbarFriends from './NavbarFriends';


const mapStateToProps = (state) =>{
    return{
        dialogsData:state.messages._dialogsData,
    }
  }
  const mapDispatchToProps = (dispatch) =>{
  }
  

const NavbarFriendsContainer = connect(mapStateToProps,mapDispatchToProps)(NavbarFriends)

export default NavbarFriendsContainer;
