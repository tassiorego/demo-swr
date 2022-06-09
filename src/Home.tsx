import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Home() {
  return (
    <ul>
      <Link to="/exemplo">Exemplo sem SWR</Link>
      <br />
      <Link to="/exemplo-swr">Exemplo com SWR</Link>
    </ul>
  );
}

export default Home;
