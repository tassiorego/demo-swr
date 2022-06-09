import useFetch from './useFecth';

type Post = {
  title: string;
  author: string;
  favorite: boolean;
}

export function usePosts() {
  const {
    data,
    error,
    isLoading,
    mutate,
  } = useFetch<Post[]>('/posts');

  return {
    posts: data,
    error: error ? 'Houve um problema' : '',
    isLoading,
    mutate,
  };
}
