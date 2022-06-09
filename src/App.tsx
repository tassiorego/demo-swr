import axios from 'axios';
import { useEffect, useState } from 'react';
import { AppProvider } from './hooks';

type Post = {
  title: string;
  author: string;
  favorite: boolean;
}

function Exemplo() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    setError('');
    axios.get('http://localhost:5050/posts')
      .then((response) => setPosts(response.data))
      .catch(() => setError('Houve um erro'))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return (
    <AppProvider>
      {posts.map((post) => (
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

export default Exemplo;
