import { useState, useEffect } from 'react'
import { fetchTrending } from '../services/api'
import { Link } from 'react-router-dom'


const Home = () => {
const [trendMovie, setTrendMovie] = useState([]);

useEffect(() => {
  fetchTrending().then((response) => {setTrendMovie(response)}).catch(error => console.log(error));
}, []);

return (
  <>
    <h1>Trending today</h1>
  <ul>
  {
    trendMovie.map(movie => {
      return (
        <li key = {movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link>
        </li>
      )
    })
  }
  </ul>
  </>
)
}

export default Home;