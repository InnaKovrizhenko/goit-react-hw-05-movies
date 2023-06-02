import { Link, useLocation, useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { fetchSearchMovies } from '../../services/api'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { List } from './Movies.styled'

 const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const movieTitle = searchParams.get('movieTitle') ?? '';
    const [movies, setMovies] = useState([]);
    const location = useLocation();

    useEffect(() => {
        if (movieTitle === "") return;
        fetchSearchMovies(movieTitle).then((setMovies)).catch(error => console.log(error));
    }, [movieTitle, searchParams]);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        setSearchParams({ movieTitle: form.elements.movieTitle.value });
        form.reset();
      };
    
      return (
        <>
          <form onSubmit={handleSubmit}>
          <TextField id="outlined-basic" label="movie search" variant="outlined" 
          name="movieTitle" color='warning' size="small"/>
          <Button type="submit" variant="contained" color='inherit' startIcon={<SearchIcon />}
      >
        Search
      </Button>
          </form>
          {movies && <List>
            {movies.map(movie => {
            return (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`} 
                        state={{ from: location }}>
                          {movie.title || movie.name}
                          </Link>
                    </li>
                )
            })}
          </List>
 }
        </>
      );
    };

export default Movies;