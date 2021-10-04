import React from 'react';
import {useHistory} from 'react-router-dom'

const Post = (props) => {
    const router = useHistory()
    return (
            <div className='post'>
                <div className='post__content'>
                    <strong>{props.post.id} {props.post.title} </strong>
                    <p> {props.post.body} </p>
                </div>
                <div className='post__btn'>
                    <button onClick={() => router.push(`/posts/${props.post.id}`)}> Открыть </button>
                    <button onClick={() => props.remove(props.post)}> Удалить </button>
                </div>
            </div>
    );
};

export default Post;