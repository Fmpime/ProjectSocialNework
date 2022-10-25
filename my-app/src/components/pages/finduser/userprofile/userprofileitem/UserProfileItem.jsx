import React from "react";
import classes from "./../../FindUser.module.css";
const UserProfileItem = (props) => {
    const follow=(id)=>{
        props.follow(id)
        
    }
    const unfollow=(id)=>{
        props.unfollow(id)
    }
  return (
    <div className={classes.user__profile__item}>
      <div className={classes.user_profile_info}>
        <div>
          <img src={
            props.state.photos.small != null
            ?props.state.photos.small
            :"https://bain.design/wp-content/uploads/2014/08/People-Avatar-Set-Rectangular-12.jpg"}
            alt="qwe" />
          <place>
            Country,
            State
          </place>
        </div>
        <div className={classes.user_profile_info_text}>
          <h4>{props.state.name}</h4>
          <p>{props.state.status}</p>
        </div>
      </div>
      {props.state.followed
        ?<button onClick={()=>follow(props.state.id)}>unfollow</button>
        :<button onClick={()=>unfollow(props.state.id)}>follow</button>
        }
    </div>
  );
};

export default UserProfileItem;
