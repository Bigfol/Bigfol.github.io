import { Button, Grid, IconButton } from "@mui/material";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import { forwardRef } from "react";

const PrettoSlider = styled(Slider)({
  color: "#ffffff",
  height: 14,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    width: "42px",
    height: "42px",
    backgroundColor: "transparent",
    backgroundImage: "url(img/timeline-thumb.webp)",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

const VolumSlider = styled(Slider)({
  color: "#ffffff",
  height: 10,
  width: "440px",
  margin: "0 12px",
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    width: "22px",
    height: "22px",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(45deg)",
    },
  },
});

const Control = forwardRef(
  (
    {
      onPlayPause,
      playing,
      played,
      onSeek,
      onSeekMouseUp,
      onMouseSeekDown,
      muted,
      volume,
      onMute,
      onVolumeChange,
      onVolumeSeekDown,
      elapsedTime,
      totalDuration,
      onChangeDispayFormat,
      title,
      closeVideo,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className="flex flex-col absolute z-[999999] h-full justify-between top-0 left-0 right-0 bottom-0"
      >
        <Grid
          container
          direction="column"
          justify="space-between"
          style={{ flexGrow: 1 }}
        >
          <Grid
            container
            direction="row"
            alignItems="center"
            className="py-4 px-6 justify-between items-center"
          >
            <Grid item>
              <h5 className="text-4xl">{title}</h5>
            </Grid>
            <IconButton onClick={closeVideo}>
              <img
                src="img/close.webp"
                alt="close"
                className="scale-75 opacity-80 hover:scale-100 hover:opacity-100 transition-transform"
              />
            </IconButton>
          </Grid>
          <Grid
            container
            direction="row"
            alignItems="center"
            className="justify-center flex-grow"
          >
            <IconButton onClick={onPlayPause} aria-label="play">
              {playing ? (
                <img
                  src="img/pause-player.webp"
                  alt="pause-player"
                  className="scale-75 opacity-80 hover:scale-100 hover:opacity-100 transition-transform"
                />
              ) : (
                <img
                  src="img/play-player.webp"
                  alt="play-player"
                  className="scale-75 opacity-80 hover:scale-100 hover:opacity-100 transition-transform"
                />
              )}
            </IconButton>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            className="py-4 px-4"
          >
            <Grid item xs={12} className="px-2 pb-7">
              <PrettoSlider
                min={0}
                max={100}
                value={played * 100}
                onChange={onSeek}
                onChangeCommitted={onSeekMouseUp}
                onMouseDown={onMouseSeekDown}
              />
            </Grid>
            <Grid item className="flex items-center">
              <IconButton onClick={onPlayPause} className="w-12">
                {playing ? (
                  <img
                    src="img/timeline-pause.webp"
                    alt="timeline-pause"
                    className="h-10"
                  />
                ) : (
                  <img
                    src="img/timeline-play.webp"
                    alt="timeline-play"
                    className="h-10"
                  />
                )}
              </IconButton>

              <IconButton onClick={onMute}>
                {muted ? (
                  <img
                    src="img/volume.webp"
                    alt="volum"
                    className="opacity-70"
                  />
                ) : (
                  <img src="img/volume.webp" alt="volum" />
                )}
              </IconButton>

              <VolumSlider
                min={0}
                max={100}
                value={muted ? 0 : volume * 100}
                onChange={onVolumeChange}
                aria-labelledby="input-slider"
                onMouseDown={onMouseSeekDown}
                onChangeCommitted={onVolumeSeekDown}
              />
              <Button variant="text" onClick={onChangeDispayFormat}>
                <p
                  className="mx-4 font-[SuperWebcomicBros] text-2xl"
                  style={{ color: "#fff", marginLeft: 16 }}
                >
                  {elapsedTime} / {totalDuration}
                </p>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
);

export default Control;
