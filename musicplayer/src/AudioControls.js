import React from "react";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

function AudioControls({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}) {
  return (
    <div className="audio__controls">
      {console.log(isPlaying)}

      <button
        type="button"
        className="prev"
        aria-label="previous"
        onClick={onPrevClick}
      >
        <SkipPreviousIcon />
      </button>

      {isPlaying ? (
        <button
          type="button"
          className="pause"
          aria-label="pause"
          onClick={() => onPlayPauseClick(false)}
        >
          <PauseIcon />
        </button>
      ) : (
        <button
          type="button"
          className="pause"
          aria-label="pause"
          onClick={() => onPlayPauseClick(true)}
        >
          <PlayArrowIcon />
        </button>
      )}
      <button type="button" className="next" onClick={onNextClick}>
        <SkipNextIcon />
      </button>
    </div>
  );
}

export default AudioControls;
