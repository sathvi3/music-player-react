import React from 'react';
import Player from './components/Player';
import Song from './components/Song';
import styles from '../src/styles/app.scss';

function App() {
  return (
    <div className={styles.app}>
      <Song />
      <Player />
    </div>
  );
}

export default App;
