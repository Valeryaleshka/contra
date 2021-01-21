import React, { Component } from "react";
import styles from "./MenuControls.module.css";

export default class MenuSettings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <p>D - Fire</p>
        <p>Space - Jump</p>
        <p>→←↑↓ - Move</p>
        <button className={styles.gameButton} onClick={this.props.callback}>
          Back
        </button>
      </div>
    );
  }
}
