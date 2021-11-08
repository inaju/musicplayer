import React, { useState, useEffect, useRef } from "react";
import "./AudioComponent.css";
import AudioControls from "./AudioControls";

function AudioComponent({ tracks, image, title, artist, duration }) {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const { title_, artist_, color, image_, audioSrc } = tracks[trackIndex];
  console.log(audioSrc);
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  const { duration_ } = audioRef.current;

  const toPrevTrack = () => {
    console.log(trackIndex);
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
      audioRef.current.play();
    } else {
      setTrackIndex(trackIndex - 1);
      audioRef.current.play();
    }
    console.log("TODO go to prev");
  };

  const toNextTrack = () => {
    console.log("Todo go to Next");
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      // startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="audio__component">
      <img src={image_} alt="song pic" />
      <h2>{title_}</h2>
      <p>{artist_}</p>
      <p>{duration_}</p>

      <AudioControls
        isPlaying={isPlaying}
        onPrevClick={toPrevTrack}
        onNextClick={toNextTrack}
        onPlayPauseClick={setIsPlaying}
      />
    </div>
  );
}

export default AudioComponent;
