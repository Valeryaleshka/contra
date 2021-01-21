import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import styles from "./Menu.module.css";
import contraLogo from "./../../assets/sprite-sheets/logo-contra.jpg";
import MenuControls from "./Controls/MenuControls";
import MenuSettings from "./Settings/MenuSettings";
import DeadMenu from "./Dead/DeadMenu";
import stage1 from "./../../assets/audio/Stage1.mp3";
import pauseMusic from "./../../assets/audio/Pause.mp3";
import gameOverMusic from "./../../assets/audio/GameOver.mp3";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.pauseClickHandler = this.pauseClickHandler.bind(this);
    this.resumeClickHandler = this.resumeClickHandler.bind(this);
    this.restartClickHandler = this.restartClickHandler.bind(this);
    this.menuControlsHandler = this.menuControlsHandler.bind(this);
    this.menuSettingsHandler = this.menuSettingsHandler.bind(this);
    this.dead = this.dead.bind(this);
    this.startGame = this.startGame.bind(this);
    this.menu = React.createRef();
    this.input = React.createRef();
    this.music = new Audio(stage1);
    this.music.loop = true;

    this.state = {
      isControlsActive: false,
      isSettingsActive: false,
      isDead: false,
    };
    this.entity = null;

    this.init();
  }

  init() {
    window.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        if (this.props.gameEngine.state.showMenu) {
          this.pauseClickHandler();
        } else {
          this.resumeClickHandler();
          this.setState({
            isControlsActive: false,
            isSettingsActive: false,
          });
        }
        console.log("gagag");
      }

      /*if (e.key === "Shift") {
        if (this.entity === null) {
          let jc = require("json-cycle");

          this.entity = JSON.stringify(
            jc.decycle(this.props.gameEngine.entities)
          );
        }
      }

      if (e.key === "CapsLock") {
        console.log(this.entity);
        let jc = require("json-cycle");

        this.props.gameEngine.gameEngine.swap(
          jc.retrocycle(JSON.parse(this.entity))
        );
      }*/
    });
  }

  dead() {
    console.log(this.state);
    let gameOver = new Audio(gameOverMusic);
    setTimeout(() => {
      gameOver.play();
    }, 500);

    this.setState({
      isDead: true,
    });
    this.pauseClickHandler();
  }

  menuControlsHandler() {
    console.log(this.state);
    if (this.state.isControlsActive) {
      this.setState({
        isControlsActive: false,
      });
    } else {
      this.setState({
        isControlsActive: true,
      });
    }
  }

  menuSettingsHandler() {
    console.log(this.state);
    if (this.state.isSettingsActive) {
      this.setState({
        isSettingsActive: false,
      });
    } else {
      this.setState({
        isSettingsActive: true,
      });
    }
  }

  pauseClickHandler() {
    this.props.gameEngine.gameEngine.stop();
    this.props.gameEngine.state.showMenu = false;
    this.menu.current.classList.remove("hidden");
    this.props.gameEngine.setState({
      isStarted: true,
    });
    this.music.pause();
    let tes = new Audio(pauseMusic);
    if (!this.state.isDead) {
      tes.play();
    }
  }
  resumeClickHandler() {
    this.props.gameEngine.gameEngine.start();
    this.props.gameEngine.state.showMenu = true;
    this.menu.current.classList.add("hidden");
    this.render();
    this.music.play();
  }

  restartClickHandler() {
    /*let jc = require("json-cycle");

    this.props.gameEngine.entities = jc.retrocycle(JSON.parse(this.entity));*/
  }

  startGame() {
    let name = this.input.current.value;
    this.props.gameEngine.setState({
      playerName: name,
    });

    this.resumeClickHandler();
    this.music.play();
  }

  render() {
    return (
      <div ref={this.menu} className={styles.menu}>
        {this.state.isControlsActive && (
          <MenuControls callback={this.menuControlsHandler} />
        )}

        {this.state.isSettingsActive && (
          <MenuSettings callback={this.menuSettingsHandler} />
        )}
        {this.state.isDead && <DeadMenu callback={this.restartClickHandler} />}

        {!this.props.gameEngine.state.isStarted && (
          <div>
            <form className={styles.start}>
              <img
                className={styles.logo}
                src={contraLogo}
                alt="Contra-logo"
              ></img>
              <input
                className={styles.textinput}
                ref={this.input}
                placeholder="Enter Your Name"
              ></input>
              <button className={styles.gameButton} onClick={this.startGame}>
                Start Game
              </button>
              <button
                className={styles.gameButton}
                onClick={this.menuControlsHandler}
              >
                Controls
              </button>
              <button
                className={styles.gameButton}
                onClick={this.menuSettingsHandler}
              >
                Settings
              </button>
            </form>
          </div>
        )}

        {this.props.gameEngine.state.isStarted && (
          <div className={styles.column}>
            <p className={styles.logo}>
              PAUSED {this.props.gameEngine.state.playerName}
            </p>

            <button
              className={styles.gameButton}
              onClick={this.resumeClickHandler}
            >
              Resume
            </button>
            <button
              className={styles.gameButton}
              onClick={this.restartClickHandler}
            >
              Save Game
            </button>
            <button
              className={styles.gameButton}
              onClick={this.restartClickHandler}
            >
              Load Game
            </button>
            <button
              className={styles.gameButton}
              onClick={this.menuControlsHandler}
            >
              Controls
            </button>
            <button
              className={styles.gameButton}
              onClick={this.menuSettingsHandler}
            >
              Settings
            </button>
            <button
              className={styles.gameButton}
              onClick={this.restartClickHandler}
            >
              Restart
            </button>
          </div>
        )}
      </div>
    );
  }
}
