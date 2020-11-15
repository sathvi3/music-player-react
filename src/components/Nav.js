import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/nav.module.scss";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav className={styles.nav}>
      <h1>Chords</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
