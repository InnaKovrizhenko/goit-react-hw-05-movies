import { useState, useEffect } from "react"
import { fetchMovieDetails } from '../../services/api'
import { useParams, Link, Outlet, useNavigate, useLocation } from 'react-router-dom'
import Button from '@mui/material/Button';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { MovieInfo, BoxInfo } from './MovieDetails.styled'

const MovieDetails = () => {
const { movieId } = useParams();
const [movieInfo, setMovieInfo] = useState();
const navigate = useNavigate();
const location = useLocation();


useEffect(() => {
    fetchMovieDetails(movieId).then((setMovieInfo)).catch(error => console.log(error));
}, [movieId, setMovieInfo]);

if (!movieInfo) {
    return null;
  }

  const { title, overview, genres, poster_path, vote_average } = movieInfo;
  const genreNames = Object.values(genres).map(genre => genre.name);

  return (
    <>
    <BoxInfo>
      <Button variant="contained" color='inherit' startIcon={<KeyboardReturnIcon />}
      onClick={() => { navigate(location?.state?.from ?? '/')}}>
        Go back
      </Button>
      <MovieInfo>
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
      </MovieInfo>

      <p>Additional information</p>
      <ul>
        <li>
          <Link
            to={`/movies/${movieInfo.id}/cast`}
            state={location.state}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to={`/movies/${movieInfo.id}/reviews`}
            state={location.state}
          >
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </BoxInfo>
    </>
  );
}

export default MovieDetails

