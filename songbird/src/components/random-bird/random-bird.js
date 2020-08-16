import React, { Component } from "react";
import Player from "../player";
import "./random-bird.css";
import startImages from "../../assets/img/shmele.jpg";

export default class RandomBird extends Component {
  render() {
    const { questionBird, answered } = this.props;
    const { ruName, song, img } = questionBird;
    let name = "****";
    let imgPath = startImages;
    if (answered) {
      name = ruName;
      imgPath = img;
    }
    return (
      <div className="random-bird jumbotron">
        <img className="bird-image" src={imgPath} alt={name}></img>
        <div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h3>{name}</h3>
            </li>
            <li className="list-group-item">
              <div className="audio-player">
                <Player song={song} />
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
