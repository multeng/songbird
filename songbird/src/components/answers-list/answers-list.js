import React from "react";

import "./answers-list.css";

export default class AnswersList extends React.Component {
  render() {
    const { list, checkAnswer } = this.props;
    const elemnts = list.map((item) => {
      const { id, ruName } = item;
      return (
        <li
          key={id}
          className="list-group-item"
          onClick={() => checkAnswer(id)}
        >
          <span className="li-btn"></span>
          {ruName}
        </li>
      );
    });

    return (
      <div className="col-md-6">
        <ul className="item-list list-group">{elemnts}</ul>
      </div>
    );
  }
}
