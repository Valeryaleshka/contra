import React, { Component } from "react";
import { GameEngine } from "react-game-engine";
import Container from "react-bootstrap/Container";
import Physics from "./systems/Physics";
import Enemies from "./systems/Enemy";
import Scene from "./systems/Scene";
import BulletPhysics from "./systems/Bullets";
import Effects from "./systems/Effects";
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
      isStarted: false,
      showMenu: true,
      playerName: "",
      levelWidth: 0,
      levelHeight: 0,
    };
    this.factory = new Factory(this);
    this.entities = this.factory.setupWorld();
    this.entities.factory = this.factory;
    window.addEventListener("click", (e) => e.preventDefault());
  }

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
        {" "}
        <Menu
          ref={(ref) => {
            this.menu = ref;
          }}
          game={this}
        />
        <Container
          className={"game-scene"}
          ref={this.container}
          style={{
            position: "relative",
            overflow: "visible",
            width: this.entities.levelWidth,
            height: this.entities.levelHeight,
            margin: "auto",
            left: 0,
            top: 0,
            transition: "0.2s ease-out 0s",
          }}
        >
          <GameEngine
            stop={true}
            ref={(ref) => {
              this.gameEngine = ref;
            }}
            styles={{}}
            systems={[
              Scene,
              Enemies,
              keyDown,
              keyUp,
              BulletPhysics,
              Physics,
              Effects,
            ]}
            entities={this.factory.entities}
          />
        </Container>
      </div>
    );
  }
}
