import { useState } from "react";
import * as React from 'react';
import { IconButton } from "@mui/material";
import {Badge} from "@mui/material"; 

export function Counter() {
  let [like, setLike] = useState(false);
  let [dislike, setDislike] = useState(false); 

  return (
    <div>
      <IconButton
        color="primary"
        onClick={() => {setLike(!like) ; setDislike(false)} }
      >
        <Badge badgeContent={like ? 1: null} color="primary">
          👍🏻
        </Badge>
      </IconButton>

      <IconButton
        color="primary"
        onClick={() => {setDislike(!dislike) ; setLike(false)} }
      >
        <Badge badgeContent={dislike ? 1 : null} color="error">
          👎🏻
        </Badge>
      </IconButton>
    </div>
  );
}
