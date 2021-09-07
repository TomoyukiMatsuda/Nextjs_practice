import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

const useFetchArray = (url) => {
  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading: !error && !data,
    isEmpty: data && data.length === 0,
  };
};

export const API_URL = "https://jsonplaceholder.typicode.com";

export const useComments = () => {
  return useFetchArray(`${API_URL}/comments`);
};

export const usePosts = () => {
  return useFetchArray(`${API_URL}/posts`);
};

export const useUsers = () => {
  return useFetchArray(`${API_URL}/users`);
};

export const useCommentsByPostsId = (id) => {
  // id がないときは null を返す
  return useFetchArray(id ? `${API_URL}/comments?postId=${id}` : null);
};

export const usePostsByUserId = (id) => {
  // id がないときは null を返す
  return useFetchArray(id ? `${API_URL}/posts?userId=${id}` : null);
};
