import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { url } from "../global";
import axios from "axios";
import Appbar from "./Appbar";

export function MovieDetail() {
  const { abc } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({});

  const getData = async () => {
    console.log(abc); 
    let data = await axios.get(
      `${url}/movies/getMovieReview/${abc}`
    );
    console.log(data);
    console.log(data.data.data[0]);
    setMovie(data.data.data[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  const styles = {
    color: movie.rating >= 7.5 ? "green" : "red",
  };

  return (
    <div className="movieDetail-outer">
      <Appbar />
      <Button
        style={{ margin: "10px" }}
        variant="contained"
        startIcon={<KeyboardBackspaceIcon />}
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
      <iframe
        width="100%"
        height="600"
        src={movie.trailer}
        title="JAILER - Hukum Lyric Video | Superstar Rajinikanth | Sun Pictures | Anirudh | Nelson"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <div className="Movie-details-Container">
        <div className="movie-name-rating">
          <h1>{movie.name}</h1>
          <p className="movie-rating" style={styles}>{movie.rating}</p>
        </div> 
        <p className="movie-summary">{movie.summary}</p> 
      </div>
    </div>
  );
}
