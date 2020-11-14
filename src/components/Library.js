import React from "react";
import LibrarySong from "./LibrarySong";
import styles from "../styles/library.module.scss";

const Library = ({ songs, setCurrentSong, audioRef, isPlaying }) => {
  return (
    <div className={styles.library}>
      <h2>Library</h2>
      <div className={styles.library_songs}>
        {songs.map((song) => (
          <LibrarySong
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
