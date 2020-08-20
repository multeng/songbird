import React from "react";
import "./levels.css";
import titles from "../../services/titles";

const Levels = ({ round }) => {
  const titlesElements = titles.map((item, index) => {
    const { id, title } = item;
    let className = "page-item";
    if (index === round) {
      className += " active";
    }
    return (
      <li key={id} className={className}>
        <a className="page-link" href="/#">
          {title}
        </a>
      </li>
    );
  });

  return <ul className="pagination">{titlesElements}</ul>;
};

export default Levels;
