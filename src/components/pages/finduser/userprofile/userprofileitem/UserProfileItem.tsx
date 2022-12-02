import React from "react";
import { Link } from "react-router-dom";
//@ts-ignore
import classes from "./../../FindUser.module.css";


const UserProfileItem = (props: { buttonDisabler: (arg0: number, arg1: boolean) => void; follow: (arg0: number) => void; unfollow: (arg0: number) => void; state: { id: number; photos:any ; name: string | null ; status: string|null|undefined; followed: boolean; disableStatus: boolean ; }; }) => {
  const follow = (id: number) => {
    props.buttonDisabler(id,true)
    props.follow(id);
  };
  const unfollow = (id: number) => {
    props.buttonDisabler(id,true)
    props.unfollow(id);
    
  };
  return (
    <div className={classes.user__profile__item}>
      <div className={classes.user_profile_info}>
        <div>
          <Link to={"/profile/" + props.state.id}>
            <img
              src={
                props.state.photos !== undefined &&  props.state.photos.small !== null
                  ? props.state.photos.small
                  : "https://bain.design/wp-content/uploads/2014/08/People-Avatar-Set-Rectangular-12.jpg"
              }
              alt="qwe"
            />
          </Link>
          <div>Country, State</div>
        </div>
        <div className={classes.user_profile_info_text}>
          <h4>{props.state.name}</h4>
          <p>{props.state.status}</p>
        </div>
      </div>
      {props.state.followed ? (
        <button disabled={props.state.disableStatus? props.state.disableStatus: false}  onClick={() => unfollow(props.state.id)}>unfollow</button>
      ) : (
        <button disabled={props.state.disableStatus? props.state.disableStatus: false} onClick={() => follow(props.state.id)}>follow</button>
      )}
    </div>
  );
};

export default UserProfileItem;
