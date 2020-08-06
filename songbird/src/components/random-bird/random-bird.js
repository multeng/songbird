import React, { Component } from "react";
import "./random-bird.css";

export default class RandomBird extends Component {
  render() {
    return (
      <div className="random-bird jumbotron">
        <img
          className="bird-image"
          src="https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg"
          alt="Козодой"
        ></img>
        <div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h3>Козодой</h3>
            </li>
            <li className="list-group-item">
              <div className="audio-player">
                <audio src="" hidden=""></audio>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
