import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout'
import { Cast } from './Cast/Cast'
import { Rewiews } from './Rewiews/Reviews'

const Home = lazy(() => import('pages/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Movies = lazy(() => import('pages/Movies'));

export const App = () => {
  return (
    <>
        <Routes>
          <Route path='/' element={<Layout />}>
             <Route index element={<Home />} />
             <Route path="movies" element={<Movies />} />
             <Route path="movies/:movieId/" element={<MovieDetails />}>
                <Route path="cast" element={<Cast />} />
                <Route path="rewiews" element={<Rewiews />} />
             </Route>
          </Route>
        </Routes>

    </>
  );
};
