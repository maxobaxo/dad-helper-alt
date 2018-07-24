import React from "react";
import { Jumbotron, Grid, Row, Col } from "react-bootstrap";
import { AppBar } from "react-toolbox/lib/app_bar";
import styles from "./../styles/Header.css";

function Header(props) {
  return (
    <AppBar
      className={styles.header}
      title="Get To Know Your Baby"
      leftIcon="child_friendly"
    />
  );
}

export default Header;
