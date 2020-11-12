import React from 'react';
import styles from "../styles/song.module.scss";

const Song = () => {
    return (
        <div className={styles.song_container}>
            <h1>Picture</h1>
            <h1>Song Name</h1>
            <h1>Artist</h1>
        </div>
    )
}

export default Song;