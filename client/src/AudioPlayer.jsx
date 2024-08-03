import React, { useEffect, useRef, useState } from "react";
import style from "./AudioPlayer.module.css";

import song1 from "../page-music/Saints Row - Theme Song.mp3";
import song2 from "../page-music/Welcome To Los Santos.mp3";
import song3 from "../page-music/FIFA 21 song.mp3";
import song4 from "../page-music/pop like this.mp3";
import song7 from "../page-music/Gta 5 nesesera.mp3";
import song8 from "../page-music/My Hood (Full Mix).mp3";
import song9 from "../page-music/glue.mp3";
import song10 from "../page-music/SIx Days.mp3";
import song12 from "../page-music/Project X.mp3";
import song14 from "../page-music/Game of Thrones - Legendary.mp3";
import song15 from "../page-music/Kanye West.mp3";
import song16 from "../page-music/Le Monde.mp3";
import song17 from "../page-music/industry baby.mp3";

let songs = [song1, song3, song2, song4, song7, song8, song9, song10, song12, song14, song15, song16, song17];

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
		<>
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

			<i 
			onClick={setAnotherSong}
			id={style['next-song']} className="fa-solid fa-forward" />
		</>
	);
};

export default AudioPlayer;
