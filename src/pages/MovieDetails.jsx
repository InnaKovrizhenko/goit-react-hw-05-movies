import { useState, useEffect } from "react"
import { fetchMovieDetails } from '../services/api'
import { useParams, Link, Outlet } from 'react-router-dom'

const MovieDetails = () => {
const { movieId } = useParams();
const [movieInfo, setMovieInfo] = useState();


useEffect(() => {
    fetchMovieDetails(movieId).then((setMovieInfo)).catch(error => console.log(error));
}, [movieId, setMovieInfo]);
console.log(movieInfo)

if (!movieInfo) {
    return null;
  }

  const { title, overview, genres, poster_path, vote_average } = movieInfo;
  const genreNames = Object.values(genres).map(genre => genre.name);

  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width={200}
        />
        <div>
          <h2>{title}</h2>
          <p>
            User Score: <span>{vote_average}</span>
          </p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genreNames.join(', ')}</p>
        </div>
      </div>

      <p>Additional information</p>
      <ul>
        <li>
          <Link
            to={`/movies/${movieInfo.id}/cast`}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to={`/movies/${movieInfo.id}/reviews`}
          >
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default MovieDetails

