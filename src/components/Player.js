import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/player.module.scss';

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
    const audioRef = useRef(null);
    //Event Handlers
    const playSongHandler = () => {
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlaying(!isPlaying);
    }
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({ ...songInfo, currentTime: current, duration })
    }
    const getTime = (time) => {
        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime:e.target.value })
    }
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    })
    return (
        <div className={styles.player}>
            <div className={styles.time_control}>
                <p>{getTime(songInfo.currentTime)}</p>
                <input min={0} max={songInfo.duration} value={songInfo.currentTime} onChange={dragHandler} type="range" />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className={styles.play_controls}>
                <FontAwesomeIcon className={styles.play} size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playSongHandler} className={styles.skip_back} size="2x" icon={faPlay} />
                <FontAwesomeIcon className={styles.skip_forward} size="2x" icon={faAngleRight} />
            </div>
            <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )
}

export default Player;