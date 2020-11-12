import React from 'react';
import styles from "../styles/song.module.scss";

const Song = ({ currentSong }) => {
    return (
        <div className={styles.song_container}>
            <img src={currentSong.cover} alt={currentSong.name} />
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    )
}

export default Song;