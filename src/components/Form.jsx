import React, {useRef, useState} from 'react';
import CreateInput from "./UI/Input/CreateInput";
import CreatePostButton from "./UI/Button/CreatePostButton";

const Form = ({create}) => {
    const [post, setPost] = useState({title:'', body:''})
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
                ...post,
                id:Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }
    return (
        <div>
            <form className='form' onSubmit={addNewPost} >
                <CreateInput value={post.title} onChange={e => setPost({...post, title: e.target.value})} placeholder = {'Название поста'}/>
                <CreateInput value={post.body} onChange={e => setPost({...post, body: e.target.value })} placeholder = {'Описание поста'} />
                <CreatePostButton onClick={addNewPost}> Добавить </CreatePostButton>
            </form>
        </div>
    );
};

export default Form;