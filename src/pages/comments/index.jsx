import Head from "next/head";
import { Header } from "src/components/Header";
import { Comments as CommentsComponent } from "../../components/Comments";

// props 展開せずにその場その場でpropsから利用した方がpropsから渡ってきていることがわかりやすい説
export const Comments = () => {
  return (
    <div>
      <Head>
        <title>Comments Page</title>
      </Head>
      <Header />
      <CommentsComponent />
    </div>
  );
};

export default Comments;
