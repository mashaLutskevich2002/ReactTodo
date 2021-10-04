import React, {useEffect, useMemo, useState} from "react";
import '../styles/App.css'
import PostList from "../components/PostList";
import Form from "../components/Form";
import PostFilter from "../components/PostFilter";
import CreateModal from "../components/UI/Modal/CreateModal";
import CreatePostButton from "../components/UI/Button/CreatePostButton";
import {usePosts} from "../hooks/usePost";
import PostService from "../API/PostService";
import CreateLoader from "../components/UI/Loader/CreateLoader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import CreatePagination from "../components/UI/Pagination/CreatePagination";

function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort:'', query:''})
    const [modal, setModal] = useState(false)
    const sortedAndSearch = usePosts(posts, filter.sort, filter.query)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const [fetchPost, isPostLoading, postError] = useFetching(async ()=>{
        const response = await PostService.getAll(limit,page);
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount,limit))
    })

    useEffect(()=>{
        fetchPost()
    }, [page])

    const changePage = (page) =>{
        setPage(page)
    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id ))
    }

    return (
        <div className="App">
            <CreatePostButton onClick = { () => setModal(true)}> Создать пост </CreatePostButton>
            <CreateModal visible={modal} setVisible={setModal}>
                <Form create={createPost}/>
            </CreateModal>

            <PostFilter filter={filter} setFilter={setFilter}/>

            {postError &&
            <h1>Произошла ошибка ${postError}</h1>

            }
            { isPostLoading
                ? <CreateLoader/>
                :  (
                    <React.Fragment>
                        <PostList remove={removePost} posts={sortedAndSearch} title={`список постов ${page}`}/>
                        <CreatePagination totalPages={totalPages} changePage={changePage}/>
                    </React.Fragment>
                )
            }
        </div>
    );
}

export default Posts;
