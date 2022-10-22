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
          <img src={props.state._img} alt="qwe" />
          <place>
            {props.state._Country},{props.state._State}
          </place>
        </div>
        <div className={classes.user_profile_info_text}>
          <h4>{props.state._NickName}</h4>
          <p>{props.state._userStaus}</p>
        </div>
      </div>
      {props.state._followStatus
        ?<button onClick={()=>follow(props.state._id)}>follow</button>
        :<button onClick={()=>unfollow(props.state._id)}>unfollow</button>
        }
    </div>
  );
};

export default UserProfileItem;
