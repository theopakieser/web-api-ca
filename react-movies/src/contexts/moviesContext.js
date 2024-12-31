import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const [mustWatchs, setMustWatchs] = useState( [] ) 

  const addToFavorites = (movie) => {
    let newFavorites = [];
    if (!favorites.includes(movie.id)){
      newFavorites = [...favorites, movie.id];
    }
    else{
      newFavorites = [...favorites];
    }
    setFavorites(newFavorites)
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const addToWatchList = (movie) => {
    let newMustWatchs = [];
    if (!mustWatchs.includes(movie.id)){
      newMustWatchs = [...mustWatchs, movie.id];
    }
    else{
      newMustWatchs = [...mustWatchs];
    }
    setMustWatchs(newMustWatchs)
  };
  
  // We will use this function in the next step
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const removeFromWatchList = (movie) => {
    setMustWatchs( mustWatchs.filter(
      (mId) => mId !== movie.id
    ) )
  };

  return (
    <MoviesContext.Provider
      value={{
        favorites,
        mustWatchs,
        addToFavorites,
        removeFromFavorites,
        addReview,
        addToWatchList,
        removeFromWatchList,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;