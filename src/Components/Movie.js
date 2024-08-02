import { useState } from "react";
import * as React from 'react';
import { CardActions, IconButton } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Counter } from "../Counter.1";

export function Movie({ movie, id, delb, editb }) {
  const [show, setShow] = useState(false);
  const role= localStorage.getItem("role")

  const styles = {
    color: movie.rating >= 7.5 ? "green" : "red"
  }
  const navigate = useNavigate();
  return (
    <div className="movie-container">
      <Card>
        <img className='movie-poster' src={movie.poster} alt="{movie.name}" />
        <CardContent>
          <div className='movie-name-rating'>
            <h2 className='movie-name'>{movie.name}
              <IconButton
                color="primary"
                onClick={() => setShow(!show)}
              >
                {show ? <ExpandMoreIcon /> : <ExpandLessIcon />}
              </IconButton>

              <IconButton
              color="primary"
              onClick={() => navigate(`/Movie/${id}`)}>
                <InfoIcon/> 
              </IconButton>
            </h2>
            <p className='movie-rating' style={styles}>{movie.rating}</p>
          </div>

          {show ? <p className='movie-summary shadow-lg'>{movie.summary}</p> : null}
        </CardContent>
        <CardActions className="counter-ud">
          <Counter /> { role==="admin"? <div>
          {editb} {delb}
          </div>: ""}
        </CardActions>
      </Card>
    </div>
  );
}



