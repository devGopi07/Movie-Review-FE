import { useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import * as React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import { url } from "./global";

export function MovieLists() {
  const { abc } = useParams();
  // const movie = movielists[abc];

  const [movie,setMovie] =useState([]);

  useEffect(()=>{
    fetch(`${url}/movie/${abc}`,{method:"GET"})
    .then((data)=>data.json())
    .then((mv)=>setMovie(mv));
  },[]) 
  const styles = {
    color: movie.rating >= 8 ? "green" : "red"
  };
  const navigate = useNavigate();
  return (
    <div>
      <iframe width="100%"
        height="700px"
        src={movie.trailer}
        title="Ranjithame - Varisu Lyric Song (Tamil) | Thalapathy Vijay | Rashmika | Vamshi Paidipally | Thaman S"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>

      <div className='Movie-details-Container'>
        <h1>Movie details page of: {movie.name}</h1>
        <div className='movie-name-rating'>
          <h2 className='movie-name'>{movie.name}</h2>
          <p className='movie-rating' style={styles}>{movie.rating}</p>
        </div>
        <p className='movie-summary'>{movie.summary}</p>
        <Button variant="contained" startIcon={<KeyboardBackspaceIcon />} onClick={() => navigate(-1)}>Back</Button>

      </div>

    </div>
  );
}
