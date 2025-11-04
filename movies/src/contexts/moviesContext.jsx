import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favorites, setFavorites] = useState( [] )
    const [myReviews, setMyReviews] = useState( {} ) 
     const [playlists, setPlaylists] = useState([]);


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
  
  // We will use this function in the next step
  const removeFromFavorites = (movie) => {
    setFavorites( favorites.filter(
      (mId) => mId !== movie.id
    ) )
  };


    const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };
  //console.log(myReviews);


//must watch
const addToPlaylists = (movie) => {
    let newPlaylists = [];
    if (!playlists.includes(movie.id)){
      newPlaylists = [...playlists, movie.id];
    }
    else{
      newPlaylists = [...playlists];
    }
    setPlaylists(newPlaylists)

    console.log(newPlaylists);
  };

  const removeFromPlaylist= (movie) => {
    setPlaylists( playlists.filter(
      (mId) => mId !== movie.id
    ) )
  };




   return (
    <MoviesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
        playlists,   
        addToPlaylists,
        removeFromPlaylist,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );

};

export default MoviesContextProvider;