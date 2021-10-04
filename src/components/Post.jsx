import React from 'react';

const Post = (props) => {
    return (
            <div className='post'>
                <div className='post__content'>
                    <strong>{props.post.id} {props.post.title} </strong>
                    <p> {props.post.body} </p>
                </div>
                <div className='post__btn'>
                    <button onClick={() => props.remove(props.post)}> Удалить </button>
                </div>
            </div>
    );
};

export default Post;