import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import CreateLoader from "./UI/Loader/CreateLoader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostId, isLoading, error] = useFetching(async () => {
        const response = await PostService.getIdPost(params.id)
        setPost(response.data)
    })

    const [fetchComments, isCommentLoading, Commenterror] = useFetching(async () => {
        const response = await PostService.getComments(params.id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostId()
        fetchComments()
    },[])

    return (
        <div className='post__content post__content_mainBlock'>
            <h1> {params.id} пост</h1>
            {
                isLoading
                ? <CreateLoader/>
                :<div className='post__content__posts '>
                        <h3> {post.id}. {post.title}</h3>
                        <p> {post.body} </p>
                </div>
            }
            <h1> Комментарии </h1>
            {isCommentLoading
                ? <CreateLoader/>
                :<div className='post__content__posts post__content__posts_comment' >
                    {comments.map(comment =>
                        <div>
                            <h5>{comment.email}</h5>
                            <div>{comment.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;