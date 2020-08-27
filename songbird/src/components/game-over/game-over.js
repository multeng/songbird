import React from "react";
import "./game-over.css";

const GameOver = ({ score, newGame }) => {
  let gameOverElement = (
    <React.Fragment>
      <p className="lead text-center">
        Вы прошли викторину и набрали {score} из 30 возможных баллов
      </p>
      <hr className="my-4" />
      <button className="btn btn btn-success btn-game-over" onClick={newGame}>
        Попробовать еще раз!
      </button>
    </React.Fragment>
  );
  if (score === 30) {
    gameOverElement = (
      <React.Fragment>
        <p className="lead text-center">
          Вы набрали максимальное количесво баллов и прошли игру!
        </p>
        <p className="lead text-center">
          Пердлагаю вам посмотреть занимательное видео про шмелей !:)
        </p>
        <div className="text-center">
          <iframe
            className="video"
            title="Bee"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/u2Ibob2Bqqo"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </React.Fragment>
    );
  }

  return (
    <div className="jumbotron game-over">
      <h1 className="display-3 text-center">Поздравляем!</h1>
      {gameOverElement}
    </div>
  );
};

export default GameOver;
