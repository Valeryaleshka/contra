import React, { Component } from "react";
import styles from "./MenuSettings.module.css";

export default class MenuSettings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <p>Sound on/off</p>
        <button className={styles.gameButton} onClick={this.props.callback}>
          Back
        </button>
      </div>
    );
  }
}
