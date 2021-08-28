import Link from "next/link";
import { useUsers } from "../../hooks/useUsers";

export const Users = () => {
  const { data, error, isLoading, isEmpty } = useUsers();

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
      {data?.map((user) => {
        return (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>
                {user.name} ({user.email})
              </a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
