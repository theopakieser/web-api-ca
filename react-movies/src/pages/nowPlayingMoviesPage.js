import React from "react";
import { getNowPlayingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToWatchListIcon from "../components/cardIcons/addToWatch";

const NowPlayingMoviesPage = (props) => {

  const {  data, error, isLoading, isError }  = useQuery('now_playing', getNowPlayingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const mustWatch = movies.filter(m => m.favorite)
  localStorage.setItem('mustWatch', JSON.stringify(mustWatch))
  const addToWatchList = (movieId) => true 

  return (
    <PageTemplate
      title="Now Playing Movies"
      movies={movies}
      action={(movie) => {
        return <AddToWatchListIcon movie={movie} />
      }}
    />
  );
};
export default NowPlayingMoviesPage;