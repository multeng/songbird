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
    points: 5,
    score: 0,
    nextLevel: false,
  };

  checkAnswer = (id) => {
    const { dataSet, questionBird, answered, points } = this.state;
    const idx = dataSet.findIndex((el) => el.id === id);
    const clickedElement = dataSet[idx];
    if (!answered) {
      if (clickedElement.id === questionBird.id) {
        this.setState(() => {
          return {
            dataSet: this.changeProperty(dataSet, id, "success"),
            answered: true,
            score: points,
            nextLevel: true,
          };
        });
      } else {
        this.setState(() => {
          return {
            dataSet: this.changeProperty(dataSet, id, "failed"),
            answered: false,
            points: points - 1,
          };
        });
      }
    }
    this.setState(({ dataSet }) => {
      return {
        clickedObj: this.changeClickedElement(dataSet, id),
        clicked: true,
      };
    });
  };

  changeProperty(arr, id, prop) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [prop]: true };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  changeClickedElement(arr, id) {
    const idx = arr.findIndex((el) => el.id === id);
    return arr[idx];
  }

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
    const {
      dataSet,
      questionBird,
      answered,
      score,
      nextLevel,
      ...someProps
    } = this.state;
    return (
      <div>
        <Header score={score} />
        <Levels />
        <RandomBird questionBird={questionBird} answered={answered} />
        <GameFields
          list={dataSet}
          checkAnswer={this.checkAnswer}
          someProps={someProps}
          nextLevel={nextLevel}
        />
      </div>
    );
  }
}
