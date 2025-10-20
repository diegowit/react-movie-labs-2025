import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlayListAddIcon from "@mui/icons-material/PlaylistAdd";


const AddToPlaylistsIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToPlaylists = (e) => {
    e.preventDefault();
    context.addToMustWatch(movie);
  };

  return (
    <IconButton aria-label="add to Playlist" onClick={handleAddToPlaylists}>
      <PlayListAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToPlaylistsIcon;
