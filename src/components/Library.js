import React from "react";
import cx from "classnames";
import LibrarySong from "./LibrarySong";
import styles from "../styles/library.module.scss";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div
      className={cx(styles.library, { [styles.active_library]: libraryStatus })}
    >
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
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
