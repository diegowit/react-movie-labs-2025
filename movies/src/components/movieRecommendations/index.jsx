import React, { useEffect, useState }  from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router";
import { getMovieRecommendations } from "../../api/tmdb-api";
import { excerpt } from "../../util";
import { useQuery } from "@tanstack/react-query";
import Spinner from '../spinner'
import MovieList from "../movieList";
import AddToPlaylistsIcon from "../cardIcons/addToPlaylists";


export default function MovieRecommendation({ movie }) {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ["recommendations", movie.id, 1],
    queryFn: () => getMovieRecommendations(movie.id, 1),
    keepPreviousData: true,
  });
  
  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  
    const recs = data?.results ?? [];



   return (
    <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
  <MovieList
    movies={recs}
    action={(m) => <AddToPlaylistsIcon movie={m} />}
  />
</div>
  );
}
