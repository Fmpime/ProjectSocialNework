import React from "react";
import UserProfileItem from "./userprofileitem/UserProfileItem";
import axios from "axios";
import classes from './../FindUser.module.css'
class UserProfileItems extends React.Component {
    componentDidMount(){axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
    this.props.setUsers(response.data.items)
    })   
  }
  render(){
  return (
    <div>
      <div className={classes.User_profile_box}>
      {this.props.findUserData.map((state) => {
        return (
            <UserProfileItem
              state={state}
              unfollow={this.props.unfollow}
              follow={this.props.follow}
            />
        );
      })}
      </div>
      <button
      onClick={this.setUsersFunc}
      >JXDN</button>
    </div>
  );}
};

export default UserProfileItems;
