import { useState, useEffect } from 'react'
import { fetchTrending } from '../../services/api'
import { Link, useLocation } from 'react-router-dom'
import { Title, List } from './Home.styled'

const Home = () => {
const [trendMovie, setTrendMovie] = useState([]);
const location = useLocation();

useEffect(() => {
  fetchTrending().then((response) => {setTrendMovie(response)}).catch(error => console.log(error));
}, []);

return (
  <>
    <Title>Trending today</Title>
  <List>
  {trendMovie.map(movie => {
      return (
        <li key = {movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location}}>{movie.title || movie.name}</Link>
        </li>
      )
    })}
  </List>
  </>
)
}

export default Home;