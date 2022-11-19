import React, { useEffect, useState } from "react";

const ProfileStatushook =(props)=>{
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  let effectId=props.id
  let effectStatus=props.status
  const effectGetStatusTC =  props.getStatusThunkAC
  useEffect(() => {
    effectGetStatusTC(effectId)
  },[effectId,editMode,effectGetStatusTC]);
    
  useEffect(() => {
   setStatus(effectStatus)
  }, [effectStatus]);

    return (
      <div>
        {editMode ? (
          <div>
            <input
            onChange={(el)=>setStatus(el.currentTarget.value)}
              type="text"
              value={status}
              onBlur={(el) => {
                props.updateStatusThunkAC(el.currentTarget.value);
                setEditMode(false);
              }}
              autoFocus={true}
            />
          </div>
        ) : (
          <div>
            <span onDoubleClick={() => {if(props.logginedUserid===props.id)setEditMode(true )}}>
              {props.status}
            </span>
          </div>
        )}
      </div>
    );
  }

export default ProfileStatushook;
