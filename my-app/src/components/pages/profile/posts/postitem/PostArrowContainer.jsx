import React from 'react';
import PostItem from './PostItem';



const PostArrow = (props) => {
    return (
        <div>
            {props.postItemData.map((state) => {
          return (
            <PostItem
              likes={state._likes}
              heading={state._heading}
              content={state._content}
              date={state._date}
            />
          );
        })}
        </div>
    );
}

export default PostArrow;
