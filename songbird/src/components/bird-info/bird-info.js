import React from "react";
import Plug from "../plug";
import Player from "../player";
import "./bird-info.css";

export default class BirdInfo extends React.Component {
  render() {
    const { clicked, clickedObj } = this.props.someProps;
    const plug = !clicked ? <Plug /> : null;
    const content = clicked ? (
      <BirdInfoContent clickedObj={clickedObj} />
    ) : null;
    return (
      <div className="col-md-6">
        <div className="bird-details card">
          {plug}
          {content}
        </div>
      </div>
    );
  }
}

const BirdInfoContent = ({ clickedObj }) => {
  const { engName, ruName, img, song, desc } = clickedObj;
  return (
    <React.Fragment>
      <div className="card-body">
        <img className="bird-image" src={img} alt={ruName} />
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h4>{ruName}</h4>
          </li>
          <li className="list-group-item">
            <span>{engName}</span>
          </li>
          <li className="list-group-item">
            <div className="audio-player">
              <Player song={song} />
            </div>
          </li>
        </ul>
      </div>
      <span className="bird-description">{desc}</span>
    </React.Fragment>
  );
};
