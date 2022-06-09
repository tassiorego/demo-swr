import { AppProvider, usePosts } from './hooks';

function ExemploSWR() {
  const { posts, isLoading, error } = usePosts();

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return (
    <AppProvider>
      {posts?.map((post) => (
        <div>
          <h1>{post.title}</h1>
          <span>
            {post.author}
            {' '}
            {post.favorite && '❌'}
          </span>
        </div>
      ))}
      {!!error && (
        <p style={{ color: 'red' }}>{error}</p>
      )}
    </AppProvider>
  );
}

export default ExemploSWR;
