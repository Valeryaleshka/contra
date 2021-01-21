import React, { Component } from "react";
import { GameEngine } from "react-game-engine";
import Container from "react-bootstrap/Container";
import Physics from "./systems/Physics";
import Enemies from "./systems/Enemy";
import Scene from "./systems/Scene";
import BulletPhysics from "./systems/Bullets";
import maingBG from "../assets/sprite-sheets/bg.jpg";
import { keyDown, keyUp, click } from "./systems/Controls";
import Factory from "./factory/Factory";
import MatterJS from "./matter/";
import Menu from "./menu/Menu";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.gameEngine = null;
    this.world = null;
    this.engine = null;
    this.menu = null;
    this.container = React.createRef();
    this.state = {
      showMenu: true,
      isStarted: false,
      playerName: "",
    };
    this.setupWorld();
    window.addEventListener("click", (e) => e.preventDefault());
  }

  setupLevel = () => {
    this.gameFactory.setupLevel(0, this.entities);
    window.addEventListener("keypress", (e) => e.preventDefault());
  };

  setupWorld = () => {
    this.gameFactory = new Factory(this);

    this.entities = this.gameFactory.setupWorld();

    this.gameFactory.setupLevel(0);

    this.entities.scene = {
      left: 0,
      top: 800,
    };

    this.matterJS = new MatterJS(this);
    this.matterJS.setupWorld();

    setTimeout(() => {
      this.gameFactory.addPlayer();
      this.gameEngine.stop();
    }, 100);
  };

  render() {
    return (
      <div
        className="container"
        id="game-container"
        style={{
          background: `url(${maingBG})`,
          backgroundAttachment: "fixed",
          width: 1200,
          height: 800,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Menu
          ref={(ref) => {
            this.menu = ref;
          }}
          gameEngine={this}
        />
        <Container
          className={"game-scene"}
          ref={this.container}
          style={{
            position: "relative",
            overflow: "hidden",
            width: 2400,
            height: 800,
            margin: "auto",
            left: 0,
            top: 0,
            transition: "0.2s ease-out 0s",
          }}
        >
          <GameEngine
            ref={(ref) => {
              this.gameEngine = ref;
            }}
            styles={{}}
            systems={[Scene, Enemies, keyDown, keyUp, BulletPhysics, Physics]}
            entities={this.entities}
          />
        </Container>
      </div>
    );
  }
}
