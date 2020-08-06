import React, { Component } from "react";
import "./random-bird.css";

export default class RandomBird extends Component {
  render() {
    return (
      <div className="random-bird jumbotron">
        <img
          class="bird-image"
          src="https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg"
          alt="Козодой"
        ></img>
        <div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <h3>Козодой</h3>
            </li>
            <li class="list-group-item">
              <div class="audio-player">
                <audio src="" hidden=""></audio>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
