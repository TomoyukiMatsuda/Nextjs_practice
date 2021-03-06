import Link from "next/link";
import { useCommentsByPostsId } from "../../../hooks/useFetchArray";

export const CommentsByPostId = (props) => {
  const { data, error, isLoading, isEmpty } = useCommentsByPostsId(props.id);

  if (isLoading) {
    return <div>ローディング中です。</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (isEmpty) {
    return <div>データはからです。</div>;
  }

  return (
    <ol>
      {data?.map((comment) => {
        return (
          <li key={comment.id}>
            <Link href={`/comments/${comment.id}`}>
              <a>{comment.body}</a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
