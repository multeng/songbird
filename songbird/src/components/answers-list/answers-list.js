import React from "react";

import "./answers-list.css";

export default class AnswersList extends React.Component {
  render() {
    const { list, checkAnswer } = this.props;
    const elemnts = list.map((item) => {
      const { id, ruName, failed, success } = item;
      let className = "list-group-item answer";
      if (failed) {
        className += " failed";
      }
      if (success) {
        className += " success";
      }
      return (
        <li key={id} className={className} onClick={() => checkAnswer(id)}>
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
