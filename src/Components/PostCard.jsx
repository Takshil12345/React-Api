import React from 'react';

const PostCard = (props) => {
    return (
        <div className='post-card'>
            <h2>{props.title}</h2>
            <h3>{props.body}</h3>
        </div>
    )
}

export default PostCard;