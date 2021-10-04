import React from 'react';
import Post from "./Post";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove}) => {

    if(!posts.length){
       return <h1> Постов на данный момент нету </h1>
    }

    return (
        <div>
            <h1 style={{textAlign:'center'}}> {title} </h1>
            <TransitionGroup>
                {posts.map((post,index) =>
                    <CSSTransition
                        key={post.id}
                        timeout={300}
                        classNames="post"
                    >

                    <Post remove={remove} number={index+1} post={post} />

                    </CSSTransition>
                )}

            </TransitionGroup>

        </div>
    );
};

export default PostList;