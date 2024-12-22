import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favourites, setFavourites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 
  const [mustWatchs, setMustWatchs] = useState( [] ) 

  const addToFavourites = (movie) => {
    let newFavourites = [];
    if (!favourites.includes(movie.id)){
      newFavourites = [...favourites, movie.id];
    }
    else{
      newFavourites = [...favourites];
    }
    setFavourites(newFavourites)
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
  const removeFromFavourites = (movie) => {
    setFavourites( favourites.filter(
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
        favourites,
        mustWatchs,
        addToFavourites,
        removeFromFavourites,
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