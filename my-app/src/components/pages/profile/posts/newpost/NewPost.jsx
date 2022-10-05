import React from 'react';
import classes from './NewPost.module.css'
const NewPost = () => {
    return (
        <div className={classes.new__post}>
            <form>
                <input type="text" placeholder='heading' className={classes.text__head} />
                <textarea placeholder='Write something here...' cols="80" rows="10" className={classes.text__area}/>
            </form>
        </div>
    );
}

export default NewPost;
