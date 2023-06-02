import { useState, useEffect } from 'react'
import { fetchMovieCredits } from 'services/api.js'
import { useParams } from 'react-router-dom';

const Cast = () => {
    const [actors, setActors] = useState([]);
    const { movieId } = useParams();
    const noImagePoster =
    'https://cdn.vectorstock.com/i/preview-1x/82/99/no-image-available-like-missing-picture-vector-43938299.jpg';

    useEffect(() => {
        fetchMovieCredits(movieId).then((response) => {setActors(response.cast)}).catch(error => console.log(error));
    }, [movieId]);

    return (
        <>
        {actors && <ul>
            {actors.map(actor => {
                return <li key={actor.id}>
                  <img
                    src={actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : noImagePoster}
                    alt=''
                  />
                <div>
                  <p>{actor.name}</p>
                  <p>Character: {actor.character}</p>
                </div>
                </li>
            })}
        </ul>      
        }
        </>
    )
}

export default Cast;