import React, { useState } from "react";
import "./Playlistcomponent.css";
import bad_habits from "./images/bad_habits.jpg";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { makeStyles } from "@mui/styles";

function Playlistcomponent({ image, title, artist, duration }) {
  const [likeState, setLikeState] = useState(false);

  function iconStyles() {
    return {
      likeIcon: {
        color: "red",
        marginRight: "20px",
      },
      dislikeIcon: {
        color: "black",
        marginRight: "20px",
      },
    };
  }

  const classes = makeStyles(iconStyles)();

  const chooseLike = () => {
    setLikeState(!likeState);
  };

  return (
    <div className="playlistcomponent">
      <span className="playlistcomponent__image">
        <img src={image} alt="song pic" />
        <ArrowRightIcon />
      </span>

      <h2>{title}</h2>
      <p>{artist}</p>
      <p>{duration}</p>

      {/* <button>Like</button> */}
      <div className="like__button">
        <FavoriteIcon
          onClick={chooseLike}
          className={likeState ? classes.likeIcon : classes.dislikeIcon}
        />
      </div>
    </div>
  );
}

export default Playlistcomponent;
