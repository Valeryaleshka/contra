import React, { Component } from "react";
import styles from "./MenuSettings.module.css";

export default class MenuSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.volume,
    };
    this.slider = React.createRef();
  }

  handleChange = (value) => {
    this.setState({ value: value });
    this.props.changeVolume(value);
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <p>Volume</p>
        <div className={styles.slider}>
          <input
            ref={this.slider}
            type="range"
            min="0"
            max="1"
            value={this.state.value}
            onChange={() => {
              this.handleChange(this.slider.current.value);
            }}
            step="0.1"
          />
        </div>
        <button className={styles.gameButton} onClick={this.props.callback}>
          Back
        </button>
      </div>
    );
  }
}
