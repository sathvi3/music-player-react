import React from "react";
import LibrarySong from "./LibrarySong";
import styles from "../styles/library.module.scss";

const Library = ({ songs }) => {
  return (
    <div className={styles.library}>
      <h2>Library</h2>
      <div className={styles.library_songs}>
        {songs.map((song) => (
          <LibrarySong song={song} />
        ))}
      </div>
    </div>
  );
};

export default Library;
