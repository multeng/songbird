import React from "react";
import AnswersList from "../answers-list";
import BirdInfo from "../bird-info";
import "./game-fields.css";

const GameFields = ({
  list,
  checkAnswer,
  someProps,
  nextLevel,
  onNextLevel,
}) => {
  let className = "btn btn-success";
  if (!nextLevel) {
    className += " disable";
  }

  return (
    <div className="row mb2">
      <AnswersList list={list} checkAnswer={checkAnswer} />
      <BirdInfo someProps={someProps} />
      <button className={className} onClick={() => onNextLevel()}>
        Next Level
      </button>
    </div>
  );
};

export default GameFields;
