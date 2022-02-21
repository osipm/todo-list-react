// import "./styles/App.css";
import PostList from "../component/PostList";
import { useEffect, useRef, useState } from "react";
import PostForm from "../component/PostForm";
import PostFilter from "../component/PostFilter";
import MyModal from "../component/UI/MyModal/MyModal";
import MyButton from "../component/UI/button/MyButton";
import { usePosts } from "../hooks/useHooks";
import PostService from "../API/postServise";
import Loader from "../component/UI/Loader/Loader";
import { useFetching } from "../hooks/useFeching";
import { getPageCount } from "../utils/pages";
import Pagination from "../component/UI/pagination/Pagination";
import { useObserver } from "../hooks/useOserver";
import MySelect from "../component/UI/select/MySelect";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();

  const [fetchPosts, isPostLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts([...posts, ...response.data]);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query);

  useObserver(lastElement, page < totalPages, isPostLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: "20px" }} onClick={() => setModal(true)}>
        Створити пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Кількість елементів на сторінці"
        options={[
          { value: 10, name: "10" },
          { value: 20, name: "20" },
          { value: 50, name: "50" },
          { value: -1, name: "показати все" },
        ]}
      ></MySelect>

      {postError && <h1>{`Произошла ошибка ${postError}`}</h1>}

      <PostList
        removePost={removePost}
        posts={sortedAndSearchedPost}
        title="Пости про JS"
      />

      <div ref={lastElement}></div>

      {isPostLoading && (
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          <Loader />
        </div>
      )}

      {/* <Pagination page={page} totalPages={totalPages} changePage={changePage} /> */}
    </div>
  );
};

export default Posts;
