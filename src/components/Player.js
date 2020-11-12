import React, { useRef } from 'react';
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
    return (
        <div className={styles.player}>
            <div className={styles.time_control}>
                <p>Start Time</p>
                <input type="range" />
                <p>End Time</p>
            </div>
            <div className={styles.play_controls}>
                <FontAwesomeIcon className={styles.play} size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon onClick={playSongHandler} className={styles.skip_back} size="2x" icon={faPlay} />
                <FontAwesomeIcon className={styles.skip_forward} size="2x" icon={faAngleRight} />
            </div>
            <audio ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )
}

export default Player;