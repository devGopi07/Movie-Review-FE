import { useState } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { url } from "../global";
import { toast } from "react-toastify";
import axios from "axios";
import Appbar from "./Appbar";

const movieValidationSchema = yup.object({
  name: yup.string().required("name field cant be empty"),
  
  poster: yup
  .string()
  .required("poster field cant be empty")
  .min(5, "Try Something Bigger 👍"),
  
  rating: yup
    .number()
    .required("rating field cant be empty")
    .min(0, "Try Something Bigger 👍")
    .max(10),
    
    summary: yup
    .string()
    .required("summary field cant be empty")
    .min(20, "Try Something Bigger 👍"),
    
    trailer: yup
    .string()
    .required("trailer field cant be empty")
    .min(10, "Try Something Bigger 👍")
    .url(),
  });
  
  export function AddMovie() {
    const navigate = useNavigate();

    const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        name: "",
        poster: "",
        rating: "",
        summary: "",
        trailer: "",
      },
      validationSchema: movieValidationSchema,
      onSubmit: (newMovies) => {
        console.log("Form Values Are", newMovies);
        addmovie(newMovies);
      },
    });

  const addmovie = async (newMovies) => {
    let { name, poster, rating, summary, trailer } = newMovies;
    let payload = { name, poster, rating, summary, trailer };
    console.log("this is PAYLOAD", payload);
    try {
      let res = await axios.post(`${url}/movies/addMovieReview`, payload);
      console.log(res);
      toast.success(res.data.message);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }; 

  return (
    <div>
      <Appbar />
      <form onSubmit={handleSubmit} className="addmovie-outer">
        <TextField
          id="outlined-basic"
          label="Enter the Movie name"
          variant="outlined"
          value={values.name}
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && errors.name}
          helperText={touched.name && errors.name ? errors.name : null}
        />

        <TextField
          id="outlined-basic"
          label="Enter the Movie poster"
          variant="outlined"
          value={values.poster}
          name="poster"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.poster && errors.poster}
          helperText={touched.poster && errors.poster ? errors.poster : null}
        />

        <TextField
          id="outlined-basic"
          label="Enter the Movie rating"
          variant="outlined"
          value={values.rating}
          name="rating"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.rating && errors.rating}
          helperText={touched.rating && errors.rating ? errors.rating : null}
        />

        <TextField
          id="outlined-basic"
          label="Enter the Movie summary"
          variant="outlined"
          value={values.summary}
          name="summary"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.summary && errors.summary}
          helperText={touched.summary && errors.summary ? errors.summary : null}
        />

        <TextField
          id="outlined-basic"
          label="Enter the Movie Trailer"
          variant="outlined"
          value={values.trailer}
          name="trailer"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.trailer && errors.trailer}
          helperText={touched.trailer && errors.trailer ? errors.trailer : null}
        />

        <Button variant="contained" type="submit">
          Add movie
        </Button>
      </form>
    </div>
  );
}
