import React, { Component } from "react";
import styles from "./DeadMenu.module.css";
import contraLogo from "./../../../assets/sprite-sheets/Dead.png";

export default class DeadMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        You are Dead !!
        <img className={styles.logo} src={contraLogo} alt="Contra-logo"></img>
        <button className={styles.gameButton}>Restart</button>
      </div>
    );
  }
}
