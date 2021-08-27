import Head from "next/head";
import { Header } from "src/components/Header";
import { Posts as PostsComponent } from "../../components/Posts";

// props 展開せずにその場その場でpropsから利用した方がpropsから渡ってきていることがわかりやすい説
const Posts = () => {
  return (
    <div>
      <Head>
        <title>Posts Page</title>
      </Head>
      <Header />
      <PostsComponent />
    </div>
  );
};

export default Posts;
