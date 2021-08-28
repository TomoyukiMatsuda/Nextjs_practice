import { useComments } from "../../hooks/useComments";

export const Comments = () => {
  const { data, error, isLoading, isEmpty } = useComments();

  // // error が無いかつ data がないでローディング
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
        return <li key={comment.id}>{comment.body}</li>;
      })}
    </ol>
  );
};
