import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/player.module.scss';

const Player = () => {
    return (
        <div className={styles.player}>
            <div className={styles.time_control}>
                <p>Start Time</p>
                <input type="range" />
                <p>End Time</p>
            </div>
            <div className={styles.play_controls}>
                <FontAwesomeIcon className={styles.play} size="2x" icon={faAngleLeft} />
                <FontAwesomeIcon className={styles.skip_back} size="2x" icon={faPlay} />
                <FontAwesomeIcon className={styles.skip_forward} size="2x" icon={faAngleRight} />
            </div>
        </div>
    )
}

export default Player;