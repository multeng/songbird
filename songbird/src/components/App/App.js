import React, { Component } from "react";
import Header from "../header";
import Levels from "../levels";
import RandomBird from "../random-bird";
import GameFields from "../game-fields";
import "./App.css";
import dataBirds from "../../services/data";

export default class App extends Component {
  _round = 1;
  state = {
    dataSet: this.createData(dataBirds, this._round),
    clickedObj: null,
    clicked: false,
    questionBird: this.createRandomBird(this._round),
    answered: false,
  };

  checkAnswer = (id) => {
    const { dataSet, questionBird } = this.state;
    const idx = dataSet.findIndex((el) => el.id === id);
    const clickedElement = dataSet[idx];
    if (clickedElement.id === questionBird.id) {
      console.log("ZALUPA");
      this.setState(({ answered }) => {
        return { answered: true };
      });
    }
    this.setState(({ clickedObj }) => {
      return { clickedObj: clickedElement, clicked: true };
    });
  };

  createData(dataSet, round) {
    return dataSet[round].map(this.addFields);
  }

  createRandomBird(round) {
    const randomIndex = this.randomInteger();
    console.log(randomIndex);
    return dataBirds[round][randomIndex];
  }

  randomInteger() {
    let rand = 0 + Math.random() * (5 - 0);
    return Math.round(rand);
  }

  addFields(obj) {
    const newObj = Object.assign(obj);
    newObj.success = false;
    newObj.failed = false;
    return newObj;
  }

  render() {
    const { dataSet, questionBird, answered, ...someProps } = this.state;
    return (
      <div>
        <Header />
        <Levels />
        <RandomBird questionBird={questionBird} answered={answered} />
        <GameFields
          list={dataSet}
          checkAnswer={this.checkAnswer}
          someProps={someProps}
        />
      </div>
    );
  }
}
