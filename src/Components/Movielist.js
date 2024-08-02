import React, { useEffect, useState } from "react";
import { Movie } from "./Movie";
import { IconButton, Paper, ThemeProvider, createTheme } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { url } from "../global";
import axios from "axios";
import { toast } from "react-toastify";
import Appbar from "./Appbar";

export function Movielists() {
  const navigate = useNavigate();

  const [movieList, setMovieList] = useState([]);

  let token = localStorage.getItem("token");

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  }

  const getMovies = async () => {
    try {
      let data = await axios.get(`${url}/movies`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // console.log(data);
      toast.success(data.data.message);
      setMovieList(data.data.data);
    } catch (error) {
      if (error.response.status > 399 || error.response.status < 500) {
        toast.error(error.response.data.message);
        logout();
      } else {
        toast.error(error.response.data.message);
      }
    }
  };

  const deletemovie = async (id) => {
    console.log(id);

    let data = await axios.delete(`${url}/movies/deleteMovieReview/${id}`);
    console.log(data);
    toast.error(data.data.message);
    getMovies();
  };

  // useEffect(() => {
  //   if (token) {
  //     getMovies();
  //   } else {
  //     toast.error("Token Has been Expired Login Again");
  //     logout();
  //   }
  // }, []);

  useEffect(() => {
    try {
      if (token) {
        getMovies();
      } else {
        toast.error("Token Has been Expired Login Again");
        logout();
      }
    } catch (error) {
      if (error.response.status > 399 || error.response.status < 500) {
        toast.error(error.response.data);
        logout();
      }
    }
  }, []);
  return (
    <div>
      <Appbar />
      <div className="movie-list">
        {movieList.map((mv, idx) => (
          <div key={idx}>
            <Movie
              movie={mv}
              id={mv._id}
              delb={
                <IconButton
                  aria-label="delete"
                  color="error"
                  sx={{ marginLeft: "auto" }}
                  onClick={() => deletemovie(mv._id)}
                >
                  <DeleteIcon />
                </IconButton>
              }
              editb={
                <IconButton
                  aria-label="delete"
                  color="secondary"
                  sx={{ marginLeft: "auto" }}
                  onClick={() => navigate(`/Movie/edit/${mv._id}`)}
                >
                  <EditIcon />
                </IconButton>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
