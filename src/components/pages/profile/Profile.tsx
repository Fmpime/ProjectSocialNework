import React from "react";
import {useState} from "react";
import {startDialogThunkCreator} from "../../../redux/MessageReducer";
import Feching from "../../UI/Fetching/Feching";
import Posts from "./posts/Posts";
// @ts-ignore
import classes from "./Profile.module.css";
import ProfileHeader from "./profileheader/ProfileHeader";
import ProfileInfo from "./profileinfo/ProfileInfo";
import ProfileRedactor from "./profileinfo/ProfileRedactor/ProfileRedactor";


type PropsType = {
    profileState: {
        aboutMe: string
        contacts: {
            skype: string,
            vk: string,
            facebook: string,
            icq: string,
            email: string,
            googlePlus: string,
            twitter: string,
            instagram: string,
            whatsApp: string
        }
        photos: {
            large: string | undefined;
            small: string | undefined;
        };
        fullName: string
        userId: number
        lookingForAJob: boolean
        lookingForAJobDescription: string
    };
    isFetching: boolean
    loginedUserid: number
    setProfileInfoThunkCreator: (
        photo: object,
        aboutMe: string,
        lookingForAJob: boolean,
        lookingForAJobDescription: string,
        fullName: string,
        userId: number
    ) => (dispatch: any) => void
}


const Profile = (props:PropsType) => {
    console.log(props)
    const [changeProfileMode, setChangeProfileMode] = useState(false);
    return (
        <div className={classes.content}>
            {props.isFetching? <Feching/> : null}
            <ProfileHeader {...props} />
            <ProfileInfo {...props} />
            {props.profileState.userId !== props.loginedUserid ?
                <div>
                    <button onClick={startDialogThunkCreator(props.profileState.userId)}>Write Message</button>
                </div>
                : null}
            {changeProfileMode && props.profileState.userId === props.loginedUserid ? (
                    <ProfileRedactor
                        aboutMe={props.profileState.aboutMe}
                        contacts={props.profileState.contacts}
                        fullName={props.profileState.fullName}
                        lookingForAJob={props.profileState.lookingForAJob}
                        lookingForAJobDescription={
                            props.profileState.lookingForAJobDescription
                        }
                        photosSmall={props.profileState.photos.small}
                        photosLarge={props.profileState.photos.large}
                        userId={props.profileState.userId}
                        setChangeProfileMode={setChangeProfileMode}
                        setProfileInfoThunkCreator={props.setProfileInfoThunkCreator}
                    />
                )
                : props.profileState.userId === props.loginedUserid ?
                    <button style={{margin: "1em 0em 1em 6em"}} onClick={() => {
                        setChangeProfileMode(true)
                    }}>Change profile</button> : null}
            <Posts/>
        </div>
    );
};

export default Profile;
