import { useHistory } from "react-router-dom";
import MyButton from "./UI/button/MyButton";

const PostItem = ({ post, removePost }) => {
  const router = useHistory();
  return (
    <div className="post">
      <div className="post_content">
        <strong>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post_btns">
        <MyButton onClick={() => router.push(`/posts/${post.id}`)}>
          Відкрити
        </MyButton>
        <MyButton onClick={() => removePost(post)}>Видалити</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
