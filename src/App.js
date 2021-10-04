import React, {useEffect, useMemo, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import Form from "./components/Form";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/Modal/MyModal";
import MyButton from "./components/UI/Button/MyButton";
import {usePosts} from "./hooks/usePost";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching";
import {getPageCount, getPagesArray} from "./utils/pages";
import Pagination from "./components/UI/Pagination/Pagination";

function App() {
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
    <button onClick={fetchPost}> GET POSTS</button>
        <MyButton onClick = { () => setModal(true)}> Создать пост </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <Form create={createPost}/>
        </MyModal>

        <PostFilter filter={filter} setFilter={setFilter}/>

        {postError &&
            <h1>Произошла ошибка ${postError}</h1>

        }
        { isPostLoading
            ? <Loader/>
            :  <PostList remove={removePost} posts={sortedAndSearch} title={'список постов 1'}/>
        }

       <Pagination totalPages={totalPages} changePage={changePage}/>

    </div>
  );
}


export default App;
