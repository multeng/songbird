import React, { Component } from "react";
import Header from "../header";
import Levels from "../levels";
import RandomBird from "../random-bird";
import GameFields from "../game-fields";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Levels />
        <RandomBird />
        <GameFields />
      </div>
    );
  }
}
