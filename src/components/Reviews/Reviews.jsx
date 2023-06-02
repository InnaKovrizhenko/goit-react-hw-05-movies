import { useState, useEffect } from 'react'
import { fetchMovieReviews } from 'services/api.js'
import { useParams } from 'react-router-dom';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        fetchMovieReviews(movieId).then((response) => {setReviews(response.results)}).catch(error => console.log(error));
    }, [movieId, setReviews]);

    return (
        <>

        {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => {
            return (<li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>)
            })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
        </>
    )
}
export default Reviews;
