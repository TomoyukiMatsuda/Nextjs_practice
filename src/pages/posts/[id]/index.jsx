import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { usePost } from "../../../hooks/usePost";
import { Post } from "../../../components/Post";

// todo #23 20:00あたりから再開！！！

// props 展開せずにその場その場でpropsから利用した方がpropsから渡ってきていることがわかりやすい説
const PostId = () => {
  const { post, user, error, isLoading } = usePost();

  console.log({ post, user, error, isLoading });
  return (
    <div className={styles.container}>
      <Header />
      <Post />
    </div>
  );
};

export default PostId;