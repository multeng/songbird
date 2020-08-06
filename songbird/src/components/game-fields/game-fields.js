import React from "react";
import AnswersList from "../answers-list";
import BirdInfo from "../bird-info";
import "./game-fields.css";

const GameFields = () => {
  return (
    <div className="row mb2">
      <AnswersList />
      <BirdInfo />
      <button class="btn btn-success">Next Level</button>
    </div>
  );
};

export default GameFields;
