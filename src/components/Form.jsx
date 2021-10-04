import React, {useRef, useState} from 'react';
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/Button/MyButton";

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
                <MyInput value={post.title} onChange={e => setPost({...post, title: e.target.value})} placeholder = {'Название поста'}/>
                <MyInput value={post.body} onChange={e => setPost({...post, body: e.target.value })} placeholder = {'Описание поста'} />
                <MyButton onClick={addNewPost}> Добавить </MyButton>
            </form>
        </div>
    );
};

export default Form;