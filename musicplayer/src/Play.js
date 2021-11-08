import React from "react";
import "./Play.css";
import AudioComponent from "./AudioComponent";
import Easy_on_Me from "./images/Easy_on_Me.jpg";
import Fancy_Like from "./images/Fancy_Like.jpg";
import Bubbly from "./images/Bubbly.jpg";
import Happier_Than_Ever from "./images/Happier_Than_Ever.jpg";

function Play() {
  const tracks = [
    {
      title_: "easy on me",
      artist_: "adele",
      audioSrc: "./music/song_1.mp3",
      image_: Easy_on_Me,
      color: "string",
    },
    {
      title_: "Fancy Like",
      artist_: "adele",
      audioSrc: "./music/song_2.mp3",
      image_: Fancy_Like,
      color: "string",
    },
    {
      title_: "Zion",
      artist_: "Hezekiah Walker",
      audioSrc: "./music/song_3.mp3",
      image_: Bubbly,
      color: "string",
    },
  ];
  return (
    <div className="play">
      <h2>Most Popular</h2>
      <p>92 Songs</p>
      <div className="play__component">
        <AudioComponent tracks={tracks} />
      </div>
    </div>
  );
}

export default Play;
