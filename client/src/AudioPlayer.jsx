import React, { useEffect, useRef, useState } from "react";
import style from "./AudioPlayer.module.css";

import song1 from "../page-music/Saints Row - Theme Song.mp3";
import song2 from "../page-music/Welcome To Los Santos.mp3";
import song3 from "../page-music/FIFA 21 song.mp3";
import song4 from "../page-music/pop like this.mp3";
import song5 from "../page-music/Skrillex - Bangarang Best part.mp3";
import song6 from "../page-music/TU JOGA PA TRÁS (Super Slowed).mp3";
import song7 from "../page-music/Gta 5 nesesera.mp3";

let songs = [song5, song1, song3, song2, song4, song6, song7];

function getRandomIntInclusive() {
  let min = Math.ceil(0);
  let max = Math.floor(songs.length - 1);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.0);
  const [currentSongIndex, setCurrentSongIndex] = useState(getRandomIntInclusive());
  const firstRender = useRef(true);


  useEffect(() => {
    if (!firstRender.current) {
      audioRef.current.play();
    } else {
      firstRender.current = false;
    }
  }, [currentSongIndex]);

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }

	audioRef.current.play();
  };

  const setAnotherSong = () => {
    let nextIndex = currentSongIndex + 1;
    if (nextIndex >= songs.length) {
      nextIndex = 0;
    }
    setCurrentSongIndex(nextIndex);
  };

  return (
    <div>
      <audio src={songs[currentSongIndex]} onEnded={setAnotherSong} ref={audioRef} />
      <input
        className={style["audio-control-input"]}
        id="volumeControl"
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
      />
    </div>
  );
};

export default AudioPlayer;
