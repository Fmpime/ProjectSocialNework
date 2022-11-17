import React from 'react';
import PostItem from './PostItem';



const PostArrow = (props) => {
    return (
        <div>
            {props.postItemData.map((state) => {
          return (
            <PostItem
              likes={state._likes}
              heading={state.postHead}
              content={state.postBody}
              date={state._date}
            />
          );
        })}
        </div>
    );
}

export default PostArrow;
