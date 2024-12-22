import React from "react";
import { getNowPlayingMovies, getPopularMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToWatchListIcon from "../components/cardIcons/addToWatchList";

const PopularMoviesPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('popular', getPopularMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const mustWatch = movies.filter(m => m.favourite)
  localStorage.setItem('mustWatch', JSON.stringify(mustWatch))
  const addToWatchList = (movieId) => true 

  return (
    <PageTemplate
      title="Our most Popular Movies"
      movies={movies}
      action={(movie) => {
        return <AddToWatchListIcon movie={movie} />
      }}
    />
  );
};
export default PopularMoviesPage;