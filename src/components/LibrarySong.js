import React from "react";
import styles from "../styles/librarysong.module.scss";

const LibrarySong = ({ song }) => {
  return (
    <div className={styles.library_song}>
      <img src={song.cover} alt={song.name} />
      <div className={styles.song_description}>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
