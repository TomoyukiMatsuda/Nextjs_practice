import useSWR from "swr";
import { API_URL } from "../../hooks/useFetchArray";
import { fetcher } from "../../utils/fetcher";

export const UserByUserId = (props) => {
  const { data, error } = useSWR(
    props?.id ? `${API_URL}/users/${props.id}` : null,
    fetcher
  );

  if (!error && !data) {
    return <div>ローディング....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div>Created by {data.name}</div>;
};
